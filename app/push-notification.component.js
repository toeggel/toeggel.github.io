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
var http_1 = require("@angular/http");
require("rxjs/add/operator/toPromise");
var app_config_1 = require("../config/app.config");
var PushNotificationComponent = (function () {
    function PushNotificationComponent(http, appConfig) {
        this.http = http;
        this.appConfig = appConfig;
        this.show = true;
        this.isSubscribed = false;
        this.isSubscriptionDisabled = false;
        this.baseUrl = appConfig.apiEndpoint;
    }
    PushNotificationComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.isSubscriptionDisabled = !this.canSubscribe();
        navigator.serviceWorker.ready
            .then(function (reg) {
            _this.serviceWorkerRegistration = reg;
            return _this.serviceWorkerRegistration.pushManager.getSubscription();
        })
            .then(function (subscription) {
            if (subscription) {
                console.log("Already Subscribed:", subscription);
                _this.isSubscribed = true;
            }
        })
            .catch(function (err) {
            console.log("Failed to check push notification availability:", err);
            _this.errorMessage = "Error:" + err;
            _this.isSubscribed = false;
        });
    };
    PushNotificationComponent.prototype.toggleSubscription = function (event) {
        event.stopPropagation();
        if (this.isSubscribed) {
            this.unsubscribe();
        }
        else {
            this.subscribe();
        }
    };
    PushNotificationComponent.prototype.subscribe = function () {
        var _this = this;
        this.errorMessage = "";
        this.serviceWorkerRegistration.pushManager.subscribe({ userVisibleOnly: true })
            .then(function (sub) {
            var endpoint = sub.endpoint;
            console.log("Subscription endpoint:", endpoint);
            _this.sendSubscription(endpoint);
        }).catch(function (err) {
            console.log("Failed to check push notification availability:", err);
            _this.errorMessage = "Error:" + err;
            _this.isSubscribed = false;
        });
    };
    PushNotificationComponent.prototype.sendSubscription = function (subscriptionEndpoint) {
        var _this = this;
        var appName = "PWA-TestApp";
        var url = this.baseUrl + "/notification/subscription";
        var headers = new Headers({ "Content-Type": "application/json" });
        var body = {
            "appName": appName,
            "endpoint": subscriptionEndpoint,
        };
        this.http.post(url, body, headers)
            .toPromise()
            .then(function (response) {
            _this.isSubscribed = true;
        })
            .catch(function (err) {
            console.log("Failed to subscribe to backend:", err);
        });
    };
    PushNotificationComponent.prototype.unsubscribe = function () {
        var _this = this;
        this.serviceWorkerRegistration.pushManager.getSubscription()
            .then(function (subscription) {
            return subscription.unsubscribe()
                .then(function (success) {
                return Promise.resolve(subscription);
            });
        })
            .then(function (subscription) {
            // let subscriptionId = subscription.endpoint.substr(subscription.endpoint.lastIndexOf('/') + 1, subscription.endpoint.length - 1);
            var subscriptionId = "";
            var url = _this.baseUrl + "/notification/subscription/" + subscriptionId;
            return _this.http.delete(url).toPromise();
        })
            .then(function (response) {
            _this.isSubscribed = false;
        })
            .catch(function (err) {
            console.log("Failed to unsubscribe:", err);
        });
    };
    // Once the service worker is registered set the initial state
    PushNotificationComponent.prototype.canSubscribe = function () {
        // Are Notifications supported in the service worker?
        if (!("showNotification" in ServiceWorkerRegistration.prototype)) {
            this.errorMessage = "Notifications aren\"t supported.";
            return false;
        }
        // Check if push messaging is supported  
        if (!("PushManager" in window)) {
            this.errorMessage = "Push messaging isn\'t supported.";
            return false;
        }
        // Check the current Notification permission.
        // If its denied, it's a permanent block until the
        // user changes the permission
        if (Notification.permission === "denied") {
            this.errorMessage = "You have blocked notifications.";
            return false;
        }
        return true;
    };
    PushNotificationComponent = __decorate([
        core_1.Component({
            selector: "my-push-notification",
            templateUrl: "./app/push-notification.component.html",
        }), 
        __metadata('design:paramtypes', [http_1.Http, app_config_1.AppConfig])
    ], PushNotificationComponent);
    return PushNotificationComponent;
}());
exports.PushNotificationComponent = PushNotificationComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNsaWVudC9hcHAvcHVzaC1ub3RpZmljYXRpb24uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBa0MsZUFBZSxDQUFDLENBQUE7QUFDbEQscUJBQXFCLGVBQWUsQ0FBQyxDQUFBO0FBQ3JDLFFBQU8sNkJBQTZCLENBQUMsQ0FBQTtBQUVyQywyQkFBMEIsc0JBQXNCLENBQUMsQ0FBQTtBQU1qRDtJQVVFLG1DQUFvQixJQUFVLEVBQVUsU0FBb0I7UUFBeEMsU0FBSSxHQUFKLElBQUksQ0FBTTtRQUFVLGNBQVMsR0FBVCxTQUFTLENBQVc7UUFQckQsU0FBSSxHQUFZLElBQUksQ0FBQztRQUNyQixpQkFBWSxHQUFZLEtBQUssQ0FBQztRQUM5QiwyQkFBc0IsR0FBWSxLQUFLLENBQUM7UUFNN0MsSUFBSSxDQUFDLE9BQU8sR0FBRyxTQUFTLENBQUMsV0FBVyxDQUFDO0lBQ3ZDLENBQUM7SUFFTSw0Q0FBUSxHQUFmO1FBQUEsaUJBbUJDO1FBbEJDLElBQUksQ0FBQyxzQkFBc0IsR0FBRyxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUVuRCxTQUFTLENBQUMsYUFBYSxDQUFDLEtBQUs7YUFDMUIsSUFBSSxDQUFDLFVBQUEsR0FBRztZQUNQLEtBQUksQ0FBQyx5QkFBeUIsR0FBRyxHQUFHLENBQUM7WUFDckMsTUFBTSxDQUFDLEtBQUksQ0FBQyx5QkFBeUIsQ0FBQyxXQUFXLENBQUMsZUFBZSxFQUFFLENBQUM7UUFDdEUsQ0FBQyxDQUFDO2FBQ0QsSUFBSSxDQUFDLFVBQUEsWUFBWTtZQUNoQixFQUFFLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDO2dCQUNqQixPQUFPLENBQUMsR0FBRyxDQUFDLHFCQUFxQixFQUFFLFlBQVksQ0FBQyxDQUFDO2dCQUNqRCxLQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQztZQUMzQixDQUFDO1FBQ0gsQ0FBQyxDQUFDO2FBQ0QsS0FBSyxDQUFDLFVBQUMs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VyxFQUFFLHdDQUF3QztTQUN0RCxDQUFDOztpQ0FBQTtJQThIRixnQ0FBQztBQUFELENBN0hBLEFBNkhDLElBQUE7QUE3SFksaUNBQXlCLDRCQTZIckMsQ0FBQSIsImZpbGUiOiJjbGllbnQvYXBwL3B1c2gtbm90aWZpY2F0aW9uLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IEh0dHAgfSBmcm9tIFwiQGFuZ3VsYXIvaHR0cFwiO1xuaW1wb3J0IFwicnhqcy9hZGQvb3BlcmF0b3IvdG9Qcm9taXNlXCI7XG5cbmltcG9ydCB7IEFwcENvbmZpZyB9IGZyb20gXCIuLi9jb25maWcvYXBwLmNvbmZpZ1wiO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6IFwibXktcHVzaC1ub3RpZmljYXRpb25cIixcbiAgdGVtcGxhdGVVcmw6IFwiLi9hcHAvcHVzaC1ub3RpZmljYXRpb24uY29tcG9uZW50Lmh0bWxcIixcbn0pXG5leHBvcnQgY2xhc3MgUHVzaE5vdGlmaWNhdGlvbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgcHVibGljIGVycm9yTWVzc2FnZTogc3RyaW5nO1xuICBwdWJsaWMgc2hvdzogYm9vbGVhbiA9IHRydWU7XG4gIHB1YmxpYyBpc1N1YnNjcmliZWQ6IGJvb2xlYW4gPSBmYWxzZTtcbiAgcHVibGljIGlzU3Vic2NyaXB0aW9uRGlzYWJsZWQ6IGJvb2xlYW4gPSBmYWxzZTtcblxuICBwcml2YXRlIGJhc2VVcmw6IHN0cmluZztcbiAgcHJpdmF0ZSBzZXJ2aWNlV29ya2VyUmVnaXN0cmF0aW9uOiBTZXJ2aWNlV29ya2VyUmVnaXN0cmF0aW9uO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cCwgcHJpdmF0ZSBhcHBDb25maWc6IEFwcENvbmZpZykge1xuICAgIHRoaXMuYmFzZVVybCA9IGFwcENvbmZpZy5hcGlFbmRwb2ludDtcbiAgfVxuXG4gIHB1YmxpYyBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLmlzU3Vic2NyaXB0aW9uRGlzYWJsZWQgPSAhdGhpcy5jYW5TdWJzY3JpYmUoKTtcblxuICAgIG5hdmlnYXRvci5zZXJ2aWNlV29ya2VyLnJlYWR5XG4gICAgICAudGhlbihyZWcgPT4ge1xuICAgICAgICB0aGlzLnNlcnZpY2VXb3JrZXJSZWdpc3RyYXRpb24gPSByZWc7XG4gICAgICAgIHJldHVybiB0aGlzLnNlcnZpY2VXb3JrZXJSZWdpc3RyYXRpb24ucHVzaE1hbmFnZXIuZ2V0U3Vic2NyaXB0aW9uKCk7XG4gICAgICB9KVxuICAgICAgLnRoZW4oc3Vic2NyaXB0aW9uID0+IHtcbiAgICAgICAgaWYgKHN1YnNjcmlwdGlvbikge1xuICAgICAgICAgIGNvbnNvbGUubG9nKFwiQWxyZWFkeSBTdWJzY3JpYmVkOlwiLCBzdWJzY3JpcHRpb24pO1xuICAgICAgICAgIHRoaXMuaXNTdWJzY3JpYmVkID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiRmFpbGVkIHRvIGNoZWNrIHB1c2ggbm90aWZpY2F0aW9uIGF2YWlsYWJpbGl0eTpcIiwgZXJyKTtcbiAgICAgICAgdGhpcy5lcnJvck1lc3NhZ2UgPSBcIkVycm9yOlwiICsgZXJyO1xuICAgICAgICB0aGlzLmlzU3Vic2NyaWJlZCA9IGZhbHNlO1xuICAgICAgfSk7XG4gIH1cblxuICBwdWJsaWMgdG9nZ2xlU3Vic2NyaXB0aW9uKGV2ZW50OiBFdmVudCkge1xuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuXG4gICAgaWYgKHRoaXMuaXNTdWJzY3JpYmVkKSB7XG4gICAgICB0aGlzLnVuc3Vic2NyaWJlKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc3Vic2NyaWJlKCk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBzdWJzY3JpYmUoKSB7XG4gICAgdGhpcy5lcnJvck1lc3NhZ2UgPSBcIlwiO1xuXG4gICAgdGhpcy5zZXJ2aWNlV29ya2VyUmVnaXN0cmF0aW9uLnB1c2hNYW5hZ2VyLnN1YnNjcmliZSh7IHVzZXJWaXNpYmxlT25seTogdHJ1ZSB9KVxuICAgICAgLnRoZW4oc3ViID0+IHtcbiAgICAgICAgbGV0IGVuZHBvaW50ID0gc3ViLmVuZHBvaW50O1xuICAgICAgICBjb25zb2xlLmxvZyhcIlN1YnNjcmlwdGlvbiBlbmRwb2ludDpcIiwgZW5kcG9pbnQpO1xuICAgICAgICB0aGlzLnNlbmRTdWJzY3JpcHRpb24oZW5kcG9pbnQpO1xuICAgICAgfSkuY2F0Y2goZXJyID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coXCJGYWlsZWQgdG8gY2hlY2sgcHVzaCBub3RpZmljYXRpb24gYXZhaWxhYmlsaXR5OlwiLCBlcnIpO1xuICAgICAgICB0aGlzLmVycm9yTWVzc2FnZSA9IFwiRXJyb3I6XCIgKyBlcnI7XG4gICAgICAgIHRoaXMuaXNTdWJzY3JpYmVkID0gZmFsc2U7XG4gICAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgc2VuZFN1YnNjcmlwdGlvbihzdWJzY3JpcHRpb25FbmRwb2ludDogc3RyaW5nKSB7XG4gICAgbGV0IGFwcE5hbWUgPSBcIlBXQS1UZXN0QXBwXCI7XG4gICAgbGV0IHVybCA9IGAke3RoaXMuYmFzZVVybH0vbm90aWZpY2F0aW9uL3N1YnNjcmlwdGlvbmA7XG4gICAgbGV0IGhlYWRlcnMgPSBuZXcgSGVhZGVycyh7IFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiIH0pO1xuICAgIGxldCBib2R5ID0ge1xuICAgICAgXCJhcHBOYW1lXCI6IGFwcE5hbWUsXG4gICAgICBcImVuZHBvaW50XCI6IHN1YnNjcmlwdGlvbkVuZHBvaW50LFxuICAgIH07XG5cbiAgICB0aGlzLmh0dHAucG9zdCh1cmwsIGJvZHksIGhlYWRlcnMpXG4gICAgICAudG9Qcm9taXNlKClcbiAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcbiAgICAgICAgdGhpcy5pc1N1YnNjcmliZWQgPSB0cnVlO1xuICAgICAgfSlcbiAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiRmFpbGVkIHRvIHN1YnNjcmliZSB0byBiYWNrZW5kOlwiLCBlcnIpO1xuICAgICAgfSk7XG4gIH1cblxuICBwcml2YXRlIHVuc3Vic2NyaWJlKCkge1xuICAgIHRoaXMuc2VydmljZVdvcmtlclJlZ2lzdHJhdGlvbi5wdXNoTWFuYWdlci5nZXRTdWJzY3JpcHRpb24oKVxuICAgICAgLnRoZW4oc3Vic2NyaXB0aW9uID0+IHtcbiAgICAgICAgcmV0dXJuIHN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpXG4gICAgICAgICAgLnRoZW4oc3VjY2VzcyA9PiB7XG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHN1YnNjcmlwdGlvbik7XG4gICAgICAgICAgfSk7XG4gICAgICB9KVxuICAgICAgLnRoZW4oc3Vic2NyaXB0aW9uID0+IHtcbiAgICAgICAgLy8gbGV0IHN1YnNjcmlwdGlvbklkID0gc3Vic2NyaXB0aW9uLmVuZHBvaW50LnN1YnN0cihzdWJzY3JpcHRpb24uZW5kcG9pbnQubGFzdEluZGV4T2YoJy8nKSArIDEsIHN1YnNjcmlwdGlvbi5lbmRwb2ludC5sZW5ndGggLSAxKTtcbiAgICAgICAgbGV0IHN1YnNjcmlwdGlvbklkID0gXCJcIjtcbiAgICAgICAgbGV0IHVybCA9IGAke3RoaXMuYmFzZVVybH0vbm90aWZpY2F0aW9uL3N1YnNjcmlwdGlvbi8ke3N1YnNjcmlwdGlvbklkfWA7XG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZGVsZXRlKHVybCkudG9Qcm9taXNlKCk7XG4gICAgICB9KVxuICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgICB0aGlzLmlzU3Vic2NyaWJlZCA9IGZhbHNlO1xuICAgICAgfSlcbiAgICAgIC5jYXRjaChlcnIgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhcIkZhaWxlZCB0byB1bnN1YnNjcmliZTpcIiwgZXJyKTtcbiAgICAgIH0pO1xuICB9XG5cbiAgLy8gT25jZSB0aGUgc2VydmljZSB3b3JrZXIgaXMgcmVnaXN0ZXJlZCBzZXQgdGhlIGluaXRpYWwgc3RhdGVcbiAgcHJpdmF0ZSBjYW5TdWJzY3JpYmUoKSB7XG4gICAgLy8gQXJlIE5vdGlmaWNhdGlvbnMgc3VwcG9ydGVkIGluIHRoZSBzZXJ2aWNlIHdvcmtlcj9cbiAgICBpZiAoIShcInNob3dOb3RpZmljYXRpb25cIiBpbiBTZXJ2aWNlV29ya2VyUmVnaXN0cmF0aW9uLnByb3RvdHlwZSkpIHtcbiAgICAgIHRoaXMuZXJyb3JNZXNzYWdlID0gXCJOb3RpZmljYXRpb25zIGFyZW5cXFwidCBzdXBwb3J0ZWQuXCI7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgLy8gQ2hlY2sgaWYgcHVzaCBtZXNzYWdpbmcgaXMgc3VwcG9ydGVkICBcbiAgICBpZiAoIShcIlB1c2hNYW5hZ2VyXCIgaW4gd2luZG93KSkge1xuICAgICAgdGhpcy5lcnJvck1lc3NhZ2UgPSBcIlB1c2ggbWVzc2FnaW5nIGlzblxcJ3Qgc3VwcG9ydGVkLlwiO1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIC8vIENoZWNrIHRoZSBjdXJyZW50IE5vdGlmaWNhdGlvbiBwZXJtaXNzaW9uLlxuICAgIC8vIElmIGl0cyBkZW5pZWQsIGl0J3MgYSBwZXJtYW5lbnQgYmxvY2sgdW50aWwgdGhlXG4gICAgLy8gdXNlciBjaGFuZ2VzIHRoZSBwZXJtaXNzaW9uXG4gICAgaWYgKE5vdGlmaWNhdGlvbi5wZXJtaXNzaW9uID09PSBcImRlbmllZFwiKSB7XG4gICAgICB0aGlzLmVycm9yTWVzc2FnZSA9IFwiWW91IGhhdmUgYmxvY2tlZCBub3RpZmljYXRpb25zLlwiO1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIHJldHVybiB0cnVlO1xuICB9XG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
