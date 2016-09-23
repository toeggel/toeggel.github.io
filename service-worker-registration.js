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
            console.log("ServiceWorker registration successful with scope:", registration.scope);
            navigator.serviceWorker.ready.then(function (reg) {
                reg.pushManager.subscribe({
                    userVisibleOnly: true,
                })
                    .then(function (sub) {
                    $(document).ready(function () {
                        document.querySelector("#subscribe").checked = arePushNotificationsPossible();
                        var endpoint = sub.endpoint;
                        console.log("ServiceWorker -> Subscription endpoint:", endpoint);
                        var base = endpoint.substring(0, endpoint.lastIndexOf("/") + 1);
                        var registrationId = endpoint.substring(endpoint.lastIndexOf("/") + 1, endpoint.length);
                        document.querySelector("#endpoint").innerText = base;
                        document.querySelector("#registrationId").innerText = registrationId;
                    });
                }).catch(function (err) {
                    console.log("ServiceWorker faild to subscribe for push notifications:", err);
                    document.querySelector("#registrationId").innerText = "Error:" + err;
                });
            });
        }).catch(function (err) {
            console.log("ServiceWorker registration failed:", err);
        });
    }
    // Once the service worker is registered set the initial state  
    function arePushNotificationsPossible() {
        // Are Notifications supported in the service worker?  
        if (!("showNotification" in ServiceWorkerRegistration.prototype)) {
            console.warn("Notifications aren\"t supported.");
            return false;
        }
        // Check the current Notification permission.  
        // If its denied, it's a permanent block until the  
        // user changes the permission  
        if (Notification.permission === "denied") {
            console.warn("The user has blocked notifications.");
            return false;
        }
        // Check if push messaging is supported  
        if (!("PushManager" in window)) {
            console.warn("Push messaging isn\'t supported.");
            return false;
        }
        return true;
    }
})();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNsaWVudC9zZXJ2aWNlLXdvcmtlci1yZWdpc3RyYXRpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsQ0FBQztJQUNDLFlBQVksQ0FBQztJQUViLEVBQUUsQ0FBQyxDQUFDLGVBQWUsSUFBSSxTQUFTLENBQUMsQ0FBQyxDQUFDO1FBQ2pDLFNBQVMsQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLG9CQUFvQixDQUFDLENBQUMsSUFBSSxDQUFDLFVBQUMsWUFBWTtZQUN2RSxxREFBcUQ7WUFDckQsWUFBWSxDQUFDLGFBQWEsR0FBRztnQkFDM0IsZ0VBQWdFO2dCQUNoRSx3SEFBd0g7Z0JBQ3hILElBQUksZ0JBQWdCLEdBQUcsWUFBWSxDQUFDLFVBQVUsQ0FBQztnQkFDL0MsZ0JBQWdCLENBQUMsYUFBYSxHQUFHO29CQUMvQixNQUFNLENBQUMsQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO3dCQUMvQixLQUFLLFdBQVc7NEJBQ2QsRUFBRSxDQUFDLENBQUMsU0FBUyxDQUFDLGFBQWEsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO2dDQUN2QyxPQUFPLENBQUMsR0FBRyxDQUFDLHVEQUF1RCxDQUFDLENBQUM7NEJBQ3ZFLENBQUM7NEJBQUMsSUFBSSxDQUFDLENBQUM7Z0NBQ04sT0FBTyxDQUFDLEdBQUcsQ0FBQyxvREFBb0QsQ0FBQyxDQUFDOzRCQUNwRSxDQUFDOzRCQUNELEtBQUssQ0FBQzt3QkFDUixLQUFLLFdBQVc7NEJBQ2QsT0FBTyxDQUFDLEtBQUssQ0FBQyxrRUFBa0UsQ0FBQyxDQUFDOzRCQUNsRixLQUFLLENBQUM7b0JBQ1YsQ0FBQztnQkFDSCxDQUFDLENBQUM7WUFDSixDQUFDLENBQUM7WUFDRiw4QkFBOEI7WUFDOUIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxtREFBbUQsRUFBRSxZQUFZLENBQUMsS0FBSyxDQUFDLENBQUM7WUFFckYsU0FBUyxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFVBQUMsR0FBRztnQkFDckMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQ3ZCO29CQUNFLGVBQWUsRUFBRSxJQUFJO2lCQUN0QixDQUFDO3FCQUNELElBQUksQ0FBQyxVQUFDLEdBQUc7b0JBQ1IsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLEtBQUssQ0FBQzt3QkFDRyxRQUFRLENBQUMsYUFBYSxDQUFDLFlBQVksQ0FBRSxDQUFDLE9BQU8sR0FBRyw0QkFBNEIsRUFBRSxDQUFDO3dCQUVsRyxJQUFJLFFBQVEsR0FBRyxHQUFHLENBQUMsUUFBUSxDQUFDO3dCQUM1QixPQUFPLENBQUMsR0FBRyxDQUFDLHlDQUF5QyxFQUFFLFFBQVEsQ0FBQyxDQUFDO3dCQUNqRSxJQUFJLElBQUksR0FBRyxRQUFRLENBQUMsU0FBUyxDQUFDLENBQUMsRUFBRSxRQUFRLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO3dCQUNoRSxJQUFJLGNBQWMsR0FBRyxRQUFRLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxFQUFFLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQzt3QkFDckUsUUFBUSxDQUFDLGFBQWEsQ0FBQyxXQUFXLENBQUUsQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO3dCQUN0RCxRQUFRLENBQUMsYUFBYSxDQUFDLGlCQUFpQixDQUFFLENBQUMsU0FBUyxHQUFHLGNBQWMsQ0FBQztvQkFDM0YsQ0FBQyxDQUFDLENBQUM7Z0JBQ0wsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLFVBQUMsR0FBRztvQkFDWCxPQUFPLENBQUMsR0FBRyxDQUFDLDBEQUEwRCxFQUFFLEdBQUcsQ0FBQyxDQUFDO29CQUMxRCxRQUFRLENBQUMsYUFBYSxDQUFDLGlCQUFpQixDQUFFLENBQUMsU0FBUyxHQUFHLFFBQVEsR0FBRyxHQUFHLENBQUM7Z0JBQzNGLENBQUMsQ0FBQyxDQUFDO1lBQ1AsQ0FBQyxDQUFDLENBQUM7UUFDTCxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsVUFBQyxHQUFHO1lBQ1gsT0FBTyxDQUFDLEdBQUcsQ0FBQyxvQ0FBb0MsRUFBRSxHQUFHLENBQUMsQ0FBQztRQUN6RCxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCxnRUFBZ0U7SUFDaEU7UUFDRSx1REFBdUQ7UUFDdkQsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLGtCQUFrQixJQUFJLHlCQUF5QixDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNqRSxPQUFPLENBQUMsSUFBSSxDQUFDLGtDQUFrQyxDQUFDLENBQUM7WUFDakQsTUFBTSxDQUFDLEtBQUssQ0FBQztRQUNmLENBQUM7UUFFRCwrQ0FBK0M7UUFDL0Msb0RBQW9EO1FBQ3BELGdDQUFnQztRQUNoQyxFQUFFLENBQUMsQ0FBQyxZQUFZLENBQUMsVUFBVSxLQUFLLFFBQVEsQ0FBQyxDQUFDLENBQUM7WUFDekMsT0FBTyxDQUFDLElBQUksQ0FBQyxxQ0FBcUMsQ0FBQyxDQUFDO1lBQ3BELE1BQU0sQ0FBQyxLQUFLLENBQUM7UUFDZixDQUFDO1FBRUQseUNBQXlDO1FBQ3pDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxhQUFhLElBQUksTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQy9CLE9BQU8sQ0FBQyxJQUFJLENBQUMsa0NBQWtDLENBQUMsQ0FBQztZQUNqRCxNQUFNLENBQUMsS0FBSyxDQUFDO1FBQ2YsQ0FBQztRQUVELE1BQU0sQ0FBQyxJQUFJLENBQUM7SUFDZCxDQUFDO0FBRUgsQ0FBQyxDQUFDLEVBQUUsQ0FBQyIsImZpbGUiOiJjbGllbnQvc2VydmljZS13b3JrZXItcmVnaXN0cmF0aW9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uICgpIHtcclxuICBcInVzZSBzdHJpY3RcIjtcclxuXHJcbiAgaWYgKFwic2VydmljZVdvcmtlclwiIGluIG5hdmlnYXRvcikge1xyXG4gICAgbmF2aWdhdG9yLnNlcnZpY2VXb3JrZXIucmVnaXN0ZXIoXCIvc2VydmljZS13b3JrZXIuanNcIikudGhlbigocmVnaXN0cmF0aW9uKSA9PiB7XHJcbiAgICAgIC8vIHVwZGF0ZWZvdW5kIGlzIGZpcmVkIGlmIHNlcnZpY2Utd29ya2VyLmpzIGNoYW5nZXMuXHJcbiAgICAgIHJlZ2lzdHJhdGlvbi5vbnVwZGF0ZWZvdW5kID0gKCkgPT4ge1xyXG4gICAgICAgIC8vIFRoZSB1cGRhdGVmb3VuZCBldmVudCBpbXBsaWVzIHRoYXQgcmVnLmluc3RhbGxpbmcgaXMgc2V0OyBzZWVcclxuICAgICAgICAvLyBodHRwczovL3NsaWdodGx5b2ZmLmdpdGh1Yi5pby9TZXJ2aWNlV29ya2VyL3NwZWMvc2VydmljZV93b3JrZXIvaW5kZXguaHRtbCNzZXJ2aWNlLXdvcmtlci1jb250YWluZXItdXBkYXRlZm91bmQtZXZlbnRcclxuICAgICAgICBsZXQgaW5zdGFsbGluZ1dvcmtlciA9IHJlZ2lzdHJhdGlvbi5pbnN0YWxsaW5nO1xyXG4gICAgICAgIGluc3RhbGxpbmdXb3JrZXIub25zdGF0ZWNoYW5nZSA9ICgpID0+IHtcclxuICAgICAgICAgIHN3aXRjaCAoaW5zdGFsbGluZ1dvcmtlci5zdGF0ZSkge1xyXG4gICAgICAgICAgICBjYXNlIFwiaW5zdGFsbGVkXCI6XHJcbiAgICAgICAgICAgICAgaWYgKG5hdmlnYXRvci5zZXJ2aWNlV29ya2VyLmNvbnRyb2xsZXIpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiU2VydmljZVdvcmtlciAtPiBOZXcgb3IgdXBkYXRlZCBjb250ZW50IGlzIGF2YWlsYWJsZS5cIik7XHJcbiAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiU2VydmljZVdvcmtlciAtPiBDb250ZW50IGlzIG5vdyBhdmFpbGFibGUgb2ZmbGluZSFcIik7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwicmVkdW5kYW50XCI6XHJcbiAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIlNlcnZpY2VXb3JrZXIgLT4gVGhlIGluc3RhbGxpbmcgc2VydmljZSB3b3JrZXIgYmVjYW1lIHJlZHVuZGFudC5cIik7XHJcbiAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgfTtcclxuICAgICAgLy8gUmVnaXN0cmF0aW9uIHdhcyBzdWNjZXNzZnVsXHJcbiAgICAgIGNvbnNvbGUubG9nKFwiU2VydmljZVdvcmtlciByZWdpc3RyYXRpb24gc3VjY2Vzc2Z1bCB3aXRoIHNjb3BlOlwiLCByZWdpc3RyYXRpb24uc2NvcGUpO1xyXG5cclxuICAgICAgbmF2aWdhdG9yLnNlcnZpY2VXb3JrZXIucmVhZHkudGhlbigocmVnKSA9PiB7XHJcbiAgICAgICAgcmVnLnB1c2hNYW5hZ2VyLnN1YnNjcmliZShcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgdXNlclZpc2libGVPbmx5OiB0cnVlLFxyXG4gICAgICAgICAgfSlcclxuICAgICAgICAgIC50aGVuKChzdWIpID0+IHtcclxuICAgICAgICAgICAgJChkb2N1bWVudCkucmVhZHkoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICg8SFRNTElucHV0RWxlbWVudD5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3N1YnNjcmliZVwiKSkuY2hlY2tlZCA9IGFyZVB1c2hOb3RpZmljYXRpb25zUG9zc2libGUoKTtcclxuXHJcbiAgICAgICAgICAgICAgbGV0IGVuZHBvaW50ID0gc3ViLmVuZHBvaW50O1xyXG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiU2VydmljZVdvcmtlciAtPiBTdWJzY3JpcHRpb24gZW5kcG9pbnQ6XCIsIGVuZHBvaW50KTtcclxuICAgICAgICAgICAgICBsZXQgYmFzZSA9IGVuZHBvaW50LnN1YnN0cmluZygwLCBlbmRwb2ludC5sYXN0SW5kZXhPZihcIi9cIikgKyAxKTtcclxuICAgICAgICAgICAgICBsZXQgcmVnaXN0cmF0aW9uSWQgPSBlbmRwb2ludC5zdWJzdHJpbmcoZW5kcG9pbnQubGFzdEluZGV4T2YoXCIvXCIpICsgMSwgZW5kcG9pbnQubGVuZ3RoKTtcclxuICAgICAgICAgICAgICAoPEhUTUxJbnB1dEVsZW1lbnQ+ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNlbmRwb2ludFwiKSkuaW5uZXJUZXh0ID0gYmFzZTtcclxuICAgICAgICAgICAgICAoPEhUTUxJbnB1dEVsZW1lbnQ+ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNyZWdpc3RyYXRpb25JZFwiKSkuaW5uZXJUZXh0ID0gcmVnaXN0cmF0aW9uSWQ7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgfSkuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIlNlcnZpY2VXb3JrZXIgZmFpbGQgdG8gc3Vic2NyaWJlIGZvciBwdXNoIG5vdGlmaWNhdGlvbnM6XCIsIGVycik7XHJcbiAgICAgICAgICAgICg8SFRNTElucHV0RWxlbWVudD5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3JlZ2lzdHJhdGlvbklkXCIpKS5pbm5lclRleHQgPSBcIkVycm9yOlwiICsgZXJyO1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgIH0pO1xyXG4gICAgfSkuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZyhcIlNlcnZpY2VXb3JrZXIgcmVnaXN0cmF0aW9uIGZhaWxlZDpcIiwgZXJyKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgLy8gT25jZSB0aGUgc2VydmljZSB3b3JrZXIgaXMgcmVnaXN0ZXJlZCBzZXQgdGhlIGluaXRpYWwgc3RhdGUgIFxyXG4gIGZ1bmN0aW9uIGFyZVB1c2hOb3RpZmljYXRpb25zUG9zc2libGUoKSB7XHJcbiAgICAvLyBBcmUgTm90aWZpY2F0aW9ucyBzdXBwb3J0ZWQgaW4gdGhlIHNlcnZpY2Ugd29ya2VyPyAgXHJcbiAgICBpZiAoIShcInNob3dOb3RpZmljYXRpb25cIiBpbiBTZXJ2aWNlV29ya2VyUmVnaXN0cmF0aW9uLnByb3RvdHlwZSkpIHtcclxuICAgICAgY29uc29sZS53YXJuKFwiTm90aWZpY2F0aW9ucyBhcmVuXFxcInQgc3VwcG9ydGVkLlwiKTtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIENoZWNrIHRoZSBjdXJyZW50IE5vdGlmaWNhdGlvbiBwZXJtaXNzaW9uLiAgXHJcbiAgICAvLyBJZiBpdHMgZGVuaWVkLCBpdCdzIGEgcGVybWFuZW50IGJsb2NrIHVudGlsIHRoZSAgXHJcbiAgICAvLyB1c2VyIGNoYW5nZXMgdGhlIHBlcm1pc3Npb24gIFxyXG4gICAgaWYgKE5vdGlmaWNhdGlvbi5wZXJtaXNzaW9uID09PSBcImRlbmllZFwiKSB7XHJcbiAgICAgIGNvbnNvbGUud2FybihcIlRoZSB1c2VyIGhhcyBibG9ja2VkIG5vdGlmaWNhdGlvbnMuXCIpO1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gQ2hlY2sgaWYgcHVzaCBtZXNzYWdpbmcgaXMgc3VwcG9ydGVkICBcclxuICAgIGlmICghKFwiUHVzaE1hbmFnZXJcIiBpbiB3aW5kb3cpKSB7XHJcbiAgICAgIGNvbnNvbGUud2FybihcIlB1c2ggbWVzc2FnaW5nIGlzblxcJ3Qgc3VwcG9ydGVkLlwiKTtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB0cnVlO1xyXG4gIH1cclxuXHJcbn0pKCk7XHJcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
