(function () {
    "use strict";
    // window.addEventListener('online', () => alert("online"), false);
    // window.addEventListener('offline', () => alert("offline"), false);
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
            console.log("ServiceWorker registration successful with scope:", registration.scope);
        }).catch(function (err) {
            console.log("ServiceWorker registration failed:", err);
        });
    }
})();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNsaWVudC9zZXJ2aWNlLXdvcmtlci1yZWdpc3RyYXRpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsQ0FBQztJQUNDLFlBQVksQ0FBQztJQUViLG1FQUFtRTtJQUNuRSxxRUFBcUU7SUFFckUsRUFBRSxDQUFDLENBQUMsZUFBZSxJQUFJLFNBQVMsQ0FBQyxDQUFDLENBQUM7UUFDakMsU0FBUyxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsb0JBQW9CLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQyxZQUFZO1lBQ3ZFLHFEQUFxRDtZQUNyRCxZQUFZLENBQUMsYUFBYSxHQUFHO2dCQUMzQixnRUFBZ0U7Z0JBQ2hFLHdIQUF3SDtnQkFDeEgsSUFBSSxnQkFBZ0IsR0FBRyxZQUFZLENBQUMsVUFBVSxDQUFDO2dCQUMvQyxnQkFBZ0IsQ0FBQyxhQUFhLEdBQUc7b0JBQy9CLE1BQU0sQ0FBQyxDQUFDLGdCQUFnQixDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7d0JBQy9CLEtBQUssV0FBVzs0QkFDZCxFQUFFLENBQUMsQ0FBQyxTQUFTLENBQUMsYUFBYSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7Z0NBQ3ZDLE9BQU8sQ0FBQyxHQUFHLENBQUMsdURBQXVELENBQUMsQ0FBQzs0QkFDdkUsQ0FBQzs0QkFBQyxJQUFJLENBQUMsQ0FBQztnQ0FDTixPQUFPLENBQUMsR0FBRyxDQUFDLG9EQUFvRCxDQUFDLENBQUM7NEJBQ3BFLENBQUM7NEJBQ0QsS0FBSyxDQUFDO3dCQUNSLEtBQUssV0FBVzs0QkFDZCxPQUFPLENBQUMsS0FBSyxDQUFDLGtFQUFrRSxDQUFDLENBQUM7NEJBQ2xGLEtBQUssQ0FBQztvQkFDVixDQUFDO2dCQUNILENBQUMsQ0FBQztZQUNKLENBQUMsQ0FBQztZQUNGLDhCQUE4QjtZQUM5QixPQUFPLENBQUMsR0FBRyxDQUFDLG1EQUFtRCxFQUFFLFlBQVksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUN2RixDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsVUFBQyxHQUFHO1lBQ1gsT0FBTyxDQUFDLEdBQUcsQ0FBQyxvQ0FBb0MsRUFBRSxHQUFHLENBQUMsQ0FBQztRQUN6RCxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7QUFFSCxDQUFDLENBQUMsRUFBRSxDQUFDIiwiZmlsZSI6ImNsaWVudC9zZXJ2aWNlLXdvcmtlci1yZWdpc3RyYXRpb24uanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gKCkge1xuICBcInVzZSBzdHJpY3RcIjtcblxuICAvLyB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignb25saW5lJywgKCkgPT4gYWxlcnQoXCJvbmxpbmVcIiksIGZhbHNlKTtcbiAgLy8gd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ29mZmxpbmUnLCAoKSA9PiBhbGVydChcIm9mZmxpbmVcIiksIGZhbHNlKTtcblxuICBpZiAoXCJzZXJ2aWNlV29ya2VyXCIgaW4gbmF2aWdhdG9yKSB7XG4gICAgbmF2aWdhdG9yLnNlcnZpY2VXb3JrZXIucmVnaXN0ZXIoXCIvc2VydmljZS13b3JrZXIuanNcIikudGhlbigocmVnaXN0cmF0aW9uKSA9PiB7XG4gICAgICAvLyB1cGRhdGVmb3VuZCBpcyBmaXJlZCBpZiBzZXJ2aWNlLXdvcmtlci5qcyBjaGFuZ2VzLlxuICAgICAgcmVnaXN0cmF0aW9uLm9udXBkYXRlZm91bmQgPSAoKSA9PiB7XG4gICAgICAgIC8vIFRoZSB1cGRhdGVmb3VuZCBldmVudCBpbXBsaWVzIHRoYXQgcmVnLmluc3RhbGxpbmcgaXMgc2V0OyBzZWVcbiAgICAgICAgLy8gaHR0cHM6Ly9zbGlnaHRseW9mZi5naXRodWIuaW8vU2VydmljZVdvcmtlci9zcGVjL3NlcnZpY2Vfd29ya2VyL2luZGV4Lmh0bWwjc2VydmljZS13b3JrZXItY29udGFpbmVyLXVwZGF0ZWZvdW5kLWV2ZW50XG4gICAgICAgIGxldCBpbnN0YWxsaW5nV29ya2VyID0gcmVnaXN0cmF0aW9uLmluc3RhbGxpbmc7XG4gICAgICAgIGluc3RhbGxpbmdXb3JrZXIub25zdGF0ZWNoYW5nZSA9ICgpID0+IHtcbiAgICAgICAgICBzd2l0Y2ggKGluc3RhbGxpbmdXb3JrZXIuc3RhdGUpIHtcbiAgICAgICAgICAgIGNhc2UgXCJpbnN0YWxsZWRcIjpcbiAgICAgICAgICAgICAgaWYgKG5hdmlnYXRvci5zZXJ2aWNlV29ya2VyLmNvbnRyb2xsZXIpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIlNlcnZpY2VXb3JrZXIgLT4gTmV3IG9yIHVwZGF0ZWQgY29udGVudCBpcyBhdmFpbGFibGUuXCIpO1xuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiU2VydmljZVdvcmtlciAtPiBDb250ZW50IGlzIG5vdyBhdmFpbGFibGUgb2ZmbGluZSFcIik7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwicmVkdW5kYW50XCI6XG4gICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJTZXJ2aWNlV29ya2VyIC0+IFRoZSBpbnN0YWxsaW5nIHNlcnZpY2Ugd29ya2VyIGJlY2FtZSByZWR1bmRhbnQuXCIpO1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICB9O1xuICAgICAgLy8gUmVnaXN0cmF0aW9uIHdhcyBzdWNjZXNzZnVsXG4gICAgICBjb25zb2xlLmxvZyhcIlNlcnZpY2VXb3JrZXIgcmVnaXN0cmF0aW9uIHN1Y2Nlc3NmdWwgd2l0aCBzY29wZTpcIiwgcmVnaXN0cmF0aW9uLnNjb3BlKTtcbiAgICB9KS5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICBjb25zb2xlLmxvZyhcIlNlcnZpY2VXb3JrZXIgcmVnaXN0cmF0aW9uIGZhaWxlZDpcIiwgZXJyKTtcbiAgICB9KTtcbiAgfVxuXG59KSgpO1xuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
