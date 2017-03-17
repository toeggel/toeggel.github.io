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
var HomeComponent = (function () {
    function HomeComponent() {
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
        __metadata('design:paramtypes', [])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNsaWVudC9hcHAvaG9tZS5jb21wb25lbnQuMS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQWtDLGVBQWUsQ0FBQyxDQUFBO0FBTWxEO0lBQUE7SUFpREEsQ0FBQztJQS9DUSxnQ0FBUSxHQUFmO1FBQUEsaUJBb0JDO1FBbkJDLFNBQVMsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxVQUFDLEdBQUc7WUFDckMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQ3ZCO2dCQUNFLGVBQWUsRUFBRSxJQUFJO2FBQ3RCLENBQUM7aUJBQ0QsSUFBSSxDQUFDLFVBQUMsR0FBRztnQkFDVyxRQUFRLENBQUMsYUFBYSxDQUFDLFlBQVksQ0FBRSxDQUFDLE9BQU8sR0FBRyxLQUFJLENBQUMsNEJBQTRCLEVBQUUsQ0FBQztnQkFFdkcsSUFBSSxRQUFRLEdBQUcsR0FBRyxDQUFDLFFBQVEsQ0FBQztnQkFDNUIsT0FBTyxDQUFDLEdBQUcsQ0FBQyx3QkFBd0IsRUFBRSxRQUFRLENBQUMsQ0FBQztnQkFDaEQsSUFBSSxJQUFJLEdBQUcsUUFBUSxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUUsUUFBUSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztnQkFDaEUsSUFBSSxjQUFjLEdBQUcsUUFBUSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsRUFBRSxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUM7Z0JBQ3JFLFFBQVEsQ0FBQyxhQUFhLENBQUMsV0FBVyxDQUFFLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztnQkFDdEQsUUFBUSxDQUFDLGFBQWEsQ0FBQyxpQkFBaUIsQ0FBRSxDQUFDLFNBQVMsR0FBRyxjQUFjLENBQUM7WUFDM0YsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLFVBQUMsR0FBRztnQkFDWCxPQUFPLENBQUMsR0FBRyxDQUFDLGlEQUFpRCxFQUFFLEdBQUcsQ0FBQyxDQUFDO2dCQUNqRCxRQUFRLENBQUMsYUFBYSxDQUFDLGlCQUFpQixDQUFFLENBQUMsU0FBUyxHQUFHLFFBQVEsR0FBRyxHQUFHLENBQUM7WUFDM0YsQ0FBQyxDQUFDLENBQUM7UUFDUCxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCxnRUFBZ0U7SUFDeEQsb0RBQTRCLEdBQXBDO1FBQ0UsdURBQXVEO1FBQ3ZELEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxrQkFBa0IsSUFBSSx5QkFBeUIsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDakUsT0FBTyxDQUFDLElBQUksQ0FBQyxrQ0FBa0MsQ0FBQyxDQUFDO1lBQ2pELE1BQU0sQ0FBQyxLQUFLLENBQUM7UUFDZixDQUFDO1FBRUQsK0NBQStDO1FBQy9DLG9EQUFvRDtRQUNwRCxnQ0FBZ0M7UUFDaEMsRUFBRSxDQUFDLENBQUMsWUFBWSxDQUFDLFVBQVUsS0FBSyxRQUFRLENBQUMsQ0FBQyxDQUFDO1lBQ3pDLE9BQU8sQ0FBQyxJQUFJLENBQUMscUNBQXFDLENBQUMsQ0FBQztZQUNwRCxNQUFNLENBQUMsS0FBSyxDQUFDO1FBQ2YsQ0FBQztRQUVELHlDQUF5QztRQUN6QyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsYUFBYSxJQUFJLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUMvQixPQUFPLENBQUMsSUFBSSxDQUFDLGtDQUFrQyxDQUFDLENBQUM7WUFDakQsTUFBTSxDQUFDLEtBQUssQ0FBQztRQUNmLENBQUM7UUFFRCxNQUFNLENBQUMsSUFBSSxDQUFDO0lBQ2QsQ0FBQztJQW5ESDtRQUFDLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsU0FBUztZQUNuQixXQUFXLEVBQUUsMkJBQTJCO1NBQ3pDLENBQUM7O3FCQUFBO0lBa0RGLG9CQUFDO0FBQUQsQ0FqREEsQUFpREMsSUFBQTtBQWpEWSxxQkFBYSxnQkFpRHpCLENBQUEiLCJmaWxlIjoiY2xpZW50L2FwcC9ob21lLmNvbXBvbmVudC4xLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6IFwibXktaG9tZVwiLFxuICB0ZW1wbGF0ZVVybDogXCIuL2FwcC9ob21lLmNvbXBvbmVudC5odG1sXCIsXG59KVxuZXhwb3J0IGNsYXNzIEhvbWVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIHB1YmxpYyBuZ09uSW5pdCgpIHtcbiAgICBuYXZpZ2F0b3Iuc2VydmljZVdvcmtlci5yZWFkeS50aGVuKChyZWcpID0+IHtcbiAgICAgIHJlZy5wdXNoTWFuYWdlci5zdWJzY3JpYmUoXG4gICAgICAgIHtcbiAgICAgICAgICB1c2VyVmlzaWJsZU9ubHk6IHRydWUsXG4gICAgICAgIH0pXG4gICAgICAgIC50aGVuKChzdWIpID0+IHtcbiAgICAgICAgICAoPEhUTUxJbnB1dEVsZW1lbnQ+ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzdWJzY3JpYmVcIikpLmNoZWNrZWQgPSB0aGlzLmFyZVB1c2hOb3RpZmljYXRpb25zUG9zc2libGUoKTtcblxuICAgICAgICAgIGxldCBlbmRwb2ludCA9IHN1Yi5lbmRwb2ludDtcbiAgICAgICAgICBjb25zb2xlLmxvZyhcIlN1YnNjcmlwdGlvbiBlbmRwb2ludDpcIiwgZW5kcG9pbnQpO1xuICAgICAgICAgIGxldCBiYXNlID0gZW5kcG9pbnQuc3Vic3RyaW5nKDAsIGVuZHBvaW50Lmxhc3RJbmRleE9mKFwiL1wiKSArIDEpO1xuICAgICAgICAgIGxldCByZWdpc3RyYXRpb25JZCA9IGVuZHBvaW50LnN1YnN0cmluZyhlbmRwb2ludC5sYXN0SW5kZXhPZihcIi9cIikgKyAxLCBlbmRwb2ludC5sZW5ndGgpO1xuICAgICAgICAgICg8SFRNTElucHV0RWxlbWVudD5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2VuZHBvaW50XCIpKS5pbm5lclRleHQgPSBiYXNlO1xuICAgICAgICAgICg8SFRNTElucHV0RWxlbWVudD5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3JlZ2lzdHJhdGlvbklkXCIpKS5pbm5lclRleHQgPSByZWdpc3RyYXRpb25JZDtcbiAgICAgICAgfSkuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICAgIGNvbnNvbGUubG9nKFwiRmFpbGVkIHRvIGNoZWNrIHB1c2ggbm90aWZpY2F0aW9uIGF2YWlsYWJpbGl0eTpcIiwgZXJyKTtcbiAgICAgICAgICAoPEhUTUxJbnB1dEVsZW1lbnQ+ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNyZWdpc3RyYXRpb25JZFwiKSkuaW5uZXJUZXh0ID0gXCJFcnJvcjpcIiArIGVycjtcbiAgICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICAvLyBPbmNlIHRoZSBzZXJ2aWNlIHdvcmtlciBpcyByZWdpc3RlcmVkIHNldCB0aGUgaW5pdGlhbCBzdGF0ZSAgXG4gIHByaXZhdGUgYXJlUHVzaE5vdGlmaWNhdGlvbnNQb3NzaWJsZSgpIHtcbiAgICAvLyBBcmUgTm90aWZpY2F0aW9ucyBzdXBwb3J0ZWQgaW4gdGhlIHNlcnZpY2Ugd29ya2VyPyAgXG4gICAgaWYgKCEoXCJzaG93Tm90aWZpY2F0aW9uXCIgaW4gU2VydmljZVdvcmtlclJlZ2lzdHJhdGlvbi5wcm90b3R5cGUpKSB7XG4gICAgICBjb25zb2xlLndhcm4oXCJOb3RpZmljYXRpb25zIGFyZW5cXFwidCBzdXBwb3J0ZWQuXCIpO1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIC8vIENoZWNrIHRoZSBjdXJyZW50IE5vdGlmaWNhdGlvbiBwZXJtaXNzaW9uLiAgXG4gICAgLy8gSWYgaXRzIGRlbmllZCwgaXQncyBhIHBlcm1hbmVudCBibG9jayB1bnRpbCB0aGUgIFxuICAgIC8vIHVzZXIgY2hhbmdlcyB0aGUgcGVybWlzc2lvbiAgXG4gICAgaWYgKE5vdGlmaWNhdGlvbi5wZXJtaXNzaW9uID09PSBcImRlbmllZFwiKSB7XG4gICAgICBjb25zb2xlLndhcm4oXCJUaGUgdXNlciBoYXMgYmxvY2tlZCBub3RpZmljYXRpb25zLlwiKTtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICAvLyBDaGVjayBpZiBwdXNoIG1lc3NhZ2luZyBpcyBzdXBwb3J0ZWQgIFxuICAgIGlmICghKFwiUHVzaE1hbmFnZXJcIiBpbiB3aW5kb3cpKSB7XG4gICAgICBjb25zb2xlLndhcm4oXCJQdXNoIG1lc3NhZ2luZyBpc25cXCd0IHN1cHBvcnRlZC5cIik7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
