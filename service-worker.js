var baseApiUrl = "https://mawewebapi.azurewebsites.net/api"; // https://mawewebapi.azurewebsites.net/api", "http://localhost:22603/api"
var version = 12;
var dataCache = "dataCache-1";
var appShellCache = "appShellCache-" + version;
var custom404 = new Request("/404.html");
var routesToRedirects = [
    // Use this configuration instead of the cached "home". It's needed for the github SPA pages hack
    new Request("/home"),
    new Request("/camera"),
    new Request("/pushNotification"),
];
var filesToCache = [
    // new Request("/home"),
    // new Request("/camera"),
    // new Request("/pushNotification"),
    new Request("/main.js"),
    // App
    new Request("/"),
    new Request("/app.min.js"),
    new Request("/app/app.component.html "),
    new Request("/app/home.component.html "),
    new Request("/app/message.component.html "),
    new Request("/app/push-notification.component.html "),
    new Request("/app/camera.component.html "),
    new Request("/app/snackbar.component.html"),
    new Request("/app/snackbar.component.css"),
    new Request("/assets/css/main.css"),
    new Request("/assets/images/surfer-48.png"),
    new Request("/assets/images/surfer-1.jpg"),
    new Request("/manifest.json"),
    new Request("/systemjs.config.js"),
    // Vendor
    new Request("/vendor/core-js/client/shim.min.js"),
    new Request("/vendor/zone.js/dist/zone.js"),
    new Request("/vendor/reflect-metadata/Reflect.js"),
    new Request("/vendor/systemjs/dist/system.src.js"),
    // External
    new Request("https://fonts.googleapis.com/icon?family=Material+Icons"),
    new Request("https://cdnjs.cloudflare.com/ajax/libs/materialize/0.98.0/css/materialize.min.css"),
    new Request("https://code.jquery.com/jquery-3.1.0.min.js"),
    new Request("https://cdnjs.cloudflare.com/ajax/libs/materialize/0.98.0/js/materialize.min.js"),
];
// If a byte changes -> new service worker will be installed
self.addEventListener("install", function (e) {
    console.log("[ServiceWorker] Install");
    e.waitUntil(caches.open(appShellCache).then(function (cache) {
        console.log("[ServiceWorker] Caching App Shell");
        return cache.addAll(filesToCache)
            .then(function () { handle404Redirects(cache); });
    }).then(function () {
        console.log("[ServiceWorker] Skip waiting on install");
        return skipWaiting();
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
        })).then(function () {
            console.log("[ServiceWorker] Claiming clients for version ", version);
            return clients.claim();
        });
    }));
});
self.addEventListener("fetch", function (e) {
    var dataUrl = baseApiUrl + "/messages";
    // we cache the data received from the data api so that we can display the data really fast before receiving the data
    if (e.request.url.indexOf(dataUrl) > -1) {
        // CORS-Shit: when offline the fetch fails hard because of cors! As a workaround I just return the cached data when offline.
        if (navigator.onLine) {
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
            e.respondWith(caches.match(e.request).then(function (response) {
                return response;
            }));
        }
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
    fetch(baseApiUrl + "/notification/message")
        .then(function (response) { return response.json(); })
        .then(function (notification) {
        var notificationTitle = notification.title || "Notification";
        var notificationMessage = notification.message || "Click Me!";
        e.waitUntil(registration.showNotification(notificationTitle, {
            body: notificationMessage,
            icon: "assets/images/surfer-48.png",
            tag: "message-tag",
        }));
    });
});
self.addEventListener("notificationclick", function (event) {
    console.log("[ServiceWorker] Notification click: tag ", event.notification.tag);
    event.notification.close();
    var url = "https://toeggel.github.io";
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNsaWVudC9zZXJ2aWNlLXdvcmtlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxJQUFJLFVBQVUsR0FBRywwQ0FBMEMsQ0FBQSxDQUFDLDBFQUEwRTtBQUV0SSxJQUFJLE9BQU8sR0FBRyxFQUFFLENBQUM7QUFDakIsSUFBSSxTQUFTLEdBQUcsYUFBYSxDQUFDO0FBQzlCLElBQUksYUFBYSxHQUFHLG1CQUFpQixPQUFTLENBQUM7QUFFL0MsSUFBTSxTQUFTLEdBQUcsSUFBSSxPQUFPLENBQUMsV0FBVyxDQUFDLENBQUM7QUFDM0MsSUFBTSxpQkFBaUIsR0FBRztJQUN4QixpR0FBaUc7SUFDakcsSUFBSSxPQUFPLENBQUMsT0FBTyxDQUFDO0lBQ3BCLElBQUksT0FBTyxDQUFDLFNBQVMsQ0FBQztJQUN0QixJQUFJLE9BQU8sQ0FBQyxtQkFBbUIsQ0FBQztDQUNqQyxDQUFDO0FBQ0YsSUFBSSxZQUFZLEdBQWM7SUFDNUIsd0JBQXdCO0lBQ3hCLDBCQUEwQjtJQUMxQixvQ0FBb0M7SUFFcEMsSUFBSSxPQUFPLENBQUMsVUFBVSxDQUFDO0lBRXZCLE1BQU07SUFDTixJQUFJLE9BQU8sQ0FBQyxHQUFHLENBQUM7SUFDaEIsSUFBSSxPQUFPLENBQUMsYUFBYSxDQUFDO0lBQzFCLElBQUksT0FBTyxDQUFDLDBCQUEwQixDQUFDO0lBQ3ZDLElBQUksT0FBTyxDQUFDLDJCQUEyQixDQUFDO0lBQ3hDLElBQUksT0FBTyxDQUFDLDhCQUE4QixDQUFDO0lBQzNDLElBQUksT0FBTyxDQUFDLHdDQUF3QyxDQUFDO0lBQ3JELElBQUksT0FBTyxDQUFDLDZCQUE2QixDQUFDO0lBQzFDLElBQUksT0FBTyxDQUFDLDhCQUE4QixDQUFDO0lBQzNDLElBQUksT0FBTyxDQUFDLDZCQUE2QixDQUFDO0lBQzFDLElBQUksT0FBTyxDQUFDLHNCQUFzQixDQUFDO0lBQ25DLElBQUksT0FBTyxDQUFDLDhCQUE4QixDQUFDO0lBQzNDLElBQUksT0FBTyxDQUFDLDZCQUE2QixD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LEtBQUssR0FBRyxJQUFJLE9BQU8sSUFBSSxNQUFNLENBQUMsQ0FBQyxDQUFDO2dCQUM1QyxNQUFNLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFDO1lBQ3hCLENBQUM7UUFDSCxDQUFDO1FBQ0QsRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7WUFDdkIsTUFBTSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDakMsQ0FBQztJQUNILENBQUMsQ0FBQyxDQUNMLENBQUM7QUFDSixDQUFDLENBQUMsQ0FBQztBQUVILDRCQUE0QixLQUFLO0lBQy9CLE1BQU0sQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDO1NBQ3BCLElBQUksQ0FBQyxVQUFBLFFBQVE7UUFDWixpQkFBaUIsQ0FBQyxPQUFPLENBQUMsVUFBQSxLQUFLO1lBQzdCLElBQUksQ0FBQyxHQUFHLFFBQVEsQ0FBQyxLQUFLLEVBQUUsQ0FBQztZQUN6QixNQUFNLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDN0IsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDLENBQUMsQ0FBQztBQUNQLENBQUMiLCJmaWxlIjoiY2xpZW50L3NlcnZpY2Utd29ya2VyLmpzIiwic291cmNlc0NvbnRlbnQiOlsibGV0IGJhc2VBcGlVcmwgPSBcImh0dHBzOi8vbWF3ZXdlYmFwaS5henVyZXdlYnNpdGVzLm5ldC9hcGlcIiAvLyBodHRwczovL21hd2V3ZWJhcGkuYXp1cmV3ZWJzaXRlcy5uZXQvYXBpXCIsIFwiaHR0cDovL2xvY2FsaG9zdDoyMjYwMy9hcGlcIlxuXG5sZXQgdmVyc2lvbiA9IDEyO1xubGV0IGRhdGFDYWNoZSA9IFwiZGF0YUNhY2hlLTFcIjtcbmxldCBhcHBTaGVsbENhY2hlID0gYGFwcFNoZWxsQ2FjaGUtJHt2ZXJzaW9ufWA7XG5cbmNvbnN0IGN1c3RvbTQwNCA9IG5ldyBSZXF1ZXN0KFwiLzQwNC5odG1sXCIpO1xuY29uc3Qgcm91dGVzVG9SZWRpcmVjdHMgPSBbXG4gIC8vIFVzZSB0aGlzIGNvbmZpZ3VyYXRpb24gaW5zdGVhZCBvZiB0aGUgY2FjaGVkIFwiaG9tZVwiLiBJdCdzIG5lZWRlZCBmb3IgdGhlIGdpdGh1YiBTUEEgcGFnZXMgaGFja1xuICBuZXcgUmVxdWVzdChcIi9ob21lXCIpLFxuICBuZXcgUmVxdWVzdChcIi9jYW1lcmFcIiksXG4gIG5ldyBSZXF1ZXN0KFwiL3B1c2hOb3RpZmljYXRpb25cIiksXG5dO1xubGV0IGZpbGVzVG9DYWNoZTogUmVxdWVzdFtdID0gW1xuICAvLyBuZXcgUmVxdWVzdChcIi9ob21lXCIpLFxuICAvLyBuZXcgUmVxdWVzdChcIi9jYW1lcmFcIiksXG4gIC8vIG5ldyBSZXF1ZXN0KFwiL3B1c2hOb3RpZmljYXRpb25cIiksXG5cbiAgbmV3IFJlcXVlc3QoXCIvbWFpbi5qc1wiKSxcblxuICAvLyBBcHBcbiAgbmV3IFJlcXVlc3QoXCIvXCIpLFxuICBuZXcgUmVxdWVzdChcIi9hcHAubWluLmpzXCIpLFxuICBuZXcgUmVxdWVzdChcIi9hcHAvYXBwLmNvbXBvbmVudC5odG1sIFwiKSxcbiAgbmV3IFJlcXVlc3QoXCIvYXBwL2hvbWUuY29tcG9uZW50Lmh0bWwgXCIpLFxuICBuZXcgUmVxdWVzdChcIi9hcHAvbWVzc2FnZS5jb21wb25lbnQuaHRtbCBcIiksXG4gIG5ldyBSZXF1ZXN0KFwiL2FwcC9wdXNoLW5vdGlmaWNhdGlvbi5jb21wb25lbnQuaHRtbCBcIiksXG4gIG5ldyBSZXF1ZXN0KFwiL2FwcC9jYW1lcmEuY29tcG9uZW50Lmh0bWwgXCIpLFxuICBuZXcgUmVxdWVzdChcIi9hcHAvc25hY2tiYXIuY29tcG9uZW50Lmh0bWxcIiksXG4gIG5ldyBSZXF1ZXN0KFwiL2FwcC9zbmFja2Jhci5jb21wb25lbnQuY3NzXCIpLFxuICBuZXcgUmVxdWVzdChcIi9hc3NldHMvY3NzL21haW4uY3NzXCIpLFxuICBuZXcgUmVxdWVzdChcIi9hc3NldHMvaW1hZ2VzL3N1cmZlci00OC5wbmdcIiksXG4gIG5ldyBSZXF1ZXN0KFwiL2Fzc2V0cy9pbWFnZXMvc3VyZmVyLTEuanBnXCIpLFxuICBuZXcgUmVxdWVzdChcIi9tYW5pZmVzdC5qc29uXCIpLFxuICBuZXcgUmVxdWVzdChcIi9zeXN0ZW1qcy5jb25maWcuanNcIiksXG5cbiAgLy8gVmVuZG9yXG4gIG5ldyBSZXF1ZXN0KFwiL3ZlbmRvci9jb3JlLWpzL2NsaWVudC9zaGltLm1pbi5qc1wiKSxcbiAgbmV3IFJlcXVlc3QoXCIvdmVuZG9yL3pvbmUuanMvZGlzdC96b25lLmpzXCIpLFxuICBuZXcgUmVxdWVzdChcIi92ZW5kb3IvcmVmbGVjdC1tZXRhZGF0YS9SZWZsZWN0LmpzXCIpLFxuICBuZXcgUmVxdWVzdChcIi92ZW5kb3Ivc3lzdGVtanMvZGlzdC9zeXN0ZW0uc3JjLmpzXCIpLFxuXG4gIC8vIEV4dGVybmFsXG4gIG5ldyBSZXF1ZXN0KFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9pY29uP2ZhbWlseT1NYXRlcmlhbCtJY29uc1wiKSxcbiAgbmV3IFJlcXVlc3QoXCJodHRwczovL2NkbmpzLmNsb3VkZmxhcmUuY29tL2FqYXgvbGlicy9tYXRlcmlhbGl6ZS8wLjk4LjAvY3NzL21hdGVyaWFsaXplLm1pbi5jc3NcIiksXG4gIG5ldyBSZXF1ZXN0KFwiaHR0cHM6Ly9jb2RlLmpxdWVyeS5jb20vanF1ZXJ5LTMuMS4wLm1pbi5qc1wiKSxcbiAgbmV3IFJlcXVlc3QoXCJodHRwczovL2NkbmpzLmNsb3VkZmxhcmUuY29tL2FqYXgvbGlicy9tYXRlcmlhbGl6ZS8wLjk4LjAvanMvbWF0ZXJpYWxpemUubWluLmpzXCIpLFxuXTtcblxuLy8gSWYgYSBieXRlIGNoYW5nZXMgLT4gbmV3IHNlcnZpY2Ugd29ya2VyIHdpbGwgYmUgaW5zdGFsbGVkXG5zZWxmLmFkZEV2ZW50TGlzdGVuZXIoXCJpbnN0YWxsXCIsIChlOiBFeHRlbmRhYmxlRXZlbnQpID0+IHtcbiAgY29uc29sZS5sb2coXCJbU2VydmljZVdvcmtlcl0gSW5zdGFsbFwiKTtcblxuICBlLndhaXRVbnRpbChcbiAgICBjYWNoZXMub3BlbihhcHBTaGVsbENhY2hlKS50aGVuKGZ1bmN0aW9uIChjYWNoZSkge1xuICAgICAgY29uc29sZS5sb2coXCJbU2VydmljZVdvcmtlcl0gQ2FjaGluZyBBcHAgU2hlbGxcIik7XG4gICAgICByZXR1cm4gY2FjaGUuYWRkQWxsKGZpbGVzVG9DYWNoZSlcbiAgICAgICAgLnRoZW4oKCkgPT4geyBoYW5kbGU0MDRSZWRpcmVjdHMoY2FjaGUpOyB9KTtcbiAgICB9KS50aGVuKCgpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKFwiW1NlcnZpY2VXb3JrZXJdIFNraXAgd2FpdGluZyBvbiBpbnN0YWxsXCIpO1xuICAgICAgcmV0dXJuIHNraXBXYWl0aW5nKCk7XG4gICAgfSlcbiAgKTtcbn0pO1xuXG4vLyBXaGVuIHRoZSBjdXJyZW50bHkgb3BlbiBwYWdlcyBvZiB5b3VyIHNpdGUgYXJlIGNsb3NlZCwgdGhlIG9sZCBzZXJ2aWNlIHdvcmtlciB3aWxsIGJlIGtpbGxlZCBcbi8vIGFuZCB0aGUgbmV3IHNlcnZpY2Ugd29ya2VyIHdpbGwgdGFrZSBjb250cm9sIGFuZCBmaXJlcyBcImFjdGl2YXRlXCJcbnNlbGYuYWRkRXZlbnRMaXN0ZW5lcihcImFjdGl2YXRlXCIsIChlOiBFeHRlbmRhYmxlRXZlbnQpID0+IHtcbiAgY29uc29sZS5sb2coXCJbU2VydmljZVdvcmtlcl0gQWN0aXZhdGVcIik7XG4gIGUud2FpdFVudGlsKFxuICAgIGNhY2hlcy5rZXlzKCkudGhlbigoa2V5TGlzdCkgPT4ge1xuICAgICAgcmV0dXJuIFByb21pc2UuYWxsKGtleUxpc3QubWFwKChrZXkpID0+IHtcbiAgICAgICAgaWYgKGtleSAhPT0gYXBwU2hlbGxDYWNoZSkge1xuICAgICAgICAgIGNvbnNvbGUubG9nKFwiW1NlcnZpY2VXb3JrZXJdIFJlbW92aW5nIG9sZCBjYWNoZVwiLCBrZXkpO1xuICAgICAgICAgIHJldHVybiBjYWNoZXMuZGVsZXRlKGtleSk7XG4gICAgICAgIH1cbiAgICAgIH0pKS50aGVuKCgpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coXCJbU2VydmljZVdvcmtlcl0gQ2xhaW1pbmcgY2xpZW50cyBmb3IgdmVyc2lvbiBcIiwgdmVyc2lvbik7XG4gICAgICAgIHJldHVybiBjbGllbnRzLmNsYWltKCk7XG4gICAgICB9KTtcbiAgICB9KVxuICApO1xufSk7XG5cbnNlbGYuYWRkRXZlbnRMaXN0ZW5lcihcImZldGNoXCIsIChlOiBGZXRjaEV2ZW50KSA9PiB7XG4gIGxldCBkYXRhVXJsID0gYCR7YmFzZUFwaVVybH0vbWVzc2FnZXNgO1xuICAvLyB3ZSBjYWNoZSB0aGUgZGF0YSByZWNlaXZlZCBmcm9tIHRoZSBkYXRhIGFwaSBzbyB0aGF0IHdlIGNhbiBkaXNwbGF5IHRoZSBkYXRhIHJlYWxseSBmYXN0IGJlZm9yZSByZWNlaXZpbmcgdGhlIGRhdGFcbiAgaWYgKGUucmVxdWVzdC51cmwuaW5kZXhPZihkYXRhVXJsKSA+IC0xKSB7XG4gICAgLy8gQ09SUy1TaGl0OiB3aGVuIG9mZmxpbmUgdGhlIGZldGNoIGZhaWxzIGhhcmQgYmVjYXVzZSBvZiBjb3JzISBBcyBhIHdvcmthcm91bmQgSSBqdXN0IHJldHVybiB0aGUgY2FjaGVkIGRhdGEgd2hlbiBvZmZsaW5lLlxuICAgIGlmIChuYXZpZ2F0b3Iub25MaW5lKSB7XG4gICAgICBlLnJlc3BvbmRXaXRoKFxuICAgICAgICBmZXRjaChlLnJlcXVlc3QpXG4gICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVzLm9wZW4oZGF0YUNhY2hlKS50aGVuKChjYWNoZSkgPT4ge1xuICAgICAgICAgICAgICBjYWNoZS5wdXQoZS5yZXF1ZXN0LCByZXNwb25zZS5jbG9uZSgpKTtcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJbU2VydmljZVdvcmtlcl0gRmV0Y2hlZCZDYWNoZWQgRGF0YVwiKTtcbiAgICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfSlcbiAgICAgICk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGUucmVzcG9uZFdpdGgoXG4gICAgICAgIGNhY2hlcy5tYXRjaChlLnJlcXVlc3QpLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICAgIHJldHVybiByZXNwb25zZTtcbiAgICAgICAgICAgIH0pKTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgLy8gcmV0dXJuIHRoZSBjYWNoZWQgYXBwIHNoZWxsXG4gICAgZS5yZXNwb25kV2l0aChcbiAgICAgIGNhY2hlcy5tYXRjaChlLnJlcXVlc3QpLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgIHJldHVybiByZXNwb25zZSB8fCBmZXRjaChlLnJlcXVlc3QpO1xuICAgICAgfSlcbiAgICApO1xuICB9XG59KTtcblxuc2VsZi5hZGRFdmVudExpc3RlbmVyKFwicHVzaFwiLCAoZTogUHVzaEV2ZW50KSA9PiB7XG4gIGNvbnNvbGUubG9nKFwiW1NlcnZpY2VXb3JrZXJdIFB1c2ggbWVzc2FnZSByZWNlaXZlZCBcIiwgZSk7XG4gIC8vIGluc3RlYWQgb2YgaGF2aW5nIGEgZml4ZWQgbWVzc2FnZSB3ZSBjb3VsZCBnZXQgdGhlIGNvbnRlbnQgZnJvbSBhbiBhcGkgaGVyZVxuICBmZXRjaChgJHtiYXNlQXBpVXJsfS9ub3RpZmljYXRpb24vbWVzc2FnZWApXG4gIC50aGVuKHJlc3BvbnNlID0+IHsgcmV0dXJuIHJlc3BvbnNlLmpzb24oKSB9KVxuICAudGhlbihub3RpZmljYXRpb24gPT4ge1xuICAgIGxldCBub3RpZmljYXRpb25UaXRsZSA9IG5vdGlmaWNhdGlvbi50aXRsZSB8fCBcIk5vdGlmaWNhdGlvblwiO1xuICAgIGxldCBub3RpZmljYXRpb25NZXNzYWdlID0gbm90aWZpY2F0aW9uLm1lc3NhZ2UgfHwgXCJDbGljayBNZSFcIlxuICAgIGUud2FpdFVudGlsKFxuICAgICAgcmVnaXN0cmF0aW9uLnNob3dOb3RpZmljYXRpb24obm90aWZpY2F0aW9uVGl0bGUsIHtcbiAgICAgICAgYm9keTogbm90aWZpY2F0aW9uTWVzc2FnZSxcbiAgICAgICAgaWNvbjogXCJhc3NldHMvaW1hZ2VzL3N1cmZlci00OC5wbmdcIixcbiAgICAgICAgdGFnOiBcIm1lc3NhZ2UtdGFnXCIsXG4gICAgICB9KSk7XG4gIH0pXG59KTtcblxuc2VsZi5hZGRFdmVudExpc3RlbmVyKFwibm90aWZpY2F0aW9uY2xpY2tcIiwgKGV2ZW50OiBOb3RpZmljYXRpb25FdmVudCkgPT4ge1xuICBjb25zb2xlLmxvZyhcIltTZXJ2aWNlV29ya2VyXSBOb3RpZmljYXRpb24gY2xpY2s6IHRhZyBcIiwgZXZlbnQubm90aWZpY2F0aW9uLnRhZyk7XG4gIGV2ZW50Lm5vdGlmaWNhdGlvbi5jbG9zZSgpO1xuICBsZXQgdXJsID0gXCJodHRwczovL3RvZWdnZWwuZ2l0aHViLmlvXCI7XG4gIGV2ZW50LndhaXRVbnRpbChcbiAgICBjbGllbnRzLm1hdGNoQWxsKHtcbiAgICAgIHR5cGU6IFwid2luZG93XCIsXG4gICAgfSlcbiAgICAgIC50aGVuKGZ1bmN0aW9uICh3aW5kb3dDbGllbnRzKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgd2luZG93Q2xpZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIGxldCBjbGllbnQgPSB3aW5kb3dDbGllbnRzW2ldO1xuICAgICAgICAgIGNvbnNvbGUubG9nKFwiW1NlcnZpY2VXb3JrZXJdIENsaWVudCBVUkw6XCIsIGNsaWVudC51cmwpO1xuICAgICAgICAgIGlmIChjbGllbnQudXJsID09PSB1cmwgJiYgXCJmb2N1c1wiIGluIGNsaWVudCkge1xuICAgICAgICAgICAgcmV0dXJuIGNsaWVudC5mb2N1cygpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoY2xpZW50cy5vcGVuV2luZG93KSB7XG4gICAgICAgICAgcmV0dXJuIGNsaWVudHMub3BlbldpbmRvdyh1cmwpO1xuICAgICAgICB9XG4gICAgICB9KVxuICApO1xufSk7XG5cbmZ1bmN0aW9uIGhhbmRsZTQwNFJlZGlyZWN0cyhjYWNoZSkge1xuICByZXR1cm4gZmV0Y2goY3VzdG9tNDA0KVxuICAgIC50aGVuKHJlc3BvbnNlID0+IHtcbiAgICAgIHJvdXRlc1RvUmVkaXJlY3RzLmZvckVhY2gocm91dGUgPT4ge1xuICAgICAgICBsZXQgciA9IHJlc3BvbnNlLmNsb25lKCk7XG4gICAgICAgIHJldHVybiBjYWNoZS5wdXQocm91dGUsIHIpO1xuICAgICAgfSk7XG4gICAgfSk7XG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
