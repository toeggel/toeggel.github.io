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
        this.isSubscriptionDisabled = !this.canSubscribe();
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
        navigator.serviceWorker.ready.then(function (reg) {
            reg.pushManager.subscribe({
                userVisibleOnly: true,
            })
                .then(function (sub) {
                var endpoint = sub.endpoint;
                console.log("Subscription endpoint:", endpoint);
                _this.sendSubscription(endpoint);
            }).catch(function (err) {
                console.log("Failed to check push notification availability:", err);
                _this.errorMessage = "Error:" + err;
                _this.isSubscribed = false;
            });
        });
    };
    PushNotificationComponent.prototype.sendSubscription = function (subscriptionEndpoint) {
        var _this = this;
        var appName = "PWA1";
        var url = this.baseUrl + "notification/subscription";
        var headers = new Headers({ "Content-Type": "application/json" });
        var body = {
            "appName": appName,
            "endpoint": subscriptionEndpoint,
        };
        return this.http.post(url, body, headers)
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
        var url = this.baseUrl + "notification/subscription";
        return this.http.delete(url)
            .toPromise()
            .then(function (response) {
            _this.isSubscribed = false;
        })
            .catch(function (err) {
            console.log("Failed to subscribe to backend:", err);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNsaWVudC9hcHAvcHVzaC1ub3RpZmljYXRpb24uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBa0MsZUFBZSxDQUFDLENBQUE7QUFDbEQscUJBQXFCLGVBQWUsQ0FBQyxDQUFBO0FBQ3JDLFFBQU8sNkJBQTZCLENBQUMsQ0FBQTtBQUVyQywyQkFBMEIsc0JBQXNCLENBQUMsQ0FBQTtBQU1qRDtJQVNFLG1DQUFvQixJQUFVLEVBQVUsU0FBb0I7UUFBeEMsU0FBSSxHQUFKLElBQUksQ0FBTTtRQUFVLGNBQVMsR0FBVCxTQUFTLENBQVc7UUFOckQsU0FBSSxHQUFZLElBQUksQ0FBQztRQUNyQixpQkFBWSxHQUFZLEtBQUssQ0FBQztRQUM5QiwyQkFBc0IsR0FBWSxLQUFLLENBQUM7UUFLN0MsSUFBSSxDQUFDLE9BQU8sR0FBRyxTQUFTLENBQUMsV0FBVyxDQUFDO0lBQ3ZDLENBQUM7SUFFTSw0Q0FBUSxHQUFmO1FBQ0UsSUFBSSxDQUFDLHNCQUFzQixHQUFHLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQ3JELENBQUM7SUFFTSxzREFBa0IsR0FBekIsVUFBMEIsS0FBWTtRQUNwQyxLQUFLLENBQUMsZUFBZSxFQUFFLENBQUM7UUFFeEIsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUM7WUFDdEIsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ3JCLENBQUM7UUFBQyxJQUFJLENBQUMsQ0FBQztZQUNOLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUNuQixDQUFDO0lBQ0gsQ0FBQztJQUVPLDZDQUFTLEdBQWpCO1FBQUEsaUJBa0JDO1FBakJDLElBQUksQ0FBQyxZQUFZLEdBQUcsRUFBRSxDQUFDO1FBRXZCLFNBQVMsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxVQUFDLEdBQUc7WUFDckMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxTQUFTLENB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QU0sQ0FBQyxLQUFLLENBQUM7UUFDZixDQUFDO1FBRUQsTUFBTSxDQUFDLElBQUksQ0FBQztJQUNkLENBQUM7SUF6R0g7UUFBQyxnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLHNCQUFzQjtZQUNoQyxXQUFXLEVBQUUsd0NBQXdDO1NBQ3RELENBQUM7O2lDQUFBO0lBdUdGLGdDQUFDO0FBQUQsQ0F0R0EsQUFzR0MsSUFBQTtBQXRHWSxpQ0FBeUIsNEJBc0dyQyxDQUFBIiwiZmlsZSI6ImNsaWVudC9hcHAvcHVzaC1ub3RpZmljYXRpb24uY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgSHR0cCB9IGZyb20gXCJAYW5ndWxhci9odHRwXCI7XG5pbXBvcnQgXCJyeGpzL2FkZC9vcGVyYXRvci90b1Byb21pc2VcIjtcblxuaW1wb3J0IHsgQXBwQ29uZmlnIH0gZnJvbSBcIi4uL2NvbmZpZy9hcHAuY29uZmlnXCI7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogXCJteS1wdXNoLW5vdGlmaWNhdGlvblwiLFxuICB0ZW1wbGF0ZVVybDogXCIuL2FwcC9wdXNoLW5vdGlmaWNhdGlvbi5jb21wb25lbnQuaHRtbFwiLFxufSlcbmV4cG9ydCBjbGFzcyBQdXNoTm90aWZpY2F0aW9uQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBwdWJsaWMgZXJyb3JNZXNzYWdlOiBzdHJpbmc7XG4gIHB1YmxpYyBzaG93OiBib29sZWFuID0gdHJ1ZTtcbiAgcHVibGljIGlzU3Vic2NyaWJlZDogYm9vbGVhbiA9IGZhbHNlO1xuICBwdWJsaWMgaXNTdWJzY3JpcHRpb25EaXNhYmxlZDogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIHByaXZhdGUgYmFzZVVybDogc3RyaW5nO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cCwgcHJpdmF0ZSBhcHBDb25maWc6IEFwcENvbmZpZykge1xuICAgIHRoaXMuYmFzZVVybCA9IGFwcENvbmZpZy5hcGlFbmRwb2ludDtcbiAgfVxuXG4gIHB1YmxpYyBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLmlzU3Vic2NyaXB0aW9uRGlzYWJsZWQgPSAhdGhpcy5jYW5TdWJzY3JpYmUoKTtcbiAgfVxuXG4gIHB1YmxpYyB0b2dnbGVTdWJzY3JpcHRpb24oZXZlbnQ6IEV2ZW50KSB7XG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG5cbiAgICBpZiAodGhpcy5pc1N1YnNjcmliZWQpIHtcbiAgICAgIHRoaXMudW5zdWJzY3JpYmUoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zdWJzY3JpYmUoKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIHN1YnNjcmliZSgpIHtcbiAgICB0aGlzLmVycm9yTWVzc2FnZSA9IFwiXCI7XG5cbiAgICBuYXZpZ2F0b3Iuc2VydmljZVdvcmtlci5yZWFkeS50aGVuKChyZWcpID0+IHtcbiAgICAgIHJlZy5wdXNoTWFuYWdlci5zdWJzY3JpYmUoXG4gICAgICAgIHtcbiAgICAgICAgICB1c2VyVmlzaWJsZU9ubHk6IHRydWUsXG4gICAgICAgIH0pXG4gICAgICAgIC50aGVuKChzdWIpID0+IHtcbiAgICAgICAgICBsZXQgZW5kcG9pbnQgPSBzdWIuZW5kcG9pbnQ7XG4gICAgICAgICAgY29uc29sZS5sb2coXCJTdWJzY3JpcHRpb24gZW5kcG9pbnQ6XCIsIGVuZHBvaW50KTtcbiAgICAgICAgICB0aGlzLnNlbmRTdWJzY3JpcHRpb24oZW5kcG9pbnQpO1xuICAgICAgICB9KS5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgICAgY29uc29sZS5sb2coXCJGYWlsZWQgdG8gY2hlY2sgcHVzaCBub3RpZmljYXRpb24gYXZhaWxhYmlsaXR5OlwiLCBlcnIpO1xuICAgICAgICAgIHRoaXMuZXJyb3JNZXNzYWdlID0gXCJFcnJvcjpcIiArIGVycjtcbiAgICAgICAgICB0aGlzLmlzU3Vic2NyaWJlZCA9IGZhbHNlO1xuICAgICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgc2VuZFN1YnNjcmlwdGlvbihzdWJzY3JpcHRpb25FbmRwb2ludDogc3RyaW5nKSB7XG4gICAgbGV0IGFwcE5hbWUgPSBcIlBXQTFcIjtcbiAgICBsZXQgdXJsID0gYCR7dGhpcy5iYXNlVXJsfW5vdGlmaWNhdGlvbi9zdWJzY3JpcHRpb25gO1xuICAgIGxldCBoZWFkZXJzID0gbmV3IEhlYWRlcnMoeyBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIiB9KTtcbiAgICBsZXQgYm9keSA9IHtcbiAgICAgIFwiYXBwTmFtZVwiOiBhcHBOYW1lLFxuICAgICAgXCJlbmRwb2ludFwiOiBzdWJzY3JpcHRpb25FbmRwb2ludCxcbiAgICB9O1xuXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0KHVybCwgYm9keSwgaGVhZGVycylcbiAgICAgIC50b1Byb21pc2UoKVxuICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgICB0aGlzLmlzU3Vic2NyaWJlZCA9IHRydWU7XG4gICAgICB9KVxuICAgICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coXCJGYWlsZWQgdG8gc3Vic2NyaWJlIHRvIGJhY2tlbmQ6XCIsIGVycik7XG4gICAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgdW5zdWJzY3JpYmUoKSB7XG4gICAgbGV0IHVybCA9IGAke3RoaXMuYmFzZVVybH1ub3RpZmljYXRpb24vc3Vic2NyaXB0aW9uYDtcbiAgICByZXR1cm4gdGhpcy5odHRwLmRlbGV0ZSh1cmwpXG4gICAgICAudG9Qcm9taXNlKClcbiAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcbiAgICAgICAgdGhpcy5pc1N1YnNjcmliZWQgPSBmYWxzZTtcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhcIkZhaWxlZCB0byBzdWJzY3JpYmUgdG8gYmFja2VuZDpcIiwgZXJyKTtcbiAgICAgIH0pO1xuICB9XG5cbiAgLy8gT25jZSB0aGUgc2VydmljZSB3b3JrZXIgaXMgcmVnaXN0ZXJlZCBzZXQgdGhlIGluaXRpYWwgc3RhdGVcbiAgcHJpdmF0ZSBjYW5TdWJzY3JpYmUoKSB7XG4gICAgLy8gQXJlIE5vdGlmaWNhdGlvbnMgc3VwcG9ydGVkIGluIHRoZSBzZXJ2aWNlIHdvcmtlcj9cbiAgICBpZiAoIShcInNob3dOb3RpZmljYXRpb25cIiBpbiBTZXJ2aWNlV29ya2VyUmVnaXN0cmF0aW9uLnByb3RvdHlwZSkpIHtcbiAgICAgIHRoaXMuZXJyb3JNZXNzYWdlID0gXCJOb3RpZmljYXRpb25zIGFyZW5cXFwidCBzdXBwb3J0ZWQuXCI7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgLy8gQ2hlY2sgaWYgcHVzaCBtZXNzYWdpbmcgaXMgc3VwcG9ydGVkICBcbiAgICBpZiAoIShcIlB1c2hNYW5hZ2VyXCIgaW4gd2luZG93KSkge1xuICAgICAgdGhpcy5lcnJvck1lc3NhZ2UgPSBcIlB1c2ggbWVzc2FnaW5nIGlzblxcJ3Qgc3VwcG9ydGVkLlwiO1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIC8vIENoZWNrIHRoZSBjdXJyZW50IE5vdGlmaWNhdGlvbiBwZXJtaXNzaW9uLlxuICAgIC8vIElmIGl0cyBkZW5pZWQsIGl0J3MgYSBwZXJtYW5lbnQgYmxvY2sgdW50aWwgdGhlXG4gICAgLy8gdXNlciBjaGFuZ2VzIHRoZSBwZXJtaXNzaW9uXG4gICAgaWYgKE5vdGlmaWNhdGlvbi5wZXJtaXNzaW9uID09PSBcImRlbmllZFwiKSB7XG4gICAgICB0aGlzLmVycm9yTWVzc2FnZSA9IFwiWW91IGhhdmUgYmxvY2tlZCBub3RpZmljYXRpb25zLlwiO1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIHJldHVybiB0cnVlO1xuICB9XG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
