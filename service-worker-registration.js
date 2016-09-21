(function () {
    "use strict";
    if ("serviceWorker" in navigator) {
        navigator.serviceWorker.register("/service-worker.js").then(function (registration) {
            // updatefound is fired if service-worker.js changes.
            registration.onupdatefound = function () {
                // The updatefound event implies that reg.installing is set; see
                // https://slightlyoff.github.io/ServiceWorker/spec/service_worker/index.html#service-worker-container-updatefound-event
                var installingWorker = registration.installing;
                installingWorker.onstatechange = function () {
                    switch (installingWorker.state) {
                        case "installed":
                            if (navigator.serviceWorker.controller) {
                                console.log("ServiceWorker -> New or updated content is available.");
                            }
                            else {
                                console.log("ServiceWorker -> Content is now available offline!");
                            }
                            break;
                        case "redundant":
                            console.error("ServiceWorker -> The installing service worker became redundant.");
                            break;
                    }
                };
            };
            // Registration was successful
            console.log("ServiceWorker registration successful with scope: ", registration.scope);
        }).catch(function (err) {
            // registration failed :(
            console.log("ServiceWorker registration failed: ", err);
        });
    }
})();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNsaWVudC9zZXJ2aWNlLXdvcmtlci1yZWdpc3RyYXRpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsQ0FBQztJQUNDLFlBQVksQ0FBQztJQUViLEVBQUUsQ0FBQyxDQUFDLGVBQWUsSUFBSSxTQUFTLENBQUMsQ0FBQyxDQUFDO1FBQ2pDLFNBQVMsQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLG9CQUFvQixDQUFDLENBQUMsSUFBSSxDQUFDLFVBQUMsWUFBWTtZQUN2RSxxREFBcUQ7WUFDckQsWUFBWSxDQUFDLGFBQWEsR0FBRztnQkFDM0IsZ0VBQWdFO2dCQUNoRSx3SEFBd0g7Z0JBQ3hILElBQUksZ0JBQWdCLEdBQUcsWUFBWSxDQUFDLFVBQVUsQ0FBQztnQkFFL0MsZ0JBQWdCLENBQUMsYUFBYSxHQUFHO29CQUMvQixNQUFNLENBQUMsQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO3dCQUMvQixLQUFLLFdBQVc7NEJBQ2QsRUFBRSxDQUFDLENBQUMsU0FBUyxDQUFDLGFBQWEsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO2dDQUN2QyxPQUFPLENBQUMsR0FBRyxDQUFDLHVEQUF1RCxDQUFDLENBQUM7NEJBQ3ZFLENBQUM7NEJBQUMsSUFBSSxDQUFDLENBQUM7Z0NBQ04sT0FBTyxDQUFDLEdBQUcsQ0FBQyxvREFBb0QsQ0FBQyxDQUFDOzRCQUNwRSxDQUFDOzRCQUNELEtBQUssQ0FBQzt3QkFDUixLQUFLLFdBQVc7NEJBQ2QsT0FBTyxDQUFDLEtBQUssQ0FBQyxrRUFBa0UsQ0FBQyxDQUFDOzRCQUNsRixLQUFLLENBQUM7b0JBQ1YsQ0FBQztnQkFDSCxDQUFDLENBQUM7WUFDSixDQUFDLENBQUM7WUFDRiw4QkFBOEI7WUFDOUIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxvREFBb0QsRUFBRSxZQUFZLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDeEYsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLFVBQUMsR0FBRztZQUNYLHlCQUF5QjtZQUN6QixPQUFPLENBQUMsR0FBRyxDQUFDLHFDQUFxQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBQzFELENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztBQUVILENBQUMsQ0FBQyxFQUFFLENBQUMiLCJmaWxlIjoiY2xpZW50L3NlcnZpY2Utd29ya2VyLXJlZ2lzdHJhdGlvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiAoKSB7XHJcbiAgXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG4gIGlmIChcInNlcnZpY2VXb3JrZXJcIiBpbiBuYXZpZ2F0b3IpIHtcclxuICAgIG5hdmlnYXRvci5zZXJ2aWNlV29ya2VyLnJlZ2lzdGVyKFwiL3NlcnZpY2Utd29ya2VyLmpzXCIpLnRoZW4oKHJlZ2lzdHJhdGlvbikgPT4ge1xyXG4gICAgICAvLyB1cGRhdGVmb3VuZCBpcyBmaXJlZCBpZiBzZXJ2aWNlLXdvcmtlci5qcyBjaGFuZ2VzLlxyXG4gICAgICByZWdpc3RyYXRpb24ub251cGRhdGVmb3VuZCA9ICgpID0+IHtcclxuICAgICAgICAvLyBUaGUgdXBkYXRlZm91bmQgZXZlbnQgaW1wbGllcyB0aGF0IHJlZy5pbnN0YWxsaW5nIGlzIHNldDsgc2VlXHJcbiAgICAgICAgLy8gaHR0cHM6Ly9zbGlnaHRseW9mZi5naXRodWIuaW8vU2VydmljZVdvcmtlci9zcGVjL3NlcnZpY2Vfd29ya2VyL2luZGV4Lmh0bWwjc2VydmljZS13b3JrZXItY29udGFpbmVyLXVwZGF0ZWZvdW5kLWV2ZW50XHJcbiAgICAgICAgbGV0IGluc3RhbGxpbmdXb3JrZXIgPSByZWdpc3RyYXRpb24uaW5zdGFsbGluZztcclxuXHJcbiAgICAgICAgaW5zdGFsbGluZ1dvcmtlci5vbnN0YXRlY2hhbmdlID0gKCkgPT4ge1xyXG4gICAgICAgICAgc3dpdGNoIChpbnN0YWxsaW5nV29ya2VyLnN0YXRlKSB7XHJcbiAgICAgICAgICAgIGNhc2UgXCJpbnN0YWxsZWRcIjpcclxuICAgICAgICAgICAgICBpZiAobmF2aWdhdG9yLnNlcnZpY2VXb3JrZXIuY29udHJvbGxlcikge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJTZXJ2aWNlV29ya2VyIC0+IE5ldyBvciB1cGRhdGVkIGNvbnRlbnQgaXMgYXZhaWxhYmxlLlwiKTtcclxuICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJTZXJ2aWNlV29ya2VyIC0+IENvbnRlbnQgaXMgbm93IGF2YWlsYWJsZSBvZmZsaW5lIVwiKTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJyZWR1bmRhbnRcIjpcclxuICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiU2VydmljZVdvcmtlciAtPiBUaGUgaW5zdGFsbGluZyBzZXJ2aWNlIHdvcmtlciBiZWNhbWUgcmVkdW5kYW50LlwiKTtcclxuICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICB9O1xyXG4gICAgICAvLyBSZWdpc3RyYXRpb24gd2FzIHN1Y2Nlc3NmdWxcclxuICAgICAgY29uc29sZS5sb2coXCJTZXJ2aWNlV29ya2VyIHJlZ2lzdHJhdGlvbiBzdWNjZXNzZnVsIHdpdGggc2NvcGU6IFwiLCByZWdpc3RyYXRpb24uc2NvcGUpO1xyXG4gICAgfSkuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAvLyByZWdpc3RyYXRpb24gZmFpbGVkIDooXHJcbiAgICAgIGNvbnNvbGUubG9nKFwiU2VydmljZVdvcmtlciByZWdpc3RyYXRpb24gZmFpbGVkOiBcIiwgZXJyKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbn0pKCk7XHJcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
