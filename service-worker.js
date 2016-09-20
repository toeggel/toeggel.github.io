var dataCache = "dataCache-1  ";
var appShellCache = "appShellCache-2";
var filesToCache = [
    new Request("/"),
    new Request("/home"),
    new Request("/app.min.js"),
    new Request("/app/app.component.html "),
    new Request("/app/home.component.html "),
    new Request("/assets/css/main.css"),
    new Request("/vendor/core-js/client/shim.min.js"),
    new Request("/vendor/zone.js/dist/zone.js"),
    new Request("/vendor/reflect-metadata/Reflect.js"),
    new Request("/vendor/systemjs/dist/system.src.js"),
    new Request("/systemjs.config.js"),
];
// If a byte changes -> new service worker will be installed
self.addEventListener("install", function (e) {
    console.log("[ServiceWorker] Install");
    e.waitUntil(caches.open(appShellCache).then(function (cache) {
        console.log("[ServiceWorker] Caching App Shell");
        return cache.addAll(filesToCache);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNsaWVudC9zZXJ2aWNlLXdvcmtlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxJQUFJLFNBQVMsR0FBRyxlQUFlLENBQUM7QUFDaEMsSUFBSSxhQUFhLEdBQUcsaUJBQWlCLENBQUM7QUFDdEMsSUFBSSxZQUFZLEdBQWM7SUFDNUIsSUFBSSxPQUFPLENBQUMsR0FBRyxDQUFDO0lBQ2hCLElBQUksT0FBTyxDQUFDLE9BQU8sQ0FBQztJQUNwQixJQUFJLE9BQU8sQ0FBQyxhQUFhLENBQUM7SUFDMUIsSUFBSSxPQUFPLENBQUMsMEJBQTBCLENBQUM7SUFDdkMsSUFBSSxPQUFPLENBQUMsMkJBQTJCLENBQUM7SUFDeEMsSUFBSSxPQUFPLENBQUMsc0JBQXNCLENBQUM7SUFDbkMsSUFBSSxPQUFPLENBQUMsb0NBQW9DLENBQUM7SUFDakQsSUFBSSxPQUFPLENBQUMsOEJBQThCLENBQUM7SUFDM0MsSUFBSSxPQUFPLENBQUMscUNBQXFDLENBQUM7SUFDbEQsSUFBSSxPQUFPLENBQUMscUNBQXFDLENBQUM7SUFDbEQsSUFBSSxPQUFPLENBQUMscUJBQXFCLENBQUM7Q0FDbkMsQ0FBQztBQUVGLDREQUE0RDtBQUM1RCxJQUFJLENBQUMsZ0JBQWdCLENBQUMsU0FBUyxFQUFFLFVBQVUsQ0FBa0I7SUFDM0QsT0FBTyxDQUFDLEdBQUcsQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDO0lBQ3ZDLENBQUMsQ0FBQyxTQUFTLENBQ1QsTUFBTSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxLQUFLO1FBQzdDLE9BQU8sQ0FBQyxHQUFHLENBQUMsbUNBQW1DLENBQUMsQ0FBQztRQUNqRCxNQUFNLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUNwQyxDQUFDLENBQUMsQ0FDSCxDQUFDO0FBQ0osQ0FBQyxDQUFDLENBQUM7QUFFSCxnR0FBZ0c7QUFDaEcsb0VBQW9FO0FBQ3BFLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxVQUFVLEVBQUUsVUFBVSxDQUFrQjtJQUM1RCxPQUFPLENBQUMsR0FBRyxDQUFDLDBCQUEwQixDQUFDLENBQUM7SUFDeEMsQ0FBQyxDQUFDLFNBQVMsQ0FDVCxNQUFNLENBQUMsSUFBSSxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQVUsT0FBTztRQUNsQyxNQUFNLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLFVBQVUsR0FBRztZQUMxQyxFQUFFLENBQUMsQ0FBQyxHQUFHLEtBQUssYUFBYSxDQUFDLENBQUMsQ0FBQztnQkFDMUIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxvQ0FBb0MsRUFBRSxHQUFHLENBQUMsQ0FBQztnQkFDdkQsTUFBTSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDNUIsQ0FBQztRQUNILENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDTixDQUFDLENBQUMsQ0FDSCxDQUFDO0FBQ0osQ0FBQyxDQUFDLENBQUM7QUFFSCxJQUFJLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLFVBQVUsQ0FBYTtJQUNwRCxPQUFPLENBQUMsR0FBRyxDQUFDLHVCQUF1QixFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDcEQsSUFBSSxPQUFPLEdBQUcsd0JBQXdCLENBQUM7SUFDdkMscUhBQXFIO0lBQ3JILEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3pDLENBQUMsQ0FBQyxXQUFXLENBQ1gsS0FBSyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUM7YUFDYixJQUFJLENBQUMsVUFBVSxRQUFRO1lBQ3RCLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLEtBQUs7Z0JBQ2hELEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLE9BQU8sRUFBRSxRQUFRLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQztnQkFDdkMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxxQ0FBcUMsQ0FBQyxDQUFDO2dCQUNuRCxNQUFNLENBQUMsUUFBUSxDQUFDO1lBQ2xCLENBQUMsQ0FBQyxDQUFDO1FBQ0wsQ0FBQyxDQUFDLENBQ0wsQ0FBQztJQUNKLENBQUM7SUFBQyxJQUFJLENBQUMsQ0FBQztRQUNOLDhCQUE4QjtRQUM5QixDQUFDLENBQUMsV0FBVyxDQUNYLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLFFBQVE7WUFDN0MsTUFBTSxDQUFDLFFBQVEsSUFBSSxLQUFLLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ3RDLENBQUMsQ0FBQyxDQUNILENBQUM7SUFDSixDQUFDO0FBQ0gsQ0FBQyxDQUFDLENBQUMiLCJmaWxlIjoiY2xpZW50L3NlcnZpY2Utd29ya2VyLmpzIiwic291cmNlc0NvbnRlbnQiOlsibGV0IGRhdGFDYWNoZSA9IFwiZGF0YUNhY2hlLTEgIFwiO1xyXG5sZXQgYXBwU2hlbGxDYWNoZSA9IFwiYXBwU2hlbGxDYWNoZS0xXCI7XHJcbmxldCBmaWxlc1RvQ2FjaGU6IFJlcXVlc3RbXSA9IFtcclxuICBuZXcgUmVxdWVzdChcIi9cIiksXHJcbiAgbmV3IFJlcXVlc3QoXCIvaG9tZVwiKSxcclxuICBuZXcgUmVxdWVzdChcIi9hcHAubWluLmpzXCIpLFxyXG4gIG5ldyBSZXF1ZXN0KFwiL2FwcC9hcHAuY29tcG9uZW50Lmh0bWwgXCIpLFxyXG4gIG5ldyBSZXF1ZXN0KFwiL2FwcC9ob21lLmNvbXBvbmVudC5odG1sIFwiKSxcclxuICBuZXcgUmVxdWVzdChcIi9hc3NldHMvY3NzL21haW4uY3NzXCIpLFxyXG4gIG5ldyBSZXF1ZXN0KFwiL3ZlbmRvci9jb3JlLWpzL2NsaWVudC9zaGltLm1pbi5qc1wiKSxcclxuICBuZXcgUmVxdWVzdChcIi92ZW5kb3Ivem9uZS5qcy9kaXN0L3pvbmUuanNcIiksXHJcbiAgbmV3IFJlcXVlc3QoXCIvdmVuZG9yL3JlZmxlY3QtbWV0YWRhdGEvUmVmbGVjdC5qc1wiKSxcclxuICBuZXcgUmVxdWVzdChcIi92ZW5kb3Ivc3lzdGVtanMvZGlzdC9zeXN0ZW0uc3JjLmpzXCIpLFxyXG4gIG5ldyBSZXF1ZXN0KFwiL3N5c3RlbWpzLmNvbmZpZy5qc1wiKSxcclxuXTtcclxuXHJcbi8vIElmIGEgYnl0ZSBjaGFuZ2VzIC0+IG5ldyBzZXJ2aWNlIHdvcmtlciB3aWxsIGJlIGluc3RhbGxlZFxyXG5zZWxmLmFkZEV2ZW50TGlzdGVuZXIoXCJpbnN0YWxsXCIsIGZ1bmN0aW9uIChlOiBFeHRlbmRhYmxlRXZlbnQpIHtcclxuICBjb25zb2xlLmxvZyhcIltTZXJ2aWNlV29ya2VyXSBJbnN0YWxsXCIpO1xyXG4gIGUud2FpdFVudGlsKFxyXG4gICAgY2FjaGVzLm9wZW4oYXBwU2hlbGxDYWNoZSkudGhlbihmdW5jdGlvbiAoY2FjaGUpIHtcclxuICAgICAgY29uc29sZS5sb2coXCJbU2VydmljZVdvcmtlcl0gQ2FjaGluZyBBcHAgU2hlbGxcIik7XHJcbiAgICAgIHJldHVybiBjYWNoZS5hZGRBbGwoZmlsZXNUb0NhY2hlKTtcclxuICAgIH0pXHJcbiAgKTtcclxufSk7XHJcblxyXG4vLyBXaGVuIHRoZSBjdXJyZW50bHkgb3BlbiBwYWdlcyBvZiB5b3VyIHNpdGUgYXJlIGNsb3NlZCwgdGhlIG9sZCBzZXJ2aWNlIHdvcmtlciB3aWxsIGJlIGtpbGxlZCBcclxuLy8gYW5kIHRoZSBuZXcgc2VydmljZSB3b3JrZXIgd2lsbCB0YWtlIGNvbnRyb2wgYW5kIGZpcmVzIFwiYWN0aXZhdGVcIlxyXG5zZWxmLmFkZEV2ZW50TGlzdGVuZXIoXCJhY3RpdmF0ZVwiLCBmdW5jdGlvbiAoZTogRXh0ZW5kYWJsZUV2ZW50KSB7XHJcbiAgY29uc29sZS5sb2coXCJbU2VydmljZVdvcmtlcl0gQWN0aXZhdGVcIik7XHJcbiAgZS53YWl0VW50aWwoXHJcbiAgICBjYWNoZXMua2V5cygpLnRoZW4oZnVuY3Rpb24gKGtleUxpc3QpIHtcclxuICAgICAgcmV0dXJuIFByb21pc2UuYWxsKGtleUxpc3QubWFwKGZ1bmN0aW9uIChrZXkpIHtcclxuICAgICAgICBpZiAoa2V5ICE9PSBhcHBTaGVsbENhY2hlKSB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhcIltTZXJ2aWNlV29ya2VyXSBSZW1vdmluZyBvbGQgY2FjaGVcIiwga2V5KTtcclxuICAgICAgICAgIHJldHVybiBjYWNoZXMuZGVsZXRlKGtleSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KSk7XHJcbiAgICB9KVxyXG4gICk7XHJcbn0pO1xyXG5cclxuc2VsZi5hZGRFdmVudExpc3RlbmVyKFwiZmV0Y2hcIiwgZnVuY3Rpb24gKGU6IEZldGNoRXZlbnQpIHtcclxuICBjb25zb2xlLmxvZyhcIltTZXJ2aWNlV29ya2VyXSBGZXRjaFwiLCBlLnJlcXVlc3QudXJsKTtcclxuICBsZXQgZGF0YVVybCA9IFwiW2luc2VydCBkYXRhIHVybCBoZXJlXVwiO1xyXG4gIC8vIHdlIGNhY2hlIHRoZSBkYXRhIHJlY2VpdmVkIGZyb20gdGhlIGRhdGEgYXBpIHNvIHRoYXQgd2UgY2FuIGRpc3BsYXkgdGhlIGRhdGEgcmVhbGx5IGZhc3QgYmVmb3JlIHJlY2VpdmluZyB0aGUgZGF0YVxyXG4gIGlmIChlLnJlcXVlc3QudXJsLmluZGV4T2YoZGF0YVVybCkgPT09IDApIHtcclxuICAgIGUucmVzcG9uZFdpdGgoXHJcbiAgICAgIGZldGNoKGUucmVxdWVzdClcclxuICAgICAgICAudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuICAgICAgICAgIHJldHVybiBjYWNoZXMub3BlbihkYXRhQ2FjaGUpLnRoZW4oZnVuY3Rpb24gKGNhY2hlKSB7XHJcbiAgICAgICAgICAgIGNhY2hlLnB1dChlLnJlcXVlc3QsIHJlc3BvbnNlLmNsb25lKCkpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIltTZXJ2aWNlV29ya2VyXSBGZXRjaGVkJkNhY2hlZCBEYXRhXCIpO1xyXG4gICAgICAgICAgICByZXR1cm4gcmVzcG9uc2U7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9KVxyXG4gICAgKTtcclxuICB9IGVsc2Uge1xyXG4gICAgLy8gcmV0dXJuIHRoZSBjYWNoZWQgYXBwIHNoZWxsXHJcbiAgICBlLnJlc3BvbmRXaXRoKFxyXG4gICAgICBjYWNoZXMubWF0Y2goZS5yZXF1ZXN0KS50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG4gICAgICAgIHJldHVybiByZXNwb25zZSB8fCBmZXRjaChlLnJlcXVlc3QpO1xyXG4gICAgICB9KVxyXG4gICAgKTtcclxuICB9XHJcbn0pO1xyXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
