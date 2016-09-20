var dataCache = "dataCache-1  ";
var appShellCache = "appShellCache-2";
var custom404 = new Request("/404.html");
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
];
// If a byte changes -> new service worker will be installed
self.addEventListener("install", function (e) {
    console.log("[ServiceWorker] Install");
    e.waitUntil(caches.open(appShellCache).then(function (cache) {
        console.log("[ServiceWorker] Caching App Shell");
        return cache.addAll(filesToCache)
            .then(function () { return fetch(custom404); })
            .then(function (response) { return cache.put("/home", response); });
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
        // if (e.request.mode === 'navigate' ||
        //   (e.request.method === 'GET' &&
        //     e.request.headers.get('accept').includes('text/html'))) {
        //   e.respondWith(
        //     fetch(e.request).catch(error => {
        //       // The catch is only triggered if fetch() throws an exception, which will most likely
        //       // happen due to the server being unreachable.
        //       // If fetch() returns a valid HTTP response with an response code in the 4xx or 5xx
        //       // range, the catch() will NOT be called. If you need custom handling for 4xx or 5xx
        //       // errors, see https://github.com/GoogleChrome/samples/tree/gh-pages/service-worker/fallback-response
        //       console.log('Fetch failed; returning offline page instead.', error);
        //       return caches.match(custom404);
        //     })
        //   );
        // }
        // return the cached app shell
        e.respondWith(caches.match(e.request).then(function (response) {
            return response || fetch(e.request);
        }));
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNsaWVudC9zZXJ2aWNlLXdvcmtlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxJQUFJLFNBQVMsR0FBRyxlQUFlLENBQUM7QUFDaEMsSUFBSSxhQUFhLEdBQUcsaUJBQWlCLENBQUM7QUFDdEMsSUFBTSxTQUFTLEdBQUcsSUFBSSxPQUFPLENBQUMsV0FBVyxDQUFDLENBQUM7QUFDM0MsSUFBSSxZQUFZLEdBQWM7SUFDNUIsU0FBUztJQUNULElBQUksT0FBTyxDQUFDLEdBQUcsQ0FBQztJQUNoQixJQUFJLE9BQU8sQ0FBQyxhQUFhLENBQUM7SUFDMUIsSUFBSSxPQUFPLENBQUMsMEJBQTBCLENBQUM7SUFDdkMsSUFBSSxPQUFPLENBQUMsMkJBQTJCLENBQUM7SUFDeEMsSUFBSSxPQUFPLENBQUMsc0JBQXNCLENBQUM7SUFDbkMsSUFBSSxPQUFPLENBQUMsb0NBQW9DLENBQUM7SUFDakQsSUFBSSxPQUFPLENBQUMsOEJBQThCLENBQUM7SUFDM0MsSUFBSSxPQUFPLENBQUMscUNBQXFDLENBQUM7SUFDbEQsSUFBSSxPQUFPLENBQUMscUNBQXFDLENBQUM7SUFDbEQsSUFBSSxPQUFPLENBQUMscUJBQXFCLENBQUM7Q0FDbkMsQ0FBQztBQUVGLDREQUE0RDtBQUM1RCxJQUFJLENBQUMsZ0JBQWdCLENBQUMsU0FBUyxFQUFFLFVBQVUsQ0FBa0I7SUFDM0QsT0FBTyxDQUFDLEdBQUcsQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDO0lBRXZDLENBQUMsQ0FBQyxTQUFTLENBQ1QsTUFBTSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxLQUFLO1FBQzdDLE9BQU8sQ0FBQyxHQUFHLENBQUMsbUNBQW1DLENBQUMsQ0FBQztRQUNqRCxNQUFNLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUM7YUFDOUIsSUFBSSxDQUFDLGNBQVEsTUFBTSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQzthQUN4QyxJQUFJLENBQUMsVUFBQSxRQUFRLElBQU0sTUFBTSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDaEUsQ0FBQyxDQUFDLENBQ0gsQ0FBQztBQUNKLENBQUMsQ0FBQyxDQUFDO0FBRUgsZ0dBQWdHO0FBQ2hHLG9FQUFvRTtBQUNwRSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsVUFBVSxFQUFFLFVBQVUsQ0FBa0I7SUFDNUQsT0FBTyxDQUFDLEdBQUcsQ0FBQywwQkFBMEIsQ0FBQyxDQUFDO0lBQ3hDLENBQUMsQ0FBQyxTQUFTLENBQ1QsTUFBTSxDQUFDLElBQUksRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFVLE9BQU87UUFDbEMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxVQUFVLEdBQUc7WUFDMUMsRUFBRSxDQUFDLENBQUMsR0FBRyxLQUFLLGFBQWEsQ0FBQyxDQUFDLENBQUM7Z0JBQzFCLE9BQU8sQ0FBQyxHQUFHLENBQUMsb0NBQW9DLEVBQUUsR0FBRyxDQUFDLENBQUM7Z0JBQ3ZELE1BQU0sQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQzVCLENBQUM7UUFDSCxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ04sQ0FBQyxDQUFDLENBQ0gsQ0FBQztBQUNKLENBQUMsQ0FBQyxDQUFDO0FBRUgsSUFBSSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxVQUFVLENBQWE7SUFDcEQsT0FBTyxDQUFDLEdBQUcsQ0FBQyx1QkFBdUIsRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ3BELElBQUksT0FBTyxHQUFHLHdCQUF3QixDQUFDO0lBQ3ZDLHFIQUFxSDtJQUNySCxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN6QyxDQUFDLENBQUMsV0FBVyxDQUNYLEtBQUssQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDO2FBQ2IsSUFBSSxDQUFDLFVBQVUsUUFBUTtZQUN0QixNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxLQUFLO2dCQUNoRCxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxPQUFPLEVBQUUsUUFBUSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUM7Z0JBQ3ZDLE9BQU8sQ0FBQyxHQUFHLENBQUMscUNBQXFDLENBQUMsQ0FBQztnQkFDbkQsTUFBTSxDQUFDLFFBQVEsQ0FBQztZQUNsQixDQUFDLENBQUMsQ0FBQztRQUNMLENBQUMsQ0FBQyxDQUNMLENBQUM7SUFDSixDQUFDO0lBQUMsSUFBSSxDQUFDLENBQUM7UUFDTix1Q0FBdUM7UUFDdkMsbUNBQW1DO1FBQ25DLGdFQUFnRTtRQUNoRSxtQkFBbUI7UUFDbkIsd0NBQXdDO1FBQ3hDLDhGQUE4RjtRQUM5Rix1REFBdUQ7UUFDdkQsNEZBQTRGO1FBQzVGLDZGQUE2RjtRQUM3Riw4R0FBOEc7UUFDOUcsNkVBQTZFO1FBQzdFLHdDQUF3QztRQUN4QyxTQUFTO1FBQ1QsT0FBTztRQUNQLElBQUk7UUFFSiw4QkFBOEI7UUFDOUIsQ0FBQyxDQUFDLFdBQVcsQ0FDWCxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxRQUFRO1lBQzdDLE1BQU0sQ0FBQyxRQUFRLElBQUksS0FBSyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUN0QyxDQUFDLENBQUMsQ0FDSCxDQUFDO0lBQ0osQ0FBQztBQUNILENBQUMsQ0FBQyxDQUFDIiwiZmlsZSI6ImNsaWVudC9zZXJ2aWNlLXdvcmtlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImxldCBkYXRhQ2FjaGUgPSBcImRhdGFDYWNoZS0xICBcIjtcclxubGV0IGFwcFNoZWxsQ2FjaGUgPSBcImFwcFNoZWxsQ2FjaGUtMlwiO1xyXG5jb25zdCBjdXN0b200MDQgPSBuZXcgUmVxdWVzdChcIi80MDQuaHRtbFwiKTtcclxubGV0IGZpbGVzVG9DYWNoZTogUmVxdWVzdFtdID0gW1xyXG4gIGN1c3RvbTQwNCxcclxuICBuZXcgUmVxdWVzdChcIi9cIiksXHJcbiAgbmV3IFJlcXVlc3QoXCIvYXBwLm1pbi5qc1wiKSxcclxuICBuZXcgUmVxdWVzdChcIi9hcHAvYXBwLmNvbXBvbmVudC5odG1sIFwiKSxcclxuICBuZXcgUmVxdWVzdChcIi9hcHAvaG9tZS5jb21wb25lbnQuaHRtbCBcIiksXHJcbiAgbmV3IFJlcXVlc3QoXCIvYXNzZXRzL2Nzcy9tYWluLmNzc1wiKSxcclxuICBuZXcgUmVxdWVzdChcIi92ZW5kb3IvY29yZS1qcy9jbGllbnQvc2hpbS5taW4uanNcIiksXHJcbiAgbmV3IFJlcXVlc3QoXCIvdmVuZG9yL3pvbmUuanMvZGlzdC96b25lLmpzXCIpLFxyXG4gIG5ldyBSZXF1ZXN0KFwiL3ZlbmRvci9yZWZsZWN0LW1ldGFkYXRhL1JlZmxlY3QuanNcIiksXHJcbiAgbmV3IFJlcXVlc3QoXCIvdmVuZG9yL3N5c3RlbWpzL2Rpc3Qvc3lzdGVtLnNyYy5qc1wiKSxcclxuICBuZXcgUmVxdWVzdChcIi9zeXN0ZW1qcy5jb25maWcuanNcIiksXHJcbl07XHJcblxyXG4vLyBJZiBhIGJ5dGUgY2hhbmdlcyAtPiBuZXcgc2VydmljZSB3b3JrZXIgd2lsbCBiZSBpbnN0YWxsZWRcclxuc2VsZi5hZGRFdmVudExpc3RlbmVyKFwiaW5zdGFsbFwiLCBmdW5jdGlvbiAoZTogRXh0ZW5kYWJsZUV2ZW50KSB7XHJcbiAgY29uc29sZS5sb2coXCJbU2VydmljZVdvcmtlcl0gSW5zdGFsbFwiKTtcclxuXHJcbiAgZS53YWl0VW50aWwoXHJcbiAgICBjYWNoZXMub3BlbihhcHBTaGVsbENhY2hlKS50aGVuKGZ1bmN0aW9uIChjYWNoZSkge1xyXG4gICAgICBjb25zb2xlLmxvZyhcIltTZXJ2aWNlV29ya2VyXSBDYWNoaW5nIEFwcCBTaGVsbFwiKTtcclxuICAgICAgcmV0dXJuIGNhY2hlLmFkZEFsbChmaWxlc1RvQ2FjaGUpXHJcbiAgICAgICAgLnRoZW4oKCkgPT4geyByZXR1cm4gZmV0Y2goY3VzdG9tNDA0KTsgfSlcclxuICAgICAgICAudGhlbihyZXNwb25zZSA9PiB7IHJldHVybiBjYWNoZS5wdXQoXCIvaG9tZVwiLCByZXNwb25zZSk7IH0pO1xyXG4gICAgfSlcclxuICApO1xyXG59KTtcclxuXHJcbi8vIFdoZW4gdGhlIGN1cnJlbnRseSBvcGVuIHBhZ2VzIG9mIHlvdXIgc2l0ZSBhcmUgY2xvc2VkLCB0aGUgb2xkIHNlcnZpY2Ugd29ya2VyIHdpbGwgYmUga2lsbGVkIFxyXG4vLyBhbmQgdGhlIG5ldyBzZXJ2aWNlIHdvcmtlciB3aWxsIHRha2UgY29udHJvbCBhbmQgZmlyZXMgXCJhY3RpdmF0ZVwiXHJcbnNlbGYuYWRkRXZlbnRMaXN0ZW5lcihcImFjdGl2YXRlXCIsIGZ1bmN0aW9uIChlOiBFeHRlbmRhYmxlRXZlbnQpIHtcclxuICBjb25zb2xlLmxvZyhcIltTZXJ2aWNlV29ya2VyXSBBY3RpdmF0ZVwiKTtcclxuICBlLndhaXRVbnRpbChcclxuICAgIGNhY2hlcy5rZXlzKCkudGhlbihmdW5jdGlvbiAoa2V5TGlzdCkge1xyXG4gICAgICByZXR1cm4gUHJvbWlzZS5hbGwoa2V5TGlzdC5tYXAoZnVuY3Rpb24gKGtleSkge1xyXG4gICAgICAgIGlmIChrZXkgIT09IGFwcFNoZWxsQ2FjaGUpIHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKFwiW1NlcnZpY2VXb3JrZXJdIFJlbW92aW5nIG9sZCBjYWNoZVwiLCBrZXkpO1xyXG4gICAgICAgICAgcmV0dXJuIGNhY2hlcy5kZWxldGUoa2V5KTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pKTtcclxuICAgIH0pXHJcbiAgKTtcclxufSk7XHJcblxyXG5zZWxmLmFkZEV2ZW50TGlzdGVuZXIoXCJmZXRjaFwiLCBmdW5jdGlvbiAoZTogRmV0Y2hFdmVudCkge1xyXG4gIGNvbnNvbGUubG9nKFwiW1NlcnZpY2VXb3JrZXJdIEZldGNoXCIsIGUucmVxdWVzdC51cmwpO1xyXG4gIGxldCBkYXRhVXJsID0gXCJbaW5zZXJ0IGRhdGEgdXJsIGhlcmVdXCI7XHJcbiAgLy8gd2UgY2FjaGUgdGhlIGRhdGEgcmVjZWl2ZWQgZnJvbSB0aGUgZGF0YSBhcGkgc28gdGhhdCB3ZSBjYW4gZGlzcGxheSB0aGUgZGF0YSByZWFsbHkgZmFzdCBiZWZvcmUgcmVjZWl2aW5nIHRoZSBkYXRhXHJcbiAgaWYgKGUucmVxdWVzdC51cmwuaW5kZXhPZihkYXRhVXJsKSA9PT0gMCkge1xyXG4gICAgZS5yZXNwb25kV2l0aChcclxuICAgICAgZmV0Y2goZS5yZXF1ZXN0KVxyXG4gICAgICAgIC50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG4gICAgICAgICAgcmV0dXJuIGNhY2hlcy5vcGVuKGRhdGFDYWNoZSkudGhlbihmdW5jdGlvbiAoY2FjaGUpIHtcclxuICAgICAgICAgICAgY2FjaGUucHV0KGUucmVxdWVzdCwgcmVzcG9uc2UuY2xvbmUoKSk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiW1NlcnZpY2VXb3JrZXJdIEZldGNoZWQmQ2FjaGVkIERhdGFcIik7XHJcbiAgICAgICAgICAgIHJldHVybiByZXNwb25zZTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pXHJcbiAgICApO1xyXG4gIH0gZWxzZSB7XHJcbiAgICAvLyBpZiAoZS5yZXF1ZXN0Lm1vZGUgPT09ICduYXZpZ2F0ZScgfHxcclxuICAgIC8vICAgKGUucmVxdWVzdC5tZXRob2QgPT09ICdHRVQnICYmXHJcbiAgICAvLyAgICAgZS5yZXF1ZXN0LmhlYWRlcnMuZ2V0KCdhY2NlcHQnKS5pbmNsdWRlcygndGV4dC9odG1sJykpKSB7XHJcbiAgICAvLyAgIGUucmVzcG9uZFdpdGgoXHJcbiAgICAvLyAgICAgZmV0Y2goZS5yZXF1ZXN0KS5jYXRjaChlcnJvciA9PiB7XHJcbiAgICAvLyAgICAgICAvLyBUaGUgY2F0Y2ggaXMgb25seSB0cmlnZ2VyZWQgaWYgZmV0Y2goKSB0aHJvd3MgYW4gZXhjZXB0aW9uLCB3aGljaCB3aWxsIG1vc3QgbGlrZWx5XHJcbiAgICAvLyAgICAgICAvLyBoYXBwZW4gZHVlIHRvIHRoZSBzZXJ2ZXIgYmVpbmcgdW5yZWFjaGFibGUuXHJcbiAgICAvLyAgICAgICAvLyBJZiBmZXRjaCgpIHJldHVybnMgYSB2YWxpZCBIVFRQIHJlc3BvbnNlIHdpdGggYW4gcmVzcG9uc2UgY29kZSBpbiB0aGUgNHh4IG9yIDV4eFxyXG4gICAgLy8gICAgICAgLy8gcmFuZ2UsIHRoZSBjYXRjaCgpIHdpbGwgTk9UIGJlIGNhbGxlZC4gSWYgeW91IG5lZWQgY3VzdG9tIGhhbmRsaW5nIGZvciA0eHggb3IgNXh4XHJcbiAgICAvLyAgICAgICAvLyBlcnJvcnMsIHNlZSBodHRwczovL2dpdGh1Yi5jb20vR29vZ2xlQ2hyb21lL3NhbXBsZXMvdHJlZS9naC1wYWdlcy9zZXJ2aWNlLXdvcmtlci9mYWxsYmFjay1yZXNwb25zZVxyXG4gICAgLy8gICAgICAgY29uc29sZS5sb2coJ0ZldGNoIGZhaWxlZDsgcmV0dXJuaW5nIG9mZmxpbmUgcGFnZSBpbnN0ZWFkLicsIGVycm9yKTtcclxuICAgIC8vICAgICAgIHJldHVybiBjYWNoZXMubWF0Y2goY3VzdG9tNDA0KTtcclxuICAgIC8vICAgICB9KVxyXG4gICAgLy8gICApO1xyXG4gICAgLy8gfVxyXG5cclxuICAgIC8vIHJldHVybiB0aGUgY2FjaGVkIGFwcCBzaGVsbFxyXG4gICAgZS5yZXNwb25kV2l0aChcclxuICAgICAgY2FjaGVzLm1hdGNoKGUucmVxdWVzdCkudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuICAgICAgICByZXR1cm4gcmVzcG9uc2UgfHwgZmV0Y2goZS5yZXF1ZXN0KTtcclxuICAgICAgfSlcclxuICAgICk7XHJcbiAgfVxyXG59KTtcclxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
