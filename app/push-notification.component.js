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
        var url = this.baseUrl + "/notification/subscription/" + appName;
        var headers = new Headers({ "Content-Type": "application/json" });
        var body = {
            "appName": appName,
            "endpoint": subscriptionEndpoint,
        };
        return this.http.put(url, body, headers)
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
        var appName = "PWA1";
        var url = this.baseUrl + "/notification/subscription/" + appName;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNsaWVudC9hcHAvcHVzaC1ub3RpZmljYXRpb24uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBa0MsZUFBZSxDQUFDLENBQUE7QUFDbEQscUJBQXFCLGVBQWUsQ0FBQyxDQUFBO0FBQ3JDLFFBQU8sNkJBQTZCLENBQUMsQ0FBQTtBQUVyQywyQkFBMEIsc0JBQXNCLENBQUMsQ0FBQTtBQU1qRDtJQVNFLG1DQUFvQixJQUFVLEVBQVUsU0FBb0I7UUFBeEMsU0FBSSxHQUFKLElBQUksQ0FBTTtRQUFVLGNBQVMsR0FBVCxTQUFTLENBQVc7UUFOckQsU0FBSSxHQUFZLElBQUksQ0FBQztRQUNyQixpQkFBWSxHQUFZLEtBQUssQ0FBQztRQUM5QiwyQkFBc0IsR0FBWSxLQUFLLENBQUM7UUFLN0MsSUFBSSxDQUFDLE9BQU8sR0FBRyxTQUFTLENBQUMsV0FBVyxDQUFDO0lBQ3ZDLENBQUM7SUFFTSw0Q0FBUSxHQUFmO1FBQ0UsSUFBSSxDQUFDLHNCQUFzQixHQUFHLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQ3JELENBQUM7SUFFTSxzREFBa0IsR0FBekIsVUFBMEIsS0FBWTtRQUNwQyxLQUFLLENBQUMsZUFBZSxFQUFFLENBQUM7UUFFeEIsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUM7WUFDdEIsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ3JCLENBQUM7UUFBQyxJQUFJLENBQUMsQ0FBQztZQUNOLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUNuQixDQUFDO0lBQ0gsQ0FBQztJQUVPLDZDQUFTLEdBQWpCO1FBQUEsaUJBa0JDO1FBakJDLElBQUksQ0FBQyxZQUFZLEdBQUcsRUFBRSxDQUFDO1FBRXZCLFNBQVMsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxVQUFDLEdBQUc7WUFDckMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxTQUFTLENB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LElBQUksQ0FBQyxZQUFZLEdBQUcsaUNBQWlDLENBQUM7WUFDdEQsTUFBTSxDQUFDLEtBQUssQ0FBQztRQUNmLENBQUM7UUFFRCxNQUFNLENBQUMsSUFBSSxDQUFDO0lBQ2QsQ0FBQztJQTFHSDtRQUFDLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsc0JBQXNCO1lBQ2hDLFdBQVcsRUFBRSx3Q0FBd0M7U0FDdEQsQ0FBQzs7aUNBQUE7SUF3R0YsZ0NBQUM7QUFBRCxDQXZHQSxBQXVHQyxJQUFBO0FBdkdZLGlDQUF5Qiw0QkF1R3JDLENBQUEiLCJmaWxlIjoiY2xpZW50L2FwcC9wdXNoLW5vdGlmaWNhdGlvbi5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBIdHRwIH0gZnJvbSBcIkBhbmd1bGFyL2h0dHBcIjtcbmltcG9ydCBcInJ4anMvYWRkL29wZXJhdG9yL3RvUHJvbWlzZVwiO1xuXG5pbXBvcnQgeyBBcHBDb25maWcgfSBmcm9tIFwiLi4vY29uZmlnL2FwcC5jb25maWdcIjtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiBcIm15LXB1c2gtbm90aWZpY2F0aW9uXCIsXG4gIHRlbXBsYXRlVXJsOiBcIi4vYXBwL3B1c2gtbm90aWZpY2F0aW9uLmNvbXBvbmVudC5odG1sXCIsXG59KVxuZXhwb3J0IGNsYXNzIFB1c2hOb3RpZmljYXRpb25Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIHB1YmxpYyBlcnJvck1lc3NhZ2U6IHN0cmluZztcbiAgcHVibGljIHNob3c6IGJvb2xlYW4gPSB0cnVlO1xuICBwdWJsaWMgaXNTdWJzY3JpYmVkOiBib29sZWFuID0gZmFsc2U7XG4gIHB1YmxpYyBpc1N1YnNjcmlwdGlvbkRpc2FibGVkOiBib29sZWFuID0gZmFsc2U7XG5cbiAgcHJpdmF0ZSBiYXNlVXJsOiBzdHJpbmc7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwLCBwcml2YXRlIGFwcENvbmZpZzogQXBwQ29uZmlnKSB7XG4gICAgdGhpcy5iYXNlVXJsID0gYXBwQ29uZmlnLmFwaUVuZHBvaW50O1xuICB9XG5cbiAgcHVibGljIG5nT25Jbml0KCkge1xuICAgIHRoaXMuaXNTdWJzY3JpcHRpb25EaXNhYmxlZCA9ICF0aGlzLmNhblN1YnNjcmliZSgpO1xuICB9XG5cbiAgcHVibGljIHRvZ2dsZVN1YnNjcmlwdGlvbihldmVudDogRXZlbnQpIHtcbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcblxuICAgIGlmICh0aGlzLmlzU3Vic2NyaWJlZCkge1xuICAgICAgdGhpcy51bnN1YnNjcmliZSgpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnN1YnNjcmliZSgpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgc3Vic2NyaWJlKCkge1xuICAgIHRoaXMuZXJyb3JNZXNzYWdlID0gXCJcIjtcblxuICAgIG5hdmlnYXRvci5zZXJ2aWNlV29ya2VyLnJlYWR5LnRoZW4oKHJlZykgPT4ge1xuICAgICAgcmVnLnB1c2hNYW5hZ2VyLnN1YnNjcmliZShcbiAgICAgICAge1xuICAgICAgICAgIHVzZXJWaXNpYmxlT25seTogdHJ1ZSxcbiAgICAgICAgfSlcbiAgICAgICAgLnRoZW4oKHN1YikgPT4ge1xuICAgICAgICAgIGxldCBlbmRwb2ludCA9IHN1Yi5lbmRwb2ludDtcbiAgICAgICAgICBjb25zb2xlLmxvZyhcIlN1YnNjcmlwdGlvbiBlbmRwb2ludDpcIiwgZW5kcG9pbnQpO1xuICAgICAgICAgIHRoaXMuc2VuZFN1YnNjcmlwdGlvbihlbmRwb2ludCk7XG4gICAgICAgIH0pLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhcIkZhaWxlZCB0byBjaGVjayBwdXNoIG5vdGlmaWNhdGlvbiBhdmFpbGFiaWxpdHk6XCIsIGVycik7XG4gICAgICAgICAgdGhpcy5lcnJvck1lc3NhZ2UgPSBcIkVycm9yOlwiICsgZXJyO1xuICAgICAgICAgIHRoaXMuaXNTdWJzY3JpYmVkID0gZmFsc2U7XG4gICAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBzZW5kU3Vic2NyaXB0aW9uKHN1YnNjcmlwdGlvbkVuZHBvaW50OiBzdHJpbmcpIHtcbiAgICBsZXQgYXBwTmFtZSA9IFwiUFdBMVwiO1xuICAgIGxldCB1cmwgPSBgJHt0aGlzLmJhc2VVcmx9L25vdGlmaWNhdGlvbi9zdWJzY3JpcHRpb24vJHthcHBOYW1lfWA7XG4gICAgbGV0IGhlYWRlcnMgPSBuZXcgSGVhZGVycyh7IFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiIH0pO1xuICAgIGxldCBib2R5ID0ge1xuICAgICAgXCJhcHBOYW1lXCI6IGFwcE5hbWUsXG4gICAgICBcImVuZHBvaW50XCI6IHN1YnNjcmlwdGlvbkVuZHBvaW50LFxuICAgIH07XG5cbiAgICByZXR1cm4gdGhpcy5odHRwLnB1dCh1cmwsIGJvZHksIGhlYWRlcnMpXG4gICAgICAudG9Qcm9taXNlKClcbiAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcbiAgICAgICAgdGhpcy5pc1N1YnNjcmliZWQgPSB0cnVlO1xuICAgICAgfSlcbiAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiRmFpbGVkIHRvIHN1YnNjcmliZSB0byBiYWNrZW5kOlwiLCBlcnIpO1xuICAgICAgfSk7XG4gIH1cblxuICBwcml2YXRlIHVuc3Vic2NyaWJlKCkge1xuICAgIGxldCBhcHBOYW1lID0gXCJQV0ExXCI7XG4gICAgbGV0IHVybCA9IGAke3RoaXMuYmFzZVVybH0vbm90aWZpY2F0aW9uL3N1YnNjcmlwdGlvbi8ke2FwcE5hbWV9YDtcbiAgICByZXR1cm4gdGhpcy5odHRwLmRlbGV0ZSh1cmwpXG4gICAgICAudG9Qcm9taXNlKClcbiAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcbiAgICAgICAgdGhpcy5pc1N1YnNjcmliZWQgPSBmYWxzZTtcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhcIkZhaWxlZCB0byBzdWJzY3JpYmUgdG8gYmFja2VuZDpcIiwgZXJyKTtcbiAgICAgIH0pO1xuICB9XG5cbiAgLy8gT25jZSB0aGUgc2VydmljZSB3b3JrZXIgaXMgcmVnaXN0ZXJlZCBzZXQgdGhlIGluaXRpYWwgc3RhdGUgIFxuICBwcml2YXRlIGNhblN1YnNjcmliZSgpIHtcbiAgICAvLyBBcmUgTm90aWZpY2F0aW9ucyBzdXBwb3J0ZWQgaW4gdGhlIHNlcnZpY2Ugd29ya2VyPyAgXG4gICAgaWYgKCEoXCJzaG93Tm90aWZpY2F0aW9uXCIgaW4gU2VydmljZVdvcmtlclJlZ2lzdHJhdGlvbi5wcm90b3R5cGUpKSB7XG4gICAgICB0aGlzLmVycm9yTWVzc2FnZSA9IFwiTm90aWZpY2F0aW9ucyBhcmVuXFxcInQgc3VwcG9ydGVkLlwiO1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIC8vIENoZWNrIGlmIHB1c2ggbWVzc2FnaW5nIGlzIHN1cHBvcnRlZCAgXG4gICAgaWYgKCEoXCJQdXNoTWFuYWdlclwiIGluIHdpbmRvdykpIHtcbiAgICAgIHRoaXMuZXJyb3JNZXNzYWdlID0gXCJQdXNoIG1lc3NhZ2luZyBpc25cXCd0IHN1cHBvcnRlZC5cIjtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICAvLyBDaGVjayB0aGUgY3VycmVudCBOb3RpZmljYXRpb24gcGVybWlzc2lvbi4gIFxuICAgIC8vIElmIGl0cyBkZW5pZWQsIGl0J3MgYSBwZXJtYW5lbnQgYmxvY2sgdW50aWwgdGhlICBcbiAgICAvLyB1c2VyIGNoYW5nZXMgdGhlIHBlcm1pc3Npb24gXG4gICAgaWYgKE5vdGlmaWNhdGlvbi5wZXJtaXNzaW9uID09PSBcImRlbmllZFwiKSB7XG4gICAgICB0aGlzLmVycm9yTWVzc2FnZSA9IFwiWW91IGhhdmUgYmxvY2tlZCBub3RpZmljYXRpb25zLlwiO1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIHJldHVybiB0cnVlO1xuICB9XG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
