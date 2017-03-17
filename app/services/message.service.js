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
var messages_mock_1 = require("./messages-mock");
var MessageService = (function () {
    function MessageService(http) {
        this.http = http;
        this.messagesUrl = "https://mawewebapi.azurewebsites.net/api/messages"; // add URL to web api. If empty --> mock data will be used
    }
    MessageService.prototype.getMessages = function () {
        if (this.messagesUrl) {
            return this.http.get(this.messagesUrl)
                .toPromise()
                .then(function (response) { return response.json(); })
                .catch(this.handleError);
        }
        else {
            return Promise.resolve(messages_mock_1.messages);
        }
    };
    MessageService.prototype.handleError = function (error) {
        console.error("An error occurred", error);
        return Promise.reject(error.message || error);
    };
    MessageService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], MessageService);
    return MessageService;
}());
exports.MessageService = MessageService;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNsaWVudC9hcHAvc2VydmljZXMvbWVzc2FnZS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBMkIsZUFBZSxDQUFDLENBQUE7QUFDM0MscUJBQXFCLGVBQWUsQ0FBQyxDQUFBO0FBRXJDLFFBQU8sNkJBQTZCLENBQUMsQ0FBQTtBQUdyQyw4QkFBeUIsaUJBQWlCLENBQUMsQ0FBQTtBQUczQztJQUlJLHdCQUFvQixJQUFVO1FBQVYsU0FBSSxHQUFKLElBQUksQ0FBTTtRQUZ0QixnQkFBVyxHQUFHLG1EQUFtRCxDQUFDLENBQUMsMERBQTBEO0lBRXBHLENBQUM7SUFFM0Isb0NBQVcsR0FBbEI7UUFDSSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQztZQUNuQixNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQztpQkFDakMsU0FBUyxFQUFFO2lCQUNYLElBQUksQ0FBQyxVQUFBLFFBQVEsSUFBSSxPQUFBLFFBQVEsQ0FBQyxJQUFJLEVBQWUsRUFBNUIsQ0FBNEIsQ0FBQztpQkFDOUMsS0FBSyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUNqQyxDQUFDO1FBQUMsSUFBSSxDQUFDLENBQUM7WUFDSixNQUFNLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyx3QkFBUSxDQUFDLENBQUM7UUFDckMsQ0FBQztJQUNMLENBQUM7SUFFTyxvQ0FBVyxHQUFuQixVQUFvQixLQUFVO1FBQzFCLE9BQU8sQ0FBQyxLQUFLLENBQUMsbUJBQW1CLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDMUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLE9BQU8sSUFBSSxLQUFLLENBQUMsQ0FBQztJQUNsRCxDQUFDO0lBckJMO1FBQUMsaUJBQVUsRUFBRTs7c0JBQUE7SUFzQmIscUJBQUM7QUFBRCxDQXJCQSxBQXFCQyxJQUFBO0FBckJZLHNCQUFjLGlCQXFCMUIsQ0FBQSIsImZpbGUiOiJjbGllbnQvYXBwL3NlcnZpY2VzL21lc3NhZ2Uuc2VydmljZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBIdHRwIH0gZnJvbSBcIkBhbmd1bGFyL2h0dHBcIjtcclxuXHJcbmltcG9ydCBcInJ4anMvYWRkL29wZXJhdG9yL3RvUHJvbWlzZVwiO1xyXG5cclxuaW1wb3J0IHsgTWVzc2FnZSB9IGZyb20gXCIuLi9kdG9zL21lc3NhZ2VcIjtcclxuaW1wb3J0IHsgbWVzc2FnZXMgfSBmcm9tIFwiLi9tZXNzYWdlcy1tb2NrXCI7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBNZXNzYWdlU2VydmljZSB7XHJcblxyXG4gICAgcHJpdmF0ZSBtZXNzYWdlc1VybCA9IFwiaHR0cHM6Ly9tYXdld2ViYXBpLmF6dXJld2Vic2l0ZXMubmV0L2FwaS9tZXNzYWdlc1wiOyAvLyBhZGQgVVJMIHRvIHdlYiBhcGkuIElmIGVtcHR5IC0tPiBtb2NrIGRhdGEgd2lsbCBiZSB1c2VkXHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwKSB7fVxyXG5cclxuICAgIHB1YmxpYyBnZXRNZXNzYWdlcygpOiBQcm9taXNlPE1lc3NhZ2VbXT4ge1xyXG4gICAgICAgIGlmICh0aGlzLm1lc3NhZ2VzVXJsKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KHRoaXMubWVzc2FnZXNVcmwpXHJcbiAgICAgICAgICAgICAgICAudG9Qcm9taXNlKClcclxuICAgICAgICAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSBhcyBNZXNzYWdlW10pXHJcbiAgICAgICAgICAgICAgICAuY2F0Y2godGhpcy5oYW5kbGVFcnJvcik7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShtZXNzYWdlcyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgaGFuZGxlRXJyb3IoZXJyb3I6IGFueSkge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJBbiBlcnJvciBvY2N1cnJlZFwiLCBlcnJvcik7XHJcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KGVycm9yLm1lc3NhZ2UgfHwgZXJyb3IpO1xyXG4gICAgfVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
