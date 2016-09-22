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
            initializeNotificationState();
            registration.pushManager.subscribe({
                userVisibleOnly: true,
            })
                .then(function (sub) {
                console.log("ServiceWorker -> Subscription endpoint: ", sub.endpoint);
            });
            // initialiseState();
        }).catch(function (err) {
            // registration failed :(
            console.log("ServiceWorker registration failed: ", err);
        });
    }
    // Once the service worker is registered set the initial state  
    function initializeNotificationState() {
        // Are Notifications supported in the service worker?  
        if (!("showNotification" in ServiceWorkerRegistration.prototype)) {
            console.warn("Notifications aren\"t supported.");
            return;
        }
        // Check the current Notification permission.  
        // If its denied, it's a permanent block until the  
        // user changes the permission  
        if (Notification.permission === "denied") {
            console.warn("The user has blocked notifications.");
            return;
        }
        // Check if push messaging is supported  
        if (!("PushManager" in window)) {
            console.warn("Push messaging isn\'t supported.");
            return;
        }
        var subscribeButton = document.querySelector("#subscribe");
        subscribeButton.checked = true;
    }
})();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNsaWVudC9zZXJ2aWNlLXdvcmtlci1yZWdpc3RyYXRpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0EsQ0FBQztJQUNDLFlBQVksQ0FBQztJQUViLEVBQUUsQ0FBQyxDQUFDLGVBQWUsSUFBSSxTQUFTLENBQUMsQ0FBQyxDQUFDO1FBQ2pDLFNBQVMsQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLG9CQUFvQixDQUFDLENBQUMsSUFBSSxDQUFDLFVBQUMsWUFBWTtZQUN2RSxxREFBcUQ7WUFDckQsWUFBWSxDQUFDLGFBQWEsR0FBRztnQkFDM0IsZ0VBQWdFO2dCQUNoRSx3SEFBd0g7Z0JBQ3hILElBQUksZ0JBQWdCLEdBQUcsWUFBWSxDQUFDLFVBQVUsQ0FBQztnQkFFL0MsZ0JBQWdCLENBQUMsYUFBYSxHQUFHO29CQUMvQixNQUFNLENBQUMsQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO3dCQUMvQixLQUFLLFdBQVc7NEJBQ2QsRUFBRSxDQUFDLENBQUMsU0FBUyxDQUFDLGFBQWEsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO2dDQUN2QyxPQUFPLENBQUMsR0FBRyxDQUFDLHVEQUF1RCxDQUFDLENBQUM7NEJBQ3ZFLENBQUM7NEJBQUMsSUFBSSxDQUFDLENBQUM7Z0NBQ04sT0FBTyxDQUFDLEdBQUcsQ0FBQyxvREFBb0QsQ0FBQyxDQUFDOzRCQUNwRSxDQUFDOzRCQUNELEtBQUssQ0FBQzt3QkFDUixLQUFLLFdBQVc7NEJBQ2QsT0FBTyxDQUFDLEtBQUssQ0FBQyxrRUFBa0UsQ0FBQyxDQUFDOzRCQUNsRixLQUFLLENBQUM7b0JBQ1YsQ0FBQztnQkFDSCxDQUFDLENBQUM7WUFDSixDQUFDLENBQUM7WUFDRiw4QkFBOEI7WUFDOUIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxvREFBb0QsRUFBRSxZQUFZLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDdEYsMkJBQTJCLEVBQUUsQ0FBQztZQUU5QixZQUFZLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FDaEM7Z0JBQ0UsZUFBZSxFQUFFLElBQUk7YUFDdEIsQ0FBQztpQkFDRCxJQUFJLENBQUMsVUFBVSxHQUFHO2dCQUNqQixPQUFPLENBQUMsR0FBRyxDQUFDLDBDQUEwQyxFQUFFLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUN4RSxDQUFDLENBQUMsQ0FBQztZQUNMLHFCQUFxQjtRQUN2QixDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsVUFBQyxHQUFHO1lBQ1gseUJBQXlCO1lBQ3pCLE9BQU8sQ0FBQyxHQUFHLENBQUMscUNBQXFDLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFDMUQsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsZ0VBQWdFO0lBQ2hFO1FBQ0UsdURBQXVEO1FBQ3ZELEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxrQkFBa0IsSUFBSSx5QkFBeUIsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDakUsT0FBTyxDQUFDLElBQUksQ0FBQyxrQ0FBa0MsQ0FBQyxDQUFDO1lBQ2pELE1BQU0sQ0FBQztRQUNULENBQUM7UUFFRCwrQ0FBK0M7UUFDL0Msb0RBQW9EO1FBQ3BELGdDQUFnQztRQUNoQyxFQUFFLENBQUMsQ0FBQyxZQUFZLENBQUMsVUFBVSxLQUFLLFFBQVEsQ0FBQyxDQUFDLENBQUM7WUFDekMsT0FBTyxDQUFDLElBQUksQ0FBQyxxQ0FBcUMsQ0FBQyxDQUFDO1lBQ3BELE1BQU0sQ0FBQztRQUNULENBQUM7UUFFRCx5Q0FBeUM7UUFDekMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLGFBQWEsSUFBSSxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDL0IsT0FBTyxDQUFDLElBQUksQ0FBQyxrQ0FBa0MsQ0FBQyxDQUFDO1lBQ2pELE1BQU0sQ0FBQztRQUNULENBQUM7UUFFRCxJQUFJLGVBQWUsR0FBcUIsUUFBUSxDQUFDLGFBQWEsQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUM3RSxlQUFlLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztJQUNqQyxDQUFDO0FBRUgsQ0FBQyxDQUFDLEVBQUUsQ0FBQyIsImZpbGUiOiJjbGllbnQvc2VydmljZS13b3JrZXItcmVnaXN0cmF0aW9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZGVjbGFyZSBsZXQgU2VydmljZVdvcmtlclJlZ2lzdHJhdGlvbjtcclxuZGVjbGFyZSBsZXQgTm90aWZpY2F0aW9uO1xyXG5cclxuKGZ1bmN0aW9uICgpIHtcclxuICBcInVzZSBzdHJpY3RcIjtcclxuXHJcbiAgaWYgKFwic2VydmljZVdvcmtlclwiIGluIG5hdmlnYXRvcikge1xyXG4gICAgbmF2aWdhdG9yLnNlcnZpY2VXb3JrZXIucmVnaXN0ZXIoXCIvc2VydmljZS13b3JrZXIuanNcIikudGhlbigocmVnaXN0cmF0aW9uKSA9PiB7XHJcbiAgICAgIC8vIHVwZGF0ZWZvdW5kIGlzIGZpcmVkIGlmIHNlcnZpY2Utd29ya2VyLmpzIGNoYW5nZXMuXHJcbiAgICAgIHJlZ2lzdHJhdGlvbi5vbnVwZGF0ZWZvdW5kID0gKCkgPT4ge1xyXG4gICAgICAgIC8vIFRoZSB1cGRhdGVmb3VuZCBldmVudCBpbXBsaWVzIHRoYXQgcmVnLmluc3RhbGxpbmcgaXMgc2V0OyBzZWVcclxuICAgICAgICAvLyBodHRwczovL3NsaWdodGx5b2ZmLmdpdGh1Yi5pby9TZXJ2aWNlV29ya2VyL3NwZWMvc2VydmljZV93b3JrZXIvaW5kZXguaHRtbCNzZXJ2aWNlLXdvcmtlci1jb250YWluZXItdXBkYXRlZm91bmQtZXZlbnRcclxuICAgICAgICBsZXQgaW5zdGFsbGluZ1dvcmtlciA9IHJlZ2lzdHJhdGlvbi5pbnN0YWxsaW5nO1xyXG5cclxuICAgICAgICBpbnN0YWxsaW5nV29ya2VyLm9uc3RhdGVjaGFuZ2UgPSAoKSA9PiB7XHJcbiAgICAgICAgICBzd2l0Y2ggKGluc3RhbGxpbmdXb3JrZXIuc3RhdGUpIHtcclxuICAgICAgICAgICAgY2FzZSBcImluc3RhbGxlZFwiOlxyXG4gICAgICAgICAgICAgIGlmIChuYXZpZ2F0b3Iuc2VydmljZVdvcmtlci5jb250cm9sbGVyKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIlNlcnZpY2VXb3JrZXIgLT4gTmV3IG9yIHVwZGF0ZWQgY29udGVudCBpcyBhdmFpbGFibGUuXCIpO1xyXG4gICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIlNlcnZpY2VXb3JrZXIgLT4gQ29udGVudCBpcyBub3cgYXZhaWxhYmxlIG9mZmxpbmUhXCIpO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcInJlZHVuZGFudFwiOlxyXG4gICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJTZXJ2aWNlV29ya2VyIC0+IFRoZSBpbnN0YWxsaW5nIHNlcnZpY2Ugd29ya2VyIGJlY2FtZSByZWR1bmRhbnQuXCIpO1xyXG4gICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgIH07XHJcbiAgICAgIC8vIFJlZ2lzdHJhdGlvbiB3YXMgc3VjY2Vzc2Z1bFxyXG4gICAgICBjb25zb2xlLmxvZyhcIlNlcnZpY2VXb3JrZXIgcmVnaXN0cmF0aW9uIHN1Y2Nlc3NmdWwgd2l0aCBzY29wZTogXCIsIHJlZ2lzdHJhdGlvbi5zY29wZSk7XHJcbiAgICAgIGluaXRpYWxpemVOb3RpZmljYXRpb25TdGF0ZSgpO1xyXG5cclxuICAgICAgcmVnaXN0cmF0aW9uLnB1c2hNYW5hZ2VyLnN1YnNjcmliZShcclxuICAgICAgICB7XHJcbiAgICAgICAgICB1c2VyVmlzaWJsZU9ubHk6IHRydWUsXHJcbiAgICAgICAgfSlcclxuICAgICAgICAudGhlbihmdW5jdGlvbiAoc3ViKSB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhcIlNlcnZpY2VXb3JrZXIgLT4gU3Vic2NyaXB0aW9uIGVuZHBvaW50OiBcIiwgc3ViLmVuZHBvaW50KTtcclxuICAgICAgICB9KTtcclxuICAgICAgLy8gaW5pdGlhbGlzZVN0YXRlKCk7XHJcbiAgICB9KS5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgIC8vIHJlZ2lzdHJhdGlvbiBmYWlsZWQgOihcclxuICAgICAgY29uc29sZS5sb2coXCJTZXJ2aWNlV29ya2VyIHJlZ2lzdHJhdGlvbiBmYWlsZWQ6IFwiLCBlcnIpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICAvLyBPbmNlIHRoZSBzZXJ2aWNlIHdvcmtlciBpcyByZWdpc3RlcmVkIHNldCB0aGUgaW5pdGlhbCBzdGF0ZSAgXHJcbiAgZnVuY3Rpb24gaW5pdGlhbGl6ZU5vdGlmaWNhdGlvblN0YXRlKCkge1xyXG4gICAgLy8gQXJlIE5vdGlmaWNhdGlvbnMgc3VwcG9ydGVkIGluIHRoZSBzZXJ2aWNlIHdvcmtlcj8gIFxyXG4gICAgaWYgKCEoXCJzaG93Tm90aWZpY2F0aW9uXCIgaW4gU2VydmljZVdvcmtlclJlZ2lzdHJhdGlvbi5wcm90b3R5cGUpKSB7XHJcbiAgICAgIGNvbnNvbGUud2FybihcIk5vdGlmaWNhdGlvbnMgYXJlblxcXCJ0IHN1cHBvcnRlZC5cIik7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICAvLyBDaGVjayB0aGUgY3VycmVudCBOb3RpZmljYXRpb24gcGVybWlzc2lvbi4gIFxyXG4gICAgLy8gSWYgaXRzIGRlbmllZCwgaXQncyBhIHBlcm1hbmVudCBibG9jayB1bnRpbCB0aGUgIFxyXG4gICAgLy8gdXNlciBjaGFuZ2VzIHRoZSBwZXJtaXNzaW9uICBcclxuICAgIGlmIChOb3RpZmljYXRpb24ucGVybWlzc2lvbiA9PT0gXCJkZW5pZWRcIikge1xyXG4gICAgICBjb25zb2xlLndhcm4oXCJUaGUgdXNlciBoYXMgYmxvY2tlZCBub3RpZmljYXRpb25zLlwiKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIENoZWNrIGlmIHB1c2ggbWVzc2FnaW5nIGlzIHN1cHBvcnRlZCAgXHJcbiAgICBpZiAoIShcIlB1c2hNYW5hZ2VyXCIgaW4gd2luZG93KSkge1xyXG4gICAgICBjb25zb2xlLndhcm4oXCJQdXNoIG1lc3NhZ2luZyBpc25cXCd0IHN1cHBvcnRlZC5cIik7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBsZXQgc3Vic2NyaWJlQnV0dG9uID0gPEhUTUxJbnB1dEVsZW1lbnQ+ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzdWJzY3JpYmVcIik7XHJcbiAgICBzdWJzY3JpYmVCdXR0b24uY2hlY2tlZCA9IHRydWU7XHJcbiAgfVxyXG5cclxufSkoKTtcclxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
