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
                if (sub.endpoint.startsWith("https://android.googleapis.com/gcm/send")) {
                    var registrationId = sub.endpoint.split("/").pop();
                    var registrationLabel = document.querySelector("#registrationId");
                    registrationLabel.innerText = registrationId;
                }
            });
            // initialiseState();
        }).catch(function (err) {
            // registration failed :(
            console.log("ServiceWorker registration failed: ", err);
            var registrationLabel = document.querySelector("#registrationId");
            registrationLabel.innerText = "Error: " + err;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNsaWVudC9zZXJ2aWNlLXdvcmtlci1yZWdpc3RyYXRpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0EsQ0FBQztJQUNDLFlBQVksQ0FBQztJQUViLEVBQUUsQ0FBQyxDQUFDLGVBQWUsSUFBSSxTQUFTLENBQUMsQ0FBQyxDQUFDO1FBQ2pDLFNBQVMsQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLG9CQUFvQixDQUFDLENBQUMsSUFBSSxDQUFDLFVBQUMsWUFBWTtZQUN2RSxxREFBcUQ7WUFDckQsWUFBWSxDQUFDLGFBQWEsR0FBRztnQkFDM0IsZ0VBQWdFO2dCQUNoRSx3SEFBd0g7Z0JBQ3hILElBQUksZ0JBQWdCLEdBQUcsWUFBWSxDQUFDLFVBQVUsQ0FBQztnQkFFL0MsZ0JBQWdCLENBQUMsYUFBYSxHQUFHO29CQUMvQixNQUFNLENBQUMsQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO3dCQUMvQixLQUFLLFdBQVc7NEJBQ2QsRUFBRSxDQUFDLENBQUMsU0FBUyxDQUFDLGFBQWEsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO2dDQUN2QyxPQUFPLENBQUMsR0FBRyxDQUFDLHVEQUF1RCxDQUFDLENBQUM7NEJBQ3ZFLENBQUM7NEJBQUMsSUFBSSxDQUFDLENBQUM7Z0NBQ04sT0FBTyxDQUFDLEdBQUcsQ0FBQyxvREFBb0QsQ0FBQyxDQUFDOzRCQUNwRSxDQUFDOzRCQUNELEtBQUssQ0FBQzt3QkFDUixLQUFLLFdBQVc7NEJBQ2QsT0FBTyxDQUFDLEtBQUssQ0FBQyxrRUFBa0UsQ0FBQyxDQUFDOzRCQUNsRixLQUFLLENBQUM7b0JBQ1YsQ0FBQztnQkFDSCxDQUFDLENBQUM7WUFDSixDQUFDLENBQUM7WUFDRiw4QkFBOEI7WUFDOUIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxvREFBb0QsRUFBRSxZQUFZLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDdEYsMkJBQTJCLEVBQUUsQ0FBQztZQUU5QixZQUFZLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FDaEM7Z0JBQ0UsZUFBZSxFQUFFLElBQUk7YUFDdEIsQ0FBQztpQkFDRCxJQUFJLENBQUMsVUFBVSxHQUFHO2dCQUNqQixPQUFPLENBQUMsR0FBRyxDQUFDLDBDQUEwQyxFQUFFLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQztnQkFDdEUsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMseUNBQXlDLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBQ3ZFLElBQUksY0FBYyxHQUFHLEdBQUcsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDO29CQUNuRCxJQUFJLGlCQUFpQixHQUFxQixRQUFRLENBQUMsYUFBYSxDQUFDLGlCQUFpQixDQUFDLENBQUM7b0JBQ3BGLGlCQUFpQixDQUFDLFNBQVMsR0FBRyxjQUFjLENBQUM7Z0JBQy9DLENBQUM7WUFDSCxDQUFDLENBQUMsQ0FBQztZQUNMLHFCQUFxQjtRQUN2QixDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsVUFBQyxHQUFHO1lBQ1gseUJBQXlCO1lBQ3pCLE9BQU8sQ0FBQyxHQUFHLENBQUMscUNBQXFDLEVBQUUsR0FBRyxDQUFDLENBQUM7WUFDeEQsSUFBSSxpQkFBaUIsR0FBcUIsUUFBUSxDQUFDLGFBQWEsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO1lBQ3BGLGlCQUFpQixDQUFDLFNBQVMsR0FBRyxTQUFTLEdBQUcsR0FBRyxDQUFDO1FBQ2hELENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELGdFQUFnRTtJQUNoRTtRQUNFLHVEQUF1RDtRQUN2RCxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsa0JBQWtCLElBQUkseUJBQXlCLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ2pFLE9BQU8sQ0FBQyxJQUFJLENBQUMsa0NBQWtDLENBQUMsQ0FBQztZQUNqRCxNQUFNLENBQUM7UUFDVCxDQUFDO1FBRUQsK0NBQStDO1FBQy9DLG9EQUFvRDtRQUNwRCxnQ0FBZ0M7UUFDaEMsRUFBRSxDQUFDLENBQUMsWUFBWSxDQUFDLFVBQVUsS0FBSyxRQUFRLENBQUMsQ0FBQyxDQUFDO1lBQ3pDLE9BQU8sQ0FBQyxJQUFJLENBQUMscUNBQXFDLENBQUMsQ0FBQztZQUNwRCxNQUFNLENBQUM7UUFDVCxDQUFDO1FBRUQseUNBQXlDO1FBQ3pDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxhQUFhLElBQUksTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQy9CLE9BQU8sQ0FBQyxJQUFJLENBQUMsa0NBQWtDLENBQUMsQ0FBQztZQUNqRCxNQUFNLENBQUM7UUFDVCxDQUFDO1FBRUQsSUFBSSxlQUFlLEdBQXFCLFFBQVEsQ0FBQyxhQUFhLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDN0UsZUFBZSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7SUFDakMsQ0FBQztBQUVILENBQUMsQ0FBQyxFQUFFLENBQUMiLCJmaWxlIjoiY2xpZW50L3NlcnZpY2Utd29ya2VyLXJlZ2lzdHJhdGlvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImRlY2xhcmUgbGV0IFNlcnZpY2VXb3JrZXJSZWdpc3RyYXRpb247XHJcbmRlY2xhcmUgbGV0IE5vdGlmaWNhdGlvbjtcclxuXHJcbihmdW5jdGlvbiAoKSB7XHJcbiAgXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG4gIGlmIChcInNlcnZpY2VXb3JrZXJcIiBpbiBuYXZpZ2F0b3IpIHtcclxuICAgIG5hdmlnYXRvci5zZXJ2aWNlV29ya2VyLnJlZ2lzdGVyKFwiL3NlcnZpY2Utd29ya2VyLmpzXCIpLnRoZW4oKHJlZ2lzdHJhdGlvbikgPT4ge1xyXG4gICAgICAvLyB1cGRhdGVmb3VuZCBpcyBmaXJlZCBpZiBzZXJ2aWNlLXdvcmtlci5qcyBjaGFuZ2VzLlxyXG4gICAgICByZWdpc3RyYXRpb24ub251cGRhdGVmb3VuZCA9ICgpID0+IHtcclxuICAgICAgICAvLyBUaGUgdXBkYXRlZm91bmQgZXZlbnQgaW1wbGllcyB0aGF0IHJlZy5pbnN0YWxsaW5nIGlzIHNldDsgc2VlXHJcbiAgICAgICAgLy8gaHR0cHM6Ly9zbGlnaHRseW9mZi5naXRodWIuaW8vU2VydmljZVdvcmtlci9zcGVjL3NlcnZpY2Vfd29ya2VyL2luZGV4Lmh0bWwjc2VydmljZS13b3JrZXItY29udGFpbmVyLXVwZGF0ZWZvdW5kLWV2ZW50XHJcbiAgICAgICAgbGV0IGluc3RhbGxpbmdXb3JrZXIgPSByZWdpc3RyYXRpb24uaW5zdGFsbGluZztcclxuXHJcbiAgICAgICAgaW5zdGFsbGluZ1dvcmtlci5vbnN0YXRlY2hhbmdlID0gKCkgPT4ge1xyXG4gICAgICAgICAgc3dpdGNoIChpbnN0YWxsaW5nV29ya2VyLnN0YXRlKSB7XHJcbiAgICAgICAgICAgIGNhc2UgXCJpbnN0YWxsZWRcIjpcclxuICAgICAgICAgICAgICBpZiAobmF2aWdhdG9yLnNlcnZpY2VXb3JrZXIuY29udHJvbGxlcikge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJTZXJ2aWNlV29ya2VyIC0+IE5ldyBvciB1cGRhdGVkIGNvbnRlbnQgaXMgYXZhaWxhYmxlLlwiKTtcclxuICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJTZXJ2aWNlV29ya2VyIC0+IENvbnRlbnQgaXMgbm93IGF2YWlsYWJsZSBvZmZsaW5lIVwiKTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJyZWR1bmRhbnRcIjpcclxuICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiU2VydmljZVdvcmtlciAtPiBUaGUgaW5zdGFsbGluZyBzZXJ2aWNlIHdvcmtlciBiZWNhbWUgcmVkdW5kYW50LlwiKTtcclxuICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICB9O1xyXG4gICAgICAvLyBSZWdpc3RyYXRpb24gd2FzIHN1Y2Nlc3NmdWxcclxuICAgICAgY29uc29sZS5sb2coXCJTZXJ2aWNlV29ya2VyIHJlZ2lzdHJhdGlvbiBzdWNjZXNzZnVsIHdpdGggc2NvcGU6IFwiLCByZWdpc3RyYXRpb24uc2NvcGUpO1xyXG4gICAgICBpbml0aWFsaXplTm90aWZpY2F0aW9uU3RhdGUoKTtcclxuXHJcbiAgICAgIHJlZ2lzdHJhdGlvbi5wdXNoTWFuYWdlci5zdWJzY3JpYmUoXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgdXNlclZpc2libGVPbmx5OiB0cnVlLFxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLnRoZW4oZnVuY3Rpb24gKHN1Yikge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coXCJTZXJ2aWNlV29ya2VyIC0+IFN1YnNjcmlwdGlvbiBlbmRwb2ludDogXCIsIHN1Yi5lbmRwb2ludCk7XHJcbiAgICAgICAgICBpZiAoc3ViLmVuZHBvaW50LnN0YXJ0c1dpdGgoXCJodHRwczovL2FuZHJvaWQuZ29vZ2xlYXBpcy5jb20vZ2NtL3NlbmRcIikpIHtcclxuICAgICAgICAgICAgbGV0IHJlZ2lzdHJhdGlvbklkID0gc3ViLmVuZHBvaW50LnNwbGl0KFwiL1wiKS5wb3AoKTtcclxuICAgICAgICAgICAgbGV0IHJlZ2lzdHJhdGlvbkxhYmVsID0gPEhUTUxJbnB1dEVsZW1lbnQ+ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNyZWdpc3RyYXRpb25JZFwiKTtcclxuICAgICAgICAgICAgcmVnaXN0cmF0aW9uTGFiZWwuaW5uZXJUZXh0ID0gcmVnaXN0cmF0aW9uSWQ7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIC8vIGluaXRpYWxpc2VTdGF0ZSgpO1xyXG4gICAgfSkuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAvLyByZWdpc3RyYXRpb24gZmFpbGVkIDooXHJcbiAgICAgIGNvbnNvbGUubG9nKFwiU2VydmljZVdvcmtlciByZWdpc3RyYXRpb24gZmFpbGVkOiBcIiwgZXJyKTtcclxuICAgICAgbGV0IHJlZ2lzdHJhdGlvbkxhYmVsID0gPEhUTUxJbnB1dEVsZW1lbnQ+ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNyZWdpc3RyYXRpb25JZFwiKTtcclxuICAgICAgcmVnaXN0cmF0aW9uTGFiZWwuaW5uZXJUZXh0ID0gXCJFcnJvcjogXCIgKyBlcnI7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIC8vIE9uY2UgdGhlIHNlcnZpY2Ugd29ya2VyIGlzIHJlZ2lzdGVyZWQgc2V0IHRoZSBpbml0aWFsIHN0YXRlICBcclxuICBmdW5jdGlvbiBpbml0aWFsaXplTm90aWZpY2F0aW9uU3RhdGUoKSB7XHJcbiAgICAvLyBBcmUgTm90aWZpY2F0aW9ucyBzdXBwb3J0ZWQgaW4gdGhlIHNlcnZpY2Ugd29ya2VyPyAgXHJcbiAgICBpZiAoIShcInNob3dOb3RpZmljYXRpb25cIiBpbiBTZXJ2aWNlV29ya2VyUmVnaXN0cmF0aW9uLnByb3RvdHlwZSkpIHtcclxuICAgICAgY29uc29sZS53YXJuKFwiTm90aWZpY2F0aW9ucyBhcmVuXFxcInQgc3VwcG9ydGVkLlwiKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIENoZWNrIHRoZSBjdXJyZW50IE5vdGlmaWNhdGlvbiBwZXJtaXNzaW9uLiAgXHJcbiAgICAvLyBJZiBpdHMgZGVuaWVkLCBpdCdzIGEgcGVybWFuZW50IGJsb2NrIHVudGlsIHRoZSAgXHJcbiAgICAvLyB1c2VyIGNoYW5nZXMgdGhlIHBlcm1pc3Npb24gIFxyXG4gICAgaWYgKE5vdGlmaWNhdGlvbi5wZXJtaXNzaW9uID09PSBcImRlbmllZFwiKSB7XHJcbiAgICAgIGNvbnNvbGUud2FybihcIlRoZSB1c2VyIGhhcyBibG9ja2VkIG5vdGlmaWNhdGlvbnMuXCIpO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgLy8gQ2hlY2sgaWYgcHVzaCBtZXNzYWdpbmcgaXMgc3VwcG9ydGVkICBcclxuICAgIGlmICghKFwiUHVzaE1hbmFnZXJcIiBpbiB3aW5kb3cpKSB7XHJcbiAgICAgIGNvbnNvbGUud2FybihcIlB1c2ggbWVzc2FnaW5nIGlzblxcJ3Qgc3VwcG9ydGVkLlwiKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGxldCBzdWJzY3JpYmVCdXR0b24gPSA8SFRNTElucHV0RWxlbWVudD5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3N1YnNjcmliZVwiKTtcclxuICAgIHN1YnNjcmliZUJ1dHRvbi5jaGVja2VkID0gdHJ1ZTtcclxuICB9XHJcblxyXG59KSgpO1xyXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
