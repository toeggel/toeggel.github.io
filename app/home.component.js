"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var message_service_1 = require("./services/message.service");
var HomeComponent = (function () {
    function HomeComponent(messageService) {
        this.messageService = messageService;
        this.messages = [];
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        navigator.serviceWorker.ready.then(function (reg) {
            reg.pushManager.subscribe({
                userVisibleOnly: true,
            })
                .then(function (sub) {
                document.querySelector("#subscribe").checked = _this.arePushNotificationsPossible();
                var endpoint = sub.endpoint;
                console.log("Subscription endpoint:", endpoint);
                var base = endpoint.substring(0, endpoint.lastIndexOf("/") + 1);
                var registrationId = endpoint.substring(endpoint.lastIndexOf("/") + 1, endpoint.length);
                document.querySelector("#endpoint").innerText = base;
                document.querySelector("#registrationId").innerText = registrationId;
            }).catch(function (err) {
                console.log("Failed to check push notification availability:", err);
                document.querySelector("#registrationId").innerText = "Error:" + err;
            });
        });
        this.messageService.getMessages()
            .then(function (messages) {
            _this.messages = messages;
        })
            .catch(function (reason) {
            console.log("error while loading messages: " + reason);
        });
    };
    // Once the service worker is registered set the initial state  
    HomeComponent.prototype.arePushNotificationsPossible = function () {
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
    };
    HomeComponent = __decorate([
        core_1.Component({
            selector: "my-home",
            templateUrl: "./app/home.component.html",
        }), 
        __metadata('design:paramtypes', [message_service_1.MessageService])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNsaWVudC9hcHAvaG9tZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUFrQyxlQUFlLENBQUMsQ0FBQTtBQUNsRCxnQ0FBK0IsNEJBQTRCLENBQUMsQ0FBQTtBQU81RDtJQUlFLHVCQUFvQixjQUE4QjtRQUE5QixtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFGM0MsYUFBUSxHQUFjLEVBQUUsQ0FBQztJQUVzQixDQUFDO0lBRWhELGdDQUFRLEdBQWY7UUFBQSxpQkE2QkM7UUE1QkMsU0FBUyxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFVBQUMsR0FBRztZQUNyQyxHQUFHLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FDdkI7Z0JBQ0UsZUFBZSxFQUFFLElBQUk7YUFDdEIsQ0FBQztpQkFDRCxJQUFJLENBQUMsVUFBQyxHQUFHO2dCQUNXLFFBQVEsQ0FBQyxhQUFhLENBQUMsWUFBWSxDQUFFLENBQUMsT0FBTyxHQUFHLEtBQUksQ0FBQyw0QkFBNEIsRUFBRSxDQUFDO2dCQUV2RyxJQUFJLFFBQVEsR0FBRyxHQUFHLENBQUMsUUFBUSxDQUFDO2dCQUM1QixPQUFPLENBQUMsR0FBRyxDQUFDLHdCQUF3QixFQUFFLFFBQVEsQ0FBQyxDQUFDO2dCQUNoRCxJQUFJLElBQUksR0FBRyxRQUFRLENBQUMsU0FBUyxDQUFDLENBQUMsRUFBRSxRQUFRLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO2dCQUNoRSxJQUFJLGNBQWMsR0FBRyxRQUFRLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxFQUFFLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQztnQkFDckUsUUFBUSxDQUFDLGFBQWEsQ0FBQyxXQUFXLENBQUUsQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO2dCQUN0RCxRQUFRLENBQUMsYUFBYSxDQUFDLGlCQUFpQixDQUFFLENBQUMsU0FBUyxHQUFHLGNBQWMsQ0FBQztZQUMzRixDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsVUFBQyxHQUFHO2dCQUNYLE9BQU8sQ0FBQyxHQUFHLENBQUMsaURBQWlELEVBQUUsR0FBRyxDQUFDLENBQUM7Z0JBQ2pELFFBQVEsQ0FBQyxhQUFhLENBQUMsaUJBQWlCLENBQUUsQ0FBQyxTQUFTLEdBQUcsUUFBUSxHQUFHLEdBQUcsQ0FBQztZQUMzRixDQUFDLENBQUMsQ0FBQztRQUNQLENBQUMsQ0FBQyxDQUFDO1FBRUgsSUFBSSxDQUFDLGNBQWMsQ0FBQyxXQUFXLEVBQUU7YUFDaEMsSUFBSSxDQUFDLFVBQUEsUUFBUTtZQUNOLEtBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO1FBQzdCLENBQUMsQ0FDSjthQUNBLEtBQUssQ0FBQyxVQUFBLE1BQU07WUFDVCxPQUFPLENBQUMsR0FBRyxDQUFDLG1DQUFpQyxNQUFRLENBQUMsQ0FBQztRQUMzRCxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCxnRUFBZ0U7SUFDeEQsb0RBQTRCLEdBQXBDO1FBQ0UsdURBQXVEO1FBQ3ZELEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxrQkFBa0IsSUFBSSx5QkFBeUIsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDakUsT0FBTyxDQUFDLElBQUksQ0FBQyxrQ0FBa0MsQ0FBQyxDQUFDO1lBQ2pELE1BQU0sQ0FBQyxLQUFLLENBQUM7UUFDZixDQUFDO1FBRUQsK0NBQStDO1FBQy9DLG9EQUFvRDtRQUNwRCxnQ0FBZ0M7UUFDaEMsRUFBRSxDQUFDLENBQUMsWUFBWSxDQUFDLFVBQVUsS0FBSyxRQUFRLENBQUMsQ0FBQyxDQUFDO1lBQ3pDLE9BQU8sQ0FBQyxJQUFJLENBQUMscUNBQXFDLENBQUMsQ0FBQztZQUNwRCxNQUFNLENBQUMsS0FBSyxDQUFDO1FBQ2YsQ0FBQztRQUVELHlDQUF5QztRQUN6QyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsYUFBYSxJQUFJLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUMvQixPQUFPLENBQUMsSUFBSSxDQUFDLGtDQUFrQyxDQUFDLENBQUM7WUFDakQsTUFBTSxDQUFDLEtBQUssQ0FBQztRQUNmLENBQUM7UUFFRCxNQUFNLENBQUMsSUFBSSxDQUFDO0lBQ2QsQ0FBQztJQWhFSDtRQUFDLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsU0FBUztZQUNuQixXQUFXLEVBQUUsMkJBQTJCO1NBQ3pDLENBQUM7O3FCQUFBO0lBK0RGLG9CQUFDO0FBQUQsQ0E5REEsQUE4REMsSUFBQTtBQTlEWSxxQkFBYSxnQkE4RHpCLENBQUEiLCJmaWxlIjoiY2xpZW50L2FwcC9ob21lLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IE1lc3NhZ2VTZXJ2aWNlIH0gZnJvbSBcIi4vc2VydmljZXMvbWVzc2FnZS5zZXJ2aWNlXCI7XG5pbXBvcnQgeyBNZXNzYWdlIH0gZnJvbSBcIi4vZHRvcy9tZXNzYWdlXCI7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogXCJteS1ob21lXCIsXG4gIHRlbXBsYXRlVXJsOiBcIi4vYXBwL2hvbWUuY29tcG9uZW50Lmh0bWxcIixcbn0pXG5leHBvcnQgY2xhc3MgSG9tZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgcHVibGljIG1lc3NhZ2VzOiBNZXNzYWdlW10gPSBbXTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIG1lc3NhZ2VTZXJ2aWNlOiBNZXNzYWdlU2VydmljZSkgeyB9XG5cbiAgcHVibGljIG5nT25Jbml0KCkge1xuICAgIG5hdmlnYXRvci5zZXJ2aWNlV29ya2VyLnJlYWR5LnRoZW4oKHJlZykgPT4ge1xuICAgICAgcmVnLnB1c2hNYW5hZ2VyLnN1YnNjcmliZShcbiAgICAgICAge1xuICAgICAgICAgIHVzZXJWaXNpYmxlT25seTogdHJ1ZSxcbiAgICAgICAgfSlcbiAgICAgICAgLnRoZW4oKHN1YikgPT4ge1xuICAgICAgICAgICg8SFRNTElucHV0RWxlbWVudD5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3N1YnNjcmliZVwiKSkuY2hlY2tlZCA9IHRoaXMuYXJlUHVzaE5vdGlmaWNhdGlvbnNQb3NzaWJsZSgpO1xuXG4gICAgICAgICAgbGV0IGVuZHBvaW50ID0gc3ViLmVuZHBvaW50O1xuICAgICAgICAgIGNvbnNvbGUubG9nKFwiU3Vic2NyaXB0aW9uIGVuZHBvaW50OlwiLCBlbmRwb2ludCk7XG4gICAgICAgICAgbGV0IGJhc2UgPSBlbmRwb2ludC5zdWJzdHJpbmcoMCwgZW5kcG9pbnQubGFzdEluZGV4T2YoXCIvXCIpICsgMSk7XG4gICAgICAgICAgbGV0IHJlZ2lzdHJhdGlvbklkID0gZW5kcG9pbnQuc3Vic3RyaW5nKGVuZHBvaW50Lmxhc3RJbmRleE9mKFwiL1wiKSArIDEsIGVuZHBvaW50Lmxlbmd0aCk7XG4gICAgICAgICAgKDxIVE1MSW5wdXRFbGVtZW50PmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZW5kcG9pbnRcIikpLmlubmVyVGV4dCA9IGJhc2U7XG4gICAgICAgICAgKDxIVE1MSW5wdXRFbGVtZW50PmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcmVnaXN0cmF0aW9uSWRcIikpLmlubmVyVGV4dCA9IHJlZ2lzdHJhdGlvbklkO1xuICAgICAgICB9KS5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgICAgY29uc29sZS5sb2coXCJGYWlsZWQgdG8gY2hlY2sgcHVzaCBub3RpZmljYXRpb24gYXZhaWxhYmlsaXR5OlwiLCBlcnIpO1xuICAgICAgICAgICg8SFRNTElucHV0RWxlbWVudD5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3JlZ2lzdHJhdGlvbklkXCIpKS5pbm5lclRleHQgPSBcIkVycm9yOlwiICsgZXJyO1xuICAgICAgICB9KTtcbiAgICB9KTtcblxuICAgIHRoaXMubWVzc2FnZVNlcnZpY2UuZ2V0TWVzc2FnZXMoKVxuICAgIC50aGVuKG1lc3NhZ2VzID0+IHtcbiAgICAgICAgICAgIHRoaXMubWVzc2FnZXMgPSBtZXNzYWdlcztcbiAgICAgICAgfVxuICAgIClcbiAgICAuY2F0Y2gocmVhc29uID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coYGVycm9yIHdoaWxlIGxvYWRpbmcgbWVzc2FnZXM6ICR7cmVhc29ufWApO1xuICAgIH0pO1xuICB9XG5cbiAgLy8gT25jZSB0aGUgc2VydmljZSB3b3JrZXIgaXMgcmVnaXN0ZXJlZCBzZXQgdGhlIGluaXRpYWwgc3RhdGUgIFxuICBwcml2YXRlIGFyZVB1c2hOb3RpZmljYXRpb25zUG9zc2libGUoKSB7XG4gICAgLy8gQXJlIE5vdGlmaWNhdGlvbnMgc3VwcG9ydGVkIGluIHRoZSBzZXJ2aWNlIHdvcmtlcj8gIFxuICAgIGlmICghKFwic2hvd05vdGlmaWNhdGlvblwiIGluIFNlcnZpY2VXb3JrZXJSZWdpc3RyYXRpb24ucHJvdG90eXBlKSkge1xuICAgICAgY29uc29sZS53YXJuKFwiTm90aWZpY2F0aW9ucyBhcmVuXFxcInQgc3VwcG9ydGVkLlwiKTtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICAvLyBDaGVjayB0aGUgY3VycmVudCBOb3RpZmljYXRpb24gcGVybWlzc2lvbi4gIFxuICAgIC8vIElmIGl0cyBkZW5pZWQsIGl0J3MgYSBwZXJtYW5lbnQgYmxvY2sgdW50aWwgdGhlICBcbiAgICAvLyB1c2VyIGNoYW5nZXMgdGhlIHBlcm1pc3Npb24gIFxuICAgIGlmIChOb3RpZmljYXRpb24ucGVybWlzc2lvbiA9PT0gXCJkZW5pZWRcIikge1xuICAgICAgY29uc29sZS53YXJuKFwiVGhlIHVzZXIgaGFzIGJsb2NrZWQgbm90aWZpY2F0aW9ucy5cIik7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgLy8gQ2hlY2sgaWYgcHVzaCBtZXNzYWdpbmcgaXMgc3VwcG9ydGVkICBcbiAgICBpZiAoIShcIlB1c2hNYW5hZ2VyXCIgaW4gd2luZG93KSkge1xuICAgICAgY29uc29sZS53YXJuKFwiUHVzaCBtZXNzYWdpbmcgaXNuXFwndCBzdXBwb3J0ZWQuXCIpO1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
