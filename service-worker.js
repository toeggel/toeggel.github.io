var dataCache = "dataCache-1  ";
var appShellCache = "appShellCache-4";
var custom404 = new Request("/404.html");
var routesToRedirects = [
    new Request("/home"),
];
var filesToCache = [
    custom404,
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
    new Request("https://fonts.googleapis.com/icon?family=Material+Icons"),
    new Request("https://cdnjs.cloudflare.com/ajax/libs/materialize/0.97.7/css/materialize.min.css"),
    new Request("https://code.jquery.com/jquery-3.1.0.min.js"),
    new Request("https://cdnjs.cloudflare.com/ajax/libs/materialize/0.97.7/js/materialize.min.js"),
    new Request("assets/images/surfer-48.png"),
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
function handle404Redirects(cache) {
    return fetch(custom404)
        .then(function (response) {
        routesToRedirects.forEach(function (route) {
            var r = response.clone();
            return cache.put(route, r);
        });
    });
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNsaWVudC9zZXJ2aWNlLXdvcmtlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxJQUFJLFNBQVMsR0FBRyxlQUFlLENBQUM7QUFDaEMsSUFBSSxhQUFhLEdBQUcsaUJBQWlCLENBQUM7QUFFdEMsSUFBTSxTQUFTLEdBQUcsSUFBSSxPQUFPLENBQUMsV0FBVyxDQUFDLENBQUM7QUFDM0MsSUFBTSxpQkFBaUIsR0FBRztJQUN4QixJQUFJLE9BQU8sQ0FBQyxPQUFPLENBQUM7Q0FDckIsQ0FBQztBQUNGLElBQUksWUFBWSxHQUFjO0lBQzVCLFNBQVM7SUFDVCxJQUFJLE9BQU8sQ0FBQyxHQUFHLENBQUM7SUFDaEIsSUFBSSxPQUFPLENBQUMsYUFBYSxDQUFDO0lBQzFCLElBQUksT0FBTyxDQUFDLDBCQUEwQixDQUFDO0lBQ3ZDLElBQUksT0FBTyxDQUFDLDJCQUEyQixDQUFDO0lBQ3hDLElBQUksT0FBTyxDQUFDLHNCQUFzQixDQUFDO0lBQ25DLElBQUksT0FBTyxDQUFDLG9DQUFvQyxDQUFDO0lBQ2pELElBQUksT0FBTyxDQUFDLDhCQUE4QixDQUFDO0lBQzNDLElBQUksT0FBTyxDQUFDLHFDQUFxQyxDQUFDO0lBQ2xELElBQUksT0FBTyxDQUFDLHFDQUFxQyxDQUFDO0lBQ2xELElBQUksT0FBTyxDQUFDLHFCQUFxQixDQUFDO0lBQ2xDLElBQUksT0FBTyxDQUFDLHlEQUF5RCxDQUFDO0lBQ3RFLElBQUksT0FBTyxDQUFDLG1GQUFtRixDQUFDO0lBQ2hHLElBQUksT0FBTyxDQUFDLDZDQUE2QyxDQUFDO0lBQzFELElBQUksT0FBTyxDQUFDLGlGQUFpRixDQUFDO0lBQzlGLElBQUksT0FBTyxDQUFDLDZCQUE2QixDQUFDO0NBQzNDLENBQUM7QUFFRiw0REFBNEQ7QUFDNUQsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFNBQVMsRUFBRSxVQUFVLENBQWtCO0lBQzNELE9BQU8sQ0FBQyxHQUFHLENBQUMseUJBQXlCLENBQUMsQ0FBQztJQUV2QyxDQUFD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QyxLQUFLLENBQUMsR0FBRyxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQztRQUM3QixDQUFDLENBQUMsQ0FBQztJQUNMLENBQUMsQ0FBQyxDQUFDO0FBQ1AsQ0FBQyIsImZpbGUiOiJjbGllbnQvc2VydmljZS13b3JrZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJsZXQgZGF0YUNhY2hlID0gXCJkYXRhQ2FjaGUtMSAgXCI7XHJcbmxldCBhcHBTaGVsbENhY2hlID0gXCJhcHBTaGVsbENhY2hlLTRcIjtcclxuXHJcbmNvbnN0IGN1c3RvbTQwNCA9IG5ldyBSZXF1ZXN0KFwiLzQwNC5odG1sXCIpO1xyXG5jb25zdCByb3V0ZXNUb1JlZGlyZWN0cyA9IFtcclxuICBuZXcgUmVxdWVzdChcIi9ob21lXCIpLFxyXG5dO1xyXG5sZXQgZmlsZXNUb0NhY2hlOiBSZXF1ZXN0W10gPSBbXHJcbiAgY3VzdG9tNDA0LFxyXG4gIG5ldyBSZXF1ZXN0KFwiL1wiKSxcclxuICBuZXcgUmVxdWVzdChcIi9hcHAubWluLmpzXCIpLFxyXG4gIG5ldyBSZXF1ZXN0KFwiL2FwcC9hcHAuY29tcG9uZW50Lmh0bWwgXCIpLFxyXG4gIG5ldyBSZXF1ZXN0KFwiL2FwcC9ob21lLmNvbXBvbmVudC5odG1sIFwiKSxcclxuICBuZXcgUmVxdWVzdChcIi9hc3NldHMvY3NzL21haW4uY3NzXCIpLFxyXG4gIG5ldyBSZXF1ZXN0KFwiL3ZlbmRvci9jb3JlLWpzL2NsaWVudC9zaGltLm1pbi5qc1wiKSxcclxuICBuZXcgUmVxdWVzdChcIi92ZW5kb3Ivem9uZS5qcy9kaXN0L3pvbmUuanNcIiksXHJcbiAgbmV3IFJlcXVlc3QoXCIvdmVuZG9yL3JlZmxlY3QtbWV0YWRhdGEvUmVmbGVjdC5qc1wiKSxcclxuICBuZXcgUmVxdWVzdChcIi92ZW5kb3Ivc3lzdGVtanMvZGlzdC9zeXN0ZW0uc3JjLmpzXCIpLFxyXG4gIG5ldyBSZXF1ZXN0KFwiL3N5c3RlbWpzLmNvbmZpZy5qc1wiKSxcclxuICBuZXcgUmVxdWVzdChcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vaWNvbj9mYW1pbHk9TWF0ZXJpYWwrSWNvbnNcIiksXHJcbiAgbmV3IFJlcXVlc3QoXCJodHRwczovL2NkbmpzLmNsb3VkZmxhcmUuY29tL2FqYXgvbGlicy9tYXRlcmlhbGl6ZS8wLjk3LjcvY3NzL21hdGVyaWFsaXplLm1pbi5jc3NcIiksXHJcbiAgbmV3IFJlcXVlc3QoXCJodHRwczovL2NvZGUuanF1ZXJ5LmNvbS9qcXVlcnktMy4xLjAubWluLmpzXCIpLFxyXG4gIG5ldyBSZXF1ZXN0KFwiaHR0cHM6Ly9jZG5qcy5jbG91ZGZsYXJlLmNvbS9hamF4L2xpYnMvbWF0ZXJpYWxpemUvMC45Ny43L2pzL21hdGVyaWFsaXplLm1pbi5qc1wiKSxcclxuICBuZXcgUmVxdWVzdChcImFzc2V0cy9pbWFnZXMvc3VyZmVyLTQ4LnBuZ1wiKSxcclxuXTtcclxuXHJcbi8vIElmIGEgYnl0ZSBjaGFuZ2VzIC0+IG5ldyBzZXJ2aWNlIHdvcmtlciB3aWxsIGJlIGluc3RhbGxlZFxyXG5zZWxmLmFkZEV2ZW50TGlzdGVuZXIoXCJpbnN0YWxsXCIsIGZ1bmN0aW9uIChlOiBFeHRlbmRhYmxlRXZlbnQpIHtcclxuICBjb25zb2xlLmxvZyhcIltTZXJ2aWNlV29ya2VyXSBJbnN0YWxsXCIpO1xyXG5cclxuICBlLndhaXRVbnRpbChcclxuICAgIGNhY2hlcy5vcGVuKGFwcFNoZWxsQ2FjaGUpLnRoZW4oZnVuY3Rpb24gKGNhY2hlKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwiW1NlcnZpY2VXb3JrZXJdIENhY2hpbmcgQXBwIFNoZWxsXCIpO1xyXG4gICAgICByZXR1cm4gY2FjaGUuYWRkQWxsKGZpbGVzVG9DYWNoZSlcclxuICAgICAgICAudGhlbigoKSA9PiB7IGhhbmRsZTQwNFJlZGlyZWN0cyhjYWNoZSk7IH0pO1xyXG4gICAgfSlcclxuICApO1xyXG59KTtcclxuXHJcbi8vIFdoZW4gdGhlIGN1cnJlbnRseSBvcGVuIHBhZ2VzIG9mIHlvdXIgc2l0ZSBhcmUgY2xvc2VkLCB0aGUgb2xkIHNlcnZpY2Ugd29ya2VyIHdpbGwgYmUga2lsbGVkIFxyXG4vLyBhbmQgdGhlIG5ldyBzZXJ2aWNlIHdvcmtlciB3aWxsIHRha2UgY29udHJvbCBhbmQgZmlyZXMgXCJhY3RpdmF0ZVwiXHJcbnNlbGYuYWRkRXZlbnRMaXN0ZW5lcihcImFjdGl2YXRlXCIsIGZ1bmN0aW9uIChlOiBFeHRlbmRhYmxlRXZlbnQpIHtcclxuICBjb25zb2xlLmxvZyhcIltTZXJ2aWNlV29ya2VyXSBBY3RpdmF0ZVwiKTtcclxuICBlLndhaXRVbnRpbChcclxuICAgIGNhY2hlcy5rZXlzKCkudGhlbihmdW5jdGlvbiAoa2V5TGlzdCkge1xyXG4gICAgICByZXR1cm4gUHJvbWlzZS5hbGwoa2V5TGlzdC5tYXAoZnVuY3Rpb24gKGtleSkge1xyXG4gICAgICAgIGlmIChrZXkgIT09IGFwcFNoZWxsQ2FjaGUpIHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKFwiW1NlcnZpY2VXb3JrZXJdIFJlbW92aW5nIG9sZCBjYWNoZVwiLCBrZXkpO1xyXG4gICAgICAgICAgcmV0dXJuIGNhY2hlcy5kZWxldGUoa2V5KTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pKTtcclxuICAgIH0pXHJcbiAgKTtcclxufSk7XHJcblxyXG5zZWxmLmFkZEV2ZW50TGlzdGVuZXIoXCJmZXRjaFwiLCBmdW5jdGlvbiAoZTogRmV0Y2hFdmVudCkge1xyXG4gIGNvbnNvbGUubG9nKFwiW1NlcnZpY2VXb3JrZXJdIEZldGNoXCIsIGUucmVxdWVzdC51cmwpO1xyXG4gIGxldCBkYXRhVXJsID0gXCJbaW5zZXJ0IGRhdGEgdXJsIGhlcmVdXCI7XHJcbiAgLy8gd2UgY2FjaGUgdGhlIGRhdGEgcmVjZWl2ZWQgZnJvbSB0aGUgZGF0YSBhcGkgc28gdGhhdCB3ZSBjYW4gZGlzcGxheSB0aGUgZGF0YSByZWFsbHkgZmFzdCBiZWZvcmUgcmVjZWl2aW5nIHRoZSBkYXRhXHJcbiAgaWYgKGUucmVxdWVzdC51cmwuaW5kZXhPZihkYXRhVXJsKSA9PT0gMCkge1xyXG4gICAgZS5yZXNwb25kV2l0aChcclxuICAgICAgZmV0Y2goZS5yZXF1ZXN0KVxyXG4gICAgICAgIC50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG4gICAgICAgICAgcmV0dXJuIGNhY2hlcy5vcGVuKGRhdGFDYWNoZSkudGhlbihmdW5jdGlvbiAoY2FjaGUpIHtcclxuICAgICAgICAgICAgY2FjaGUucHV0KGUucmVxdWVzdCwgcmVzcG9uc2UuY2xvbmUoKSk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiW1NlcnZpY2VXb3JrZXJdIEZldGNoZWQmQ2FjaGVkIERhdGFcIik7XHJcbiAgICAgICAgICAgIHJldHVybiByZXNwb25zZTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pXHJcbiAgICApO1xyXG4gIH0gZWxzZSB7XHJcbiAgICAvLyByZXR1cm4gdGhlIGNhY2hlZCBhcHAgc2hlbGxcclxuICAgIGUucmVzcG9uZFdpdGgoXHJcbiAgICAgIGNhY2hlcy5tYXRjaChlLnJlcXVlc3QpLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlIHx8IGZldGNoKGUucmVxdWVzdCk7XHJcbiAgICAgIH0pXHJcbiAgICApO1xyXG4gIH1cclxufSk7XHJcblxyXG5mdW5jdGlvbiBoYW5kbGU0MDRSZWRpcmVjdHMoY2FjaGUpIHtcclxuICByZXR1cm4gZmV0Y2goY3VzdG9tNDA0KVxyXG4gICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgICByb3V0ZXNUb1JlZGlyZWN0cy5mb3JFYWNoKHJvdXRlID0+IHtcclxuICAgICAgICBsZXQgciA9IHJlc3BvbnNlLmNsb25lKCk7XHJcbiAgICAgICAgcmV0dXJuIGNhY2hlLnB1dChyb3V0ZSwgcik7XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
