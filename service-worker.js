var dataCache = "dataCache-1  ";
var appShellCache = "appShellCache-3";
var custom404 = new Request("/404.html");
var routesToRedirects = [
    new Request("/home"),
];
var filesToCache = [
    new Request("/"),
    new Request("/app.min.js"),
    new Request("/app/app.component.html "),
    new Request("/app/home.component.html "),
    new Request("/assets/css/main.css"),
    new Request("/vendor/core-js/client/shim.min.js"),
    new Request("/vendor/zone.js/dist/zone.js"),
    new Request("/vendor/reflect-metadata/Reflect.js"),
    new Request("/vendor/systemjs/dist/system.src.js"),
    new Request("/systemjs.config.js"),
    new Request("assets/images/surfer-48.png"),
    new Request("https://fonts.googleapis.com/icon?family=Material+Icons"),
    new Request("https://cdnjs.cloudflare.com/ajax/libs/materialize/0.97.7/css/materialize.min.css"),
    new Request("https://code.jquery.com/jquery-3.1.0.min.js"),
    new Request("https://cdnjs.cloudflare.com/ajax/libs/materialize/0.97.7/js/materialize.min.js"),
];
// If a byte changes -> new service worker will be installed
self.addEventListener("install", function (e) {
    console.log("[ServiceWorker] Install");
    e.waitUntil(caches.open(appShellCache).then(function (cache) {
        console.log("[ServiceWorker] Caching App Shell");
        return cache.addAll(filesToCache)
            .then(function () { handle404Redirects(cache); });
    }));
});
// When the currently open pages of your site are closed, the old service worker will be killed 
// and the new service worker will take control and fires "activate"
self.addEventListener("activate", function (e) {
    console.log("[ServiceWorker] Activate");
    e.waitUntil(caches.keys().then(function (keyList) {
        return Promise.all(keyList.map(function (key) {
            if (key !== appShellCache) {
                console.log("[ServiceWorker] Removing old cache", key);
                return caches.delete(key);
            }
        }));
    }));
});
self.addEventListener("fetch", function (e) {
    console.log("[ServiceWorker] Fetch", e.request.url);
    var dataUrl = "[insert data url here]";
    // we cache the data received from the data api so that we can display the data really fast before receiving the data
    if (e.request.url.indexOf(dataUrl) === 0) {
        e.respondWith(fetch(e.request)
            .then(function (response) {
            return caches.open(dataCache).then(function (cache) {
                cache.put(e.request, response.clone());
                console.log("[ServiceWorker] Fetched&Cached Data");
                return response;
            });
        }));
    }
    else {
        // return the cached app shell
        e.respondWith(caches.match(e.request).then(function (response) {
            return response || fetch(e.request);
        }));
    }
});
self.addEventListener("push", function (e) {
    console.log("[ServiceWorker] Push message received ", e);
    // instead of having a fixed message we could get the content from an api here
    var title = "Push message";
    e.waitUntil(registration.showNotification(title, {
        body: "Some Text",
        icon: "assets/images/surfer-48.png",
        tag: "message-tag",
    }));
});
self.addEventListener("notificationclick", function (event) {
    console.log("[ServiceWorker] Notification click: tag ", event.notification.tag);
    event.notification.close();
    var url = "https://toeggel.github.io/home";
    event.waitUntil(clients.matchAll({
        type: "window",
    })
        .then(function (windowClients) {
        for (var i = 0; i < windowClients.length; i++) {
            var client = windowClients[i];
            console.log("[ServiceWorker] Client URL:", client.url);
            if (client.url === url && "focus" in client) {
                return client.focus();
            }
        }
        if (clients.openWindow) {
            return clients.openWindow(url);
        }
    }));
});
function handle404Redirects(cache) {
    return fetch(custom404)
        .then(function (response) {
        routesToRedirects.forEach(function (route) {
            var r = response.clone();
            return cache.put(route, r);
        });
    });
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNsaWVudC9zZXJ2aWNlLXdvcmtlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxJQUFJLFNBQVMsR0FBRyxlQUFlLENBQUM7QUFDaEMsSUFBSSxhQUFhLEdBQUcsaUJBQWlCLENBQUM7QUFFdEMsSUFBTSxTQUFTLEdBQUcsSUFBSSxPQUFPLENBQUMsV0FBVyxDQUFDLENBQUM7QUFDM0MsSUFBTSxpQkFBaUIsR0FBRztJQUN4QixJQUFJLE9BQU8sQ0FBQyxPQUFPLENBQUM7Q0FDckIsQ0FBQztBQUNGLElBQUksWUFBWSxHQUFjO0lBQzVCLElBQUksT0FBTyxDQUFDLEdBQUcsQ0FBQztJQUNoQixJQUFJLE9BQU8sQ0FBQyxhQUFhLENBQUM7SUFDMUIsSUFBSSxPQUFPLENBQUMsMEJBQTBCLENBQUM7SUFDdkMsSUFBSSxPQUFPLENBQUMsMkJBQTJCLENBQUM7SUFDeEMsSUFBSSxPQUFPLENBQUMsc0JBQXNCLENBQUM7SUFDbkMsSUFBSSxPQUFPLENBQUMsb0NBQW9DLENBQUM7SUFDakQsSUFBSSxPQUFPLENBQUMsOEJBQThCLENBQUM7SUFDM0MsSUFBSSxPQUFPLENBQUMscUNBQXFDLENBQUM7SUFDbEQsSUFBSSxPQUFPLENBQUMscUNBQXFDLENBQUM7SUFDbEQsSUFBSSxPQUFPLENBQUMscUJBQXFCLENBQUM7SUFDbEMsSUFBSSxPQUFPLENBQUMsNkJBQTZCLENBQUM7SUFDMUMsSUFBSSxPQUFPLENBQUMseURBQXlELENBQUM7SUFDdEUsSUFBSSxPQUFPLENBQUMsbUZBQW1GLENBQUM7SUFDaEcsSUFBSSxPQUFPLENBQUMsNkNBQTZDLENBQUM7SUFDMUQsSUFBSSxPQUFPLENBQUMsaUZBQWlGLENBQUM7Q0FDL0YsQ0FBQztBQUVGLDREQUE0RDtBQUM1RCxJQUFJLENBQUMsZ0JBQWdCLENBQUMsU0FBUyxFQUFFLFVBQUMsQ0FBa0I7SUFDbEQsT0FBTyxDQUFDLEdBQUcsQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDO0lBRXZDLENBQUMsQ0FBQyxTQUFT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Q0FBQztBQUNKLENBQUMsQ0FBQyxDQUFDO0FBRUgsNEJBQTRCLEtBQUs7SUFDL0IsTUFBTSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUM7U0FDcEIsSUFBSSxDQUFDLFVBQUEsUUFBUTtRQUNaLGlCQUFpQixDQUFDLE9BQU8sQ0FBQyxVQUFBLEtBQUs7WUFDN0IsSUFBSSxDQUFDLEdBQUcsUUFBUSxDQUFDLEtBQUssRUFBRSxDQUFDO1lBQ3pCLE1BQU0sQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQztRQUM3QixDQUFDLENBQUMsQ0FBQztJQUNMLENBQUMsQ0FBQyxDQUFDO0FBQ1AsQ0FBQyIsImZpbGUiOiJjbGllbnQvc2VydmljZS13b3JrZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJsZXQgZGF0YUNhY2hlID0gXCJkYXRhQ2FjaGUtMSAgXCI7XHJcbmxldCBhcHBTaGVsbENhY2hlID0gXCJhcHBTaGVsbENhY2hlLTNcIjtcclxuXHJcbmNvbnN0IGN1c3RvbTQwNCA9IG5ldyBSZXF1ZXN0KFwiLzQwNC5odG1sXCIpO1xyXG5jb25zdCByb3V0ZXNUb1JlZGlyZWN0cyA9IFtcclxuICBuZXcgUmVxdWVzdChcIi9ob21lXCIpLFxyXG5dO1xyXG5sZXQgZmlsZXNUb0NhY2hlOiBSZXF1ZXN0W10gPSBbXHJcbiAgbmV3IFJlcXVlc3QoXCIvXCIpLFxyXG4gIG5ldyBSZXF1ZXN0KFwiL2FwcC5taW4uanNcIiksXHJcbiAgbmV3IFJlcXVlc3QoXCIvYXBwL2FwcC5jb21wb25lbnQuaHRtbCBcIiksXHJcbiAgbmV3IFJlcXVlc3QoXCIvYXBwL2hvbWUuY29tcG9uZW50Lmh0bWwgXCIpLFxyXG4gIG5ldyBSZXF1ZXN0KFwiL2Fzc2V0cy9jc3MvbWFpbi5jc3NcIiksXHJcbiAgbmV3IFJlcXVlc3QoXCIvdmVuZG9yL2NvcmUtanMvY2xpZW50L3NoaW0ubWluLmpzXCIpLFxyXG4gIG5ldyBSZXF1ZXN0KFwiL3ZlbmRvci96b25lLmpzL2Rpc3Qvem9uZS5qc1wiKSxcclxuICBuZXcgUmVxdWVzdChcIi92ZW5kb3IvcmVmbGVjdC1tZXRhZGF0YS9SZWZsZWN0LmpzXCIpLFxyXG4gIG5ldyBSZXF1ZXN0KFwiL3ZlbmRvci9zeXN0ZW1qcy9kaXN0L3N5c3RlbS5zcmMuanNcIiksXHJcbiAgbmV3IFJlcXVlc3QoXCIvc3lzdGVtanMuY29uZmlnLmpzXCIpLFxyXG4gIG5ldyBSZXF1ZXN0KFwiYXNzZXRzL2ltYWdlcy9zdXJmZXItNDgucG5nXCIpLFxyXG4gIG5ldyBSZXF1ZXN0KFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9pY29uP2ZhbWlseT1NYXRlcmlhbCtJY29uc1wiKSxcclxuICBuZXcgUmVxdWVzdChcImh0dHBzOi8vY2RuanMuY2xvdWRmbGFyZS5jb20vYWpheC9saWJzL21hdGVyaWFsaXplLzAuOTcuNy9jc3MvbWF0ZXJpYWxpemUubWluLmNzc1wiKSxcclxuICBuZXcgUmVxdWVzdChcImh0dHBzOi8vY29kZS5qcXVlcnkuY29tL2pxdWVyeS0zLjEuMC5taW4uanNcIiksXHJcbiAgbmV3IFJlcXVlc3QoXCJodHRwczovL2NkbmpzLmNsb3VkZmxhcmUuY29tL2FqYXgvbGlicy9tYXRlcmlhbGl6ZS8wLjk3LjcvanMvbWF0ZXJpYWxpemUubWluLmpzXCIpLFxyXG5dO1xyXG5cclxuLy8gSWYgYSBieXRlIGNoYW5nZXMgLT4gbmV3IHNlcnZpY2Ugd29ya2VyIHdpbGwgYmUgaW5zdGFsbGVkXHJcbnNlbGYuYWRkRXZlbnRMaXN0ZW5lcihcImluc3RhbGxcIiwgKGU6IEV4dGVuZGFibGVFdmVudCkgPT4ge1xyXG4gIGNvbnNvbGUubG9nKFwiW1NlcnZpY2VXb3JrZXJdIEluc3RhbGxcIik7XHJcblxyXG4gIGUud2FpdFVudGlsKFxyXG4gICAgY2FjaGVzLm9wZW4oYXBwU2hlbGxDYWNoZSkudGhlbihmdW5jdGlvbiAoY2FjaGUpIHtcclxuICAgICAgY29uc29sZS5sb2coXCJbU2VydmljZVdvcmtlcl0gQ2FjaGluZyBBcHAgU2hlbGxcIik7XHJcbiAgICAgIHJldHVybiBjYWNoZS5hZGRBbGwoZmlsZXNUb0NhY2hlKVxyXG4gICAgICAgIC50aGVuKCgpID0+IHsgaGFuZGxlNDA0UmVkaXJlY3RzKGNhY2hlKTsgfSk7XHJcbiAgICB9KVxyXG4gICk7XHJcbn0pO1xyXG5cclxuLy8gV2hlbiB0aGUgY3VycmVudGx5IG9wZW4gcGFnZXMgb2YgeW91ciBzaXRlIGFyZSBjbG9zZWQsIHRoZSBvbGQgc2VydmljZSB3b3JrZXIgd2lsbCBiZSBraWxsZWQgXHJcbi8vIGFuZCB0aGUgbmV3IHNlcnZpY2Ugd29ya2VyIHdpbGwgdGFrZSBjb250cm9sIGFuZCBmaXJlcyBcImFjdGl2YXRlXCJcclxuc2VsZi5hZGRFdmVudExpc3RlbmVyKFwiYWN0aXZhdGVcIiwgKGU6IEV4dGVuZGFibGVFdmVudCkgPT4ge1xyXG4gIGNvbnNvbGUubG9nKFwiW1NlcnZpY2VXb3JrZXJdIEFjdGl2YXRlXCIpO1xyXG4gIGUud2FpdFVudGlsKFxyXG4gICAgY2FjaGVzLmtleXMoKS50aGVuKChrZXlMaXN0KSA9PiB7XHJcbiAgICAgIHJldHVybiBQcm9taXNlLmFsbChrZXlMaXN0Lm1hcCgoa2V5KSA9PiB7XHJcbiAgICAgICAgaWYgKGtleSAhPT0gYXBwU2hlbGxDYWNoZSkge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coXCJbU2VydmljZVdvcmtlcl0gUmVtb3Zpbmcgb2xkIGNhY2hlXCIsIGtleSk7XHJcbiAgICAgICAgICByZXR1cm4gY2FjaGVzLmRlbGV0ZShrZXkpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSkpO1xyXG4gICAgfSlcclxuICApO1xyXG59KTtcclxuXHJcbnNlbGYuYWRkRXZlbnRMaXN0ZW5lcihcImZldGNoXCIsIChlOiBGZXRjaEV2ZW50KSA9PiB7XHJcbiAgY29uc29sZS5sb2coXCJbU2VydmljZVdvcmtlcl0gRmV0Y2hcIiwgZS5yZXF1ZXN0LnVybCk7XHJcbiAgbGV0IGRhdGFVcmwgPSBcIltpbnNlcnQgZGF0YSB1cmwgaGVyZV1cIjtcclxuICAvLyB3ZSBjYWNoZSB0aGUgZGF0YSByZWNlaXZlZCBmcm9tIHRoZSBkYXRhIGFwaSBzbyB0aGF0IHdlIGNhbiBkaXNwbGF5IHRoZSBkYXRhIHJlYWxseSBmYXN0IGJlZm9yZSByZWNlaXZpbmcgdGhlIGRhdGFcclxuICBpZiAoZS5yZXF1ZXN0LnVybC5pbmRleE9mKGRhdGFVcmwpID09PSAwKSB7XHJcbiAgICBlLnJlc3BvbmRXaXRoKFxyXG4gICAgICBmZXRjaChlLnJlcXVlc3QpXHJcbiAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICByZXR1cm4gY2FjaGVzLm9wZW4oZGF0YUNhY2hlKS50aGVuKChjYWNoZSkgPT4ge1xyXG4gICAgICAgICAgICBjYWNoZS5wdXQoZS5yZXF1ZXN0LCByZXNwb25zZS5jbG9uZSgpKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJbU2VydmljZVdvcmtlcl0gRmV0Y2hlZCZDYWNoZWQgRGF0YVwiKTtcclxuICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlO1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfSlcclxuICAgICk7XHJcbiAgfSBlbHNlIHtcclxuICAgIC8vIHJldHVybiB0aGUgY2FjaGVkIGFwcCBzaGVsbFxyXG4gICAgZS5yZXNwb25kV2l0aChcclxuICAgICAgY2FjaGVzLm1hdGNoKGUucmVxdWVzdCkudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICByZXR1cm4gcmVzcG9uc2UgfHwgZmV0Y2goZS5yZXF1ZXN0KTtcclxuICAgICAgfSlcclxuICAgICk7XHJcbiAgfVxyXG59KTtcclxuXHJcbnNlbGYuYWRkRXZlbnRMaXN0ZW5lcihcInB1c2hcIiwgKGU6IFB1c2hFdmVudCkgPT4ge1xyXG4gIGNvbnNvbGUubG9nKFwiW1NlcnZpY2VXb3JrZXJdIFB1c2ggbWVzc2FnZSByZWNlaXZlZCBcIiwgZSk7XHJcbiAgLy8gaW5zdGVhZCBvZiBoYXZpbmcgYSBmaXhlZCBtZXNzYWdlIHdlIGNvdWxkIGdldCB0aGUgY29udGVudCBmcm9tIGFuIGFwaSBoZXJlXHJcbiAgbGV0IHRpdGxlID0gXCJQdXNoIG1lc3NhZ2VcIjtcclxuICBlLndhaXRVbnRpbChcclxuICAgIHJlZ2lzdHJhdGlvbi5zaG93Tm90aWZpY2F0aW9uKHRpdGxlLCB7XHJcbiAgICAgIGJvZHk6IFwiU29tZSBUZXh0XCIsXHJcbiAgICAgIGljb246IFwiYXNzZXRzL2ltYWdlcy9zdXJmZXItNDgucG5nXCIsXHJcbiAgICAgIHRhZzogXCJtZXNzYWdlLXRhZ1wiLFxyXG4gICAgfSkpO1xyXG59KTtcclxuXHJcbnNlbGYuYWRkRXZlbnRMaXN0ZW5lcihcIm5vdGlmaWNhdGlvbmNsaWNrXCIsIChldmVudDogTm90aWZpY2F0aW9uRXZlbnQpID0+IHtcclxuICBjb25zb2xlLmxvZyhcIltTZXJ2aWNlV29ya2VyXSBOb3RpZmljYXRpb24gY2xpY2s6IHRhZyBcIiwgZXZlbnQubm90aWZpY2F0aW9uLnRhZyk7XHJcbiAgZXZlbnQubm90aWZpY2F0aW9uLmNsb3NlKCk7XHJcbiAgbGV0IHVybCA9IFwiaHR0cHM6Ly90b2VnZ2VsLmdpdGh1Yi5pby9ob21lXCI7XHJcbiAgZXZlbnQud2FpdFVudGlsKFxyXG4gICAgY2xpZW50cy5tYXRjaEFsbCh7XHJcbiAgICAgIHR5cGU6IFwid2luZG93XCIsXHJcbiAgICB9KVxyXG4gICAgICAudGhlbihmdW5jdGlvbiAod2luZG93Q2xpZW50cykge1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgd2luZG93Q2xpZW50cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgbGV0IGNsaWVudCA9IHdpbmRvd0NsaWVudHNbaV07XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhcIltTZXJ2aWNlV29ya2VyXSBDbGllbnQgVVJMOlwiLCBjbGllbnQudXJsKTtcclxuICAgICAgICAgIGlmIChjbGllbnQudXJsID09PSB1cmwgJiYgXCJmb2N1c1wiIGluIGNsaWVudCkge1xyXG4gICAgICAgICAgICByZXR1cm4gY2xpZW50LmZvY3VzKCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChjbGllbnRzLm9wZW5XaW5kb3cpIHtcclxuICAgICAgICAgIHJldHVybiBjbGllbnRzLm9wZW5XaW5kb3codXJsKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgKTtcclxufSk7XHJcblxyXG5mdW5jdGlvbiBoYW5kbGU0MDRSZWRpcmVjdHMoY2FjaGUpIHtcclxuICByZXR1cm4gZmV0Y2goY3VzdG9tNDA0KVxyXG4gICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgICByb3V0ZXNUb1JlZGlyZWN0cy5mb3JFYWNoKHJvdXRlID0+IHtcclxuICAgICAgICBsZXQgciA9IHJlc3BvbnNlLmNsb25lKCk7XHJcbiAgICAgICAgcmV0dXJuIGNhY2hlLnB1dChyb3V0ZSwgcik7XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
