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
    var dataUrl = "https://mawewebapi.azurewebsites.net/api/messages";
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNsaWVudC9zZXJ2aWNlLXdvcmtlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxJQUFJLE9BQU8sR0FBRyxFQUFFLENBQUM7QUFDakIsSUFBSSxTQUFTLEdBQUcsYUFBYSxDQUFDO0FBQzlCLElBQUksYUFBYSxHQUFHLG1CQUFpQixPQUFTLENBQUM7QUFFL0MsSUFBTSxTQUFTLEdBQUcsSUFBSSxPQUFPLENBQUMsV0FBVyxDQUFDLENBQUM7QUFDM0MsSUFBTSxpQkFBaUIsR0FBRztJQUN4QixpR0FBaUc7SUFDakcsSUFBSSxPQUFPLENBQUMsT0FBTyxDQUFDO0lBQ3BCLElBQUksT0FBTyxDQUFDLFNBQVMsQ0FBQztJQUN0QixJQUFJLE9BQU8sQ0FBQyxtQkFBbUIsQ0FBQztDQUNqQyxDQUFDO0FBQ0YsSUFBSSxZQUFZLEdBQWM7SUFDNUIsd0JBQXdCO0lBQ3hCLDBCQUEwQjtJQUMxQixvQ0FBb0M7SUFDcEMsSUFBSSxPQUFPLENBQUMsVUFBVSxDQUFDO0lBRXZCLE1BQU07SUFDTixJQUFJLE9BQU8sQ0FBQyxHQUFHLENBQUM7SUFDaEIsSUFBSSxPQUFPLENBQUMsYUFBYSxDQUFDO0lBQzFCLElBQUksT0FBTyxDQUFDLDBCQUEwQixDQUFDO0lBQ3ZDLElBQUksT0FBTyxDQUFDLDJCQUEyQixDQUFDO0lBQ3hDLElBQUksT0FBTyxDQUFDLDhCQUE4QixDQUFDO0lBQzNDLElBQUksT0FBTyxDQUFDLHdDQUF3QyxDQUFDO0lBQ3JELElBQUksT0FBTyxDQUFDLDZCQUE2QixDQUFDO0lBQzFDLElBQUksT0FBTyxDQUFDLDhCQUE4QixDQUFDO0lBQzNDLElBQUksT0FBTyxDQUFDLDZCQUE2QixDQUFDO0lBQzFDLElBQUksT0FBTyxDQUFDLHNCQUFzQixDQUFDO0lBQ25DLElBQUksT0FBTyxDQUFDLDhCQUE4QixDQUFDO0lBQzNDLElBQUksT0FBTyxDQUFDLDZCQUE2QixDQUFDO0lBQzFDLElBQUksT0FBTyxDQUFDLGdCQUFnQixDQUFDO0lBQzdCLElB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QixNQUFNLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQztTQUNwQixJQUFJLENBQUMsVUFBQSxRQUFRO1FBQ1osaUJBQWlCLENBQUMsT0FBTyxDQUFDLFVBQUEsS0FBSztZQUM3QixJQUFJLENBQUMsR0FBRyxRQUFRLENBQUMsS0FBSyxFQUFFLENBQUM7WUFDekIsTUFBTSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQzdCLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQyxDQUFDLENBQUM7QUFDUCxDQUFDIiwiZmlsZSI6ImNsaWVudC9zZXJ2aWNlLXdvcmtlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImxldCB2ZXJzaW9uID0gMTE7XG5sZXQgZGF0YUNhY2hlID0gXCJkYXRhQ2FjaGUtMVwiO1xubGV0IGFwcFNoZWxsQ2FjaGUgPSBgYXBwU2hlbGxDYWNoZS0ke3ZlcnNpb259YDtcblxuY29uc3QgY3VzdG9tNDA0ID0gbmV3IFJlcXVlc3QoXCIvNDA0Lmh0bWxcIik7XG5jb25zdCByb3V0ZXNUb1JlZGlyZWN0cyA9IFtcbiAgLy8gVXNlIHRoaXMgY29uZmlndXJhdGlvbiBpbnN0ZWFkIG9mIHRoZSBjYWNoZWQgXCJob21lXCIuIEl0J3MgbmVlZGVkIGZvciB0aGUgZ2l0aHViIFNQQSBwYWdlcyBoYWNrXG4gIG5ldyBSZXF1ZXN0KFwiL2hvbWVcIiksXG4gIG5ldyBSZXF1ZXN0KFwiL2NhbWVyYVwiKSxcbiAgbmV3IFJlcXVlc3QoXCIvcHVzaE5vdGlmaWNhdGlvblwiKSxcbl07XG5sZXQgZmlsZXNUb0NhY2hlOiBSZXF1ZXN0W10gPSBbXG4gIC8vIG5ldyBSZXF1ZXN0KFwiL2hvbWVcIiksXG4gIC8vIG5ldyBSZXF1ZXN0KFwiL2NhbWVyYVwiKSxcbiAgLy8gbmV3IFJlcXVlc3QoXCIvcHVzaE5vdGlmaWNhdGlvblwiKSxcbiAgbmV3IFJlcXVlc3QoXCIvbWFpbi5qc1wiKSxcblxuICAvLyBBcHBcbiAgbmV3IFJlcXVlc3QoXCIvXCIpLFxuICBuZXcgUmVxdWVzdChcIi9hcHAubWluLmpzXCIpLFxuICBuZXcgUmVxdWVzdChcIi9hcHAvYXBwLmNvbXBvbmVudC5odG1sIFwiKSxcbiAgbmV3IFJlcXVlc3QoXCIvYXBwL2hvbWUuY29tcG9uZW50Lmh0bWwgXCIpLFxuICBuZXcgUmVxdWVzdChcIi9hcHAvbWVzc2FnZS5jb21wb25lbnQuaHRtbCBcIiksXG4gIG5ldyBSZXF1ZXN0KFwiL2FwcC9wdXNoLW5vdGlmaWNhdGlvbi5jb21wb25lbnQuaHRtbCBcIiksXG4gIG5ldyBSZXF1ZXN0KFwiL2FwcC9jYW1lcmEuY29tcG9uZW50Lmh0bWwgXCIpLFxuICBuZXcgUmVxdWVzdChcIi9hcHAvc25hY2tiYXIuY29tcG9uZW50Lmh0bWxcIiksXG4gIG5ldyBSZXF1ZXN0KFwiL2FwcC9zbmFja2Jhci5jb21wb25lbnQuY3NzXCIpLFxuICBuZXcgUmVxdWVzdChcIi9hc3NldHMvY3NzL21haW4uY3NzXCIpLFxuICBuZXcgUmVxdWVzdChcIi9hc3NldHMvaW1hZ2VzL3N1cmZlci00OC5wbmdcIiksXG4gIG5ldyBSZXF1ZXN0KFwiL2Fzc2V0cy9pbWFnZXMvc3VyZmVyLTEuanBnXCIpLFxuICBuZXcgUmVxdWVzdChcIi9tYW5pZmVzdC5qc29uXCIpLFxuICBuZXcgUmVxdWVzdChcIi9zeXN0ZW1qcy5jb25maWcuanNcIiksXG5cbiAgLy8gVmVuZG9yXG4gIG5ldyBSZXF1ZXN0KFwiL3ZlbmRvci9jb3JlLWpzL2NsaWVudC9zaGltLm1pbi5qc1wiKSxcbiAgbmV3IFJlcXVlc3QoXCIvdmVuZG9yL3pvbmUuanMvZGlzdC96b25lLmpzXCIpLFxuICBuZXcgUmVxdWVzdChcIi92ZW5kb3IvcmVmbGVjdC1tZXRhZGF0YS9SZWZsZWN0LmpzXCIpLFxuICBuZXcgUmVxdWVzdChcIi92ZW5kb3Ivc3lzdGVtanMvZGlzdC9zeXN0ZW0uc3JjLmpzXCIpLFxuXG4gIC8vIEV4dGVybmFsXG4gIG5ldyBSZXF1ZXN0KFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9pY29uP2ZhbWlseT1NYXRlcmlhbCtJY29uc1wiKSxcbiAgbmV3IFJlcXVlc3QoXCJodHRwczovL2NkbmpzLmNsb3VkZmxhcmUuY29tL2FqYXgvbGlicy9tYXRlcmlhbGl6ZS8wLjk4LjAvY3NzL21hdGVyaWFsaXplLm1pbi5jc3NcIiksXG4gIG5ldyBSZXF1ZXN0KFwiaHR0cHM6Ly9jb2RlLmpxdWVyeS5jb20vanF1ZXJ5LTMuMS4wLm1pbi5qc1wiKSxcbiAgbmV3IFJlcXVlc3QoXCJodHRwczovL2NkbmpzLmNsb3VkZmxhcmUuY29tL2FqYXgvbGlicy9tYXRlcmlhbGl6ZS8wLjk4LjAvanMvbWF0ZXJpYWxpemUubWluLmpzXCIpLFxuXTtcblxuLy8gSWYgYSBieXRlIGNoYW5nZXMgLT4gbmV3IHNlcnZpY2Ugd29ya2VyIHdpbGwgYmUgaW5zdGFsbGVkXG5zZWxmLmFkZEV2ZW50TGlzdGVuZXIoXCJpbnN0YWxsXCIsIChlOiBFeHRlbmRhYmxlRXZlbnQpID0+IHtcbiAgY29uc29sZS5sb2coXCJbU2VydmljZVdvcmtlcl0gSW5zdGFsbFwiKTtcblxuICBlLndhaXRVbnRpbChcbiAgICBjYWNoZXMub3BlbihhcHBTaGVsbENhY2hlKS50aGVuKGZ1bmN0aW9uIChjYWNoZSkge1xuICAgICAgY29uc29sZS5sb2coXCJbU2VydmljZVdvcmtlcl0gQ2FjaGluZyBBcHAgU2hlbGxcIik7XG4gICAgICByZXR1cm4gY2FjaGUuYWRkQWxsKGZpbGVzVG9DYWNoZSlcbiAgICAgICAgLnRoZW4oKCkgPT4geyBoYW5kbGU0MDRSZWRpcmVjdHMoY2FjaGUpOyB9KTtcbiAgICB9KS50aGVuKCgpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKFwiW1NlcnZpY2VXb3JrZXJdIFNraXAgd2FpdGluZyBvbiBpbnN0YWxsXCIpO1xuICAgICAgcmV0dXJuIHNraXBXYWl0aW5nKCk7XG4gICAgfSlcbiAgKTtcbn0pO1xuXG4vLyBXaGVuIHRoZSBjdXJyZW50bHkgb3BlbiBwYWdlcyBvZiB5b3VyIHNpdGUgYXJlIGNsb3NlZCwgdGhlIG9sZCBzZXJ2aWNlIHdvcmtlciB3aWxsIGJlIGtpbGxlZCBcbi8vIGFuZCB0aGUgbmV3IHNlcnZpY2Ugd29ya2VyIHdpbGwgdGFrZSBjb250cm9sIGFuZCBmaXJlcyBcImFjdGl2YXRlXCJcbnNlbGYuYWRkRXZlbnRMaXN0ZW5lcihcImFjdGl2YXRlXCIsIChlOiBFeHRlbmRhYmxlRXZlbnQpID0+IHtcbiAgY29uc29sZS5sb2coXCJbU2VydmljZVdvcmtlcl0gQWN0aXZhdGVcIik7XG4gIGUud2FpdFVudGlsKFxuICAgIGNhY2hlcy5rZXlzKCkudGhlbigoa2V5TGlzdCkgPT4ge1xuICAgICAgcmV0dXJuIFByb21pc2UuYWxsKGtleUxpc3QubWFwKChrZXkpID0+IHtcbiAgICAgICAgaWYgKGtleSAhPT0gYXBwU2hlbGxDYWNoZSkge1xuICAgICAgICAgIGNvbnNvbGUubG9nKFwiW1NlcnZpY2VXb3JrZXJdIFJlbW92aW5nIG9sZCBjYWNoZVwiLCBrZXkpO1xuICAgICAgICAgIHJldHVybiBjYWNoZXMuZGVsZXRlKGtleSk7XG4gICAgICAgIH1cbiAgICAgIH0pKS50aGVuKCgpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coXCJbU2VydmljZVdvcmtlcl0gQ2xhaW1pbmcgY2xpZW50cyBmb3IgdmVyc2lvbiBcIiwgdmVyc2lvbik7XG4gICAgICAgIHJldHVybiBjbGllbnRzLmNsYWltKCk7XG4gICAgICB9KTtcbiAgICB9KVxuICApO1xufSk7XG5cbnNlbGYuYWRkRXZlbnRMaXN0ZW5lcihcImZldGNoXCIsIChlOiBGZXRjaEV2ZW50KSA9PiB7XG5cbiAgbGV0IGRhdGFVcmwgPSBcImh0dHBzOi8vbWF3ZXdlYmFwaS5henVyZXdlYnNpdGVzLm5ldC9hcGkvbWVzc2FnZXNcIjtcbiAgLy8gd2UgY2FjaGUgdGhlIGRhdGEgcmVjZWl2ZWQgZnJvbSB0aGUgZGF0YSBhcGkgc28gdGhhdCB3ZSBjYW4gZGlzcGxheSB0aGUgZGF0YSByZWFsbHkgZmFzdCBiZWZvcmUgcmVjZWl2aW5nIHRoZSBkYXRhXG4gIGlmIChlLnJlcXVlc3QudXJsLmluZGV4T2YoZGF0YVVybCkgPiAtMSkge1xuICAgIC8vIENPUlMtU2hpdDogd2hlbiBvZmZsaW5lIHRoZSBmZXRjaCBmYWlscyBoYXJkIGJlY2F1c2Ugb2YgY29ycyEgQXMgYSB3b3JrYXJvdW5kIEkganVzdCByZXR1cm4gdGhlIGNhY2hlZCBkYXRhIHdoZW4gb2ZmbGluZS5cbiAgICBpZiAobmF2aWdhdG9yLm9uTGluZSkge1xuICAgICAgZS5yZXNwb25kV2l0aChcbiAgICAgICAgZmV0Y2goZS5yZXF1ZXN0KVxuICAgICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIGNhY2hlcy5vcGVuKGRhdGFDYWNoZSkudGhlbigoY2FjaGUpID0+IHtcbiAgICAgICAgICAgICAgY2FjaGUucHV0KGUucmVxdWVzdCwgcmVzcG9uc2UuY2xvbmUoKSk7XG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiW1NlcnZpY2VXb3JrZXJdIEZldGNoZWQmQ2FjaGVkIERhdGFcIik7XG4gICAgICAgICAgICAgIHJldHVybiByZXNwb25zZTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH0pXG4gICAgICApO1xuICAgIH0gZWxzZSB7XG4gICAgICBlLnJlc3BvbmRXaXRoKFxuICAgICAgICBjYWNoZXMubWF0Y2goZS5yZXF1ZXN0KS50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgICByZXR1cm4gcmVzcG9uc2U7XG4gICAgICAgICAgICB9KSk7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIC8vIHJldHVybiB0aGUgY2FjaGVkIGFwcCBzaGVsbFxuICAgIGUucmVzcG9uZFdpdGgoXG4gICAgICBjYWNoZXMubWF0Y2goZS5yZXF1ZXN0KS50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICByZXR1cm4gcmVzcG9uc2UgfHwgZmV0Y2goZS5yZXF1ZXN0KTtcbiAgICAgIH0pXG4gICAgKTtcbiAgfVxufSk7XG5cbnNlbGYuYWRkRXZlbnRMaXN0ZW5lcihcInB1c2hcIiwgKGU6IFB1c2hFdmVudCkgPT4ge1xuICBjb25zb2xlLmxvZyhcIltTZXJ2aWNlV29ya2VyXSBQdXNoIG1lc3NhZ2UgcmVjZWl2ZWQgXCIsIGUpO1xuICAvLyBpbnN0ZWFkIG9mIGhhdmluZyBhIGZpeGVkIG1lc3NhZ2Ugd2UgY291bGQgZ2V0IHRoZSBjb250ZW50IGZyb20gYW4gYXBpIGhlcmVcbiAgbGV0IHRpdGxlID0gXCJQdXNoIG1lc3NhZ2VcIjtcbiAgZS53YWl0VW50aWwoXG4gICAgcmVnaXN0cmF0aW9uLnNob3dOb3RpZmljYXRpb24odGl0bGUsIHtcbiAgICAgIGJvZHk6IFwiU29tZSBUZXh0XCIsXG4gICAgICBpY29uOiBcImFzc2V0cy9pbWFnZXMvc3VyZmVyLTQ4LnBuZ1wiLFxuICAgICAgdGFnOiBcIm1lc3NhZ2UtdGFnXCIsXG4gICAgfSkpO1xufSk7XG5cbnNlbGYuYWRkRXZlbnRMaXN0ZW5lcihcIm5vdGlmaWNhdGlvbmNsaWNrXCIsIChldmVudDogTm90aWZpY2F0aW9uRXZlbnQpID0+IHtcbiAgY29uc29sZS5sb2coXCJbU2VydmljZVdvcmtlcl0gTm90aWZpY2F0aW9uIGNsaWNrOiB0YWcgXCIsIGV2ZW50Lm5vdGlmaWNhdGlvbi50YWcpO1xuICBldmVudC5ub3RpZmljYXRpb24uY2xvc2UoKTtcbiAgbGV0IHVybCA9IFwiaHR0cHM6Ly90b2VnZ2VsLmdpdGh1Yi5pby9ob21lXCI7XG4gIGV2ZW50LndhaXRVbnRpbChcbiAgICBjbGllbnRzLm1hdGNoQWxsKHtcbiAgICAgIHR5cGU6IFwid2luZG93XCIsXG4gICAgfSlcbiAgICAgIC50aGVuKGZ1bmN0aW9uICh3aW5kb3dDbGllbnRzKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgd2luZG93Q2xpZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIGxldCBjbGllbnQgPSB3aW5kb3dDbGllbnRzW2ldO1xuICAgICAgICAgIGNvbnNvbGUubG9nKFwiW1NlcnZpY2VXb3JrZXJdIENsaWVudCBVUkw6XCIsIGNsaWVudC51cmwpO1xuICAgICAgICAgIGlmIChjbGllbnQudXJsID09PSB1cmwgJiYgXCJmb2N1c1wiIGluIGNsaWVudCkge1xuICAgICAgICAgICAgcmV0dXJuIGNsaWVudC5mb2N1cygpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoY2xpZW50cy5vcGVuV2luZG93KSB7XG4gICAgICAgICAgcmV0dXJuIGNsaWVudHMub3BlbldpbmRvdyh1cmwpO1xuICAgICAgICB9XG4gICAgICB9KVxuICApO1xufSk7XG5cbmZ1bmN0aW9uIGhhbmRsZTQwNFJlZGlyZWN0cyhjYWNoZSkge1xuICByZXR1cm4gZmV0Y2goY3VzdG9tNDA0KVxuICAgIC50aGVuKHJlc3BvbnNlID0+IHtcbiAgICAgIHJvdXRlc1RvUmVkaXJlY3RzLmZvckVhY2gocm91dGUgPT4ge1xuICAgICAgICBsZXQgciA9IHJlc3BvbnNlLmNsb25lKCk7XG4gICAgICAgIHJldHVybiBjYWNoZS5wdXQocm91dGUsIHIpO1xuICAgICAgfSk7XG4gICAgfSk7XG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
