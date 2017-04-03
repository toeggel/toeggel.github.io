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
var app_config_1 = require("../../config/app.config");
var MessageService = (function () {
    function MessageService(http, appConfig) {
        this.http = http;
        this.appConfig = appConfig;
        this.baseUrl = appConfig.apiEndpoint;
    }
    MessageService.prototype.getMessages = function () {
        if (this.baseUrl) {
            return this.http.get(this.baseUrl + "/messages")
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
        __metadata('design:paramtypes', [http_1.Http, app_config_1.AppConfig])
    ], MessageService);
    return MessageService;
}());
exports.MessageService = MessageService;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNsaWVudC9hcHAvc2VydmljZXMvbWVzc2FnZS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBMkIsZUFBZSxDQUFDLENBQUE7QUFDM0MscUJBQXFCLGVBQWUsQ0FBQyxDQUFBO0FBRXJDLFFBQU8sNkJBQTZCLENBQUMsQ0FBQTtBQUdyQyw4QkFBeUIsaUJBQWlCLENBQUMsQ0FBQTtBQUUzQywyQkFBMEIseUJBQXlCLENBQUMsQ0FBQTtBQUdwRDtJQUlJLHdCQUFvQixJQUFVLEVBQVUsU0FBb0I7UUFBeEMsU0FBSSxHQUFKLElBQUksQ0FBTTtRQUFVLGNBQVMsR0FBVCxTQUFTLENBQVc7UUFDeEQsSUFBSSxDQUFDLE9BQU8sR0FBRyxTQUFTLENBQUMsV0FBVyxDQUFDO0lBQ3pDLENBQUM7SUFFTSxvQ0FBVyxHQUFsQjtRQUNJLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO1lBQ2YsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxPQUFPLEdBQUcsV0FBVyxDQUFDO2lCQUMzQyxTQUFTLEVBQUU7aUJBQ1gsSUFBSSxDQUFDLFVBQUEsUUFBUSxJQUFJLE9BQUEsUUFBUSxDQUFDLElBQUksRUFBZSxFQUE1QixDQUE0QixDQUFDO2lCQUM5QyxLQUFLLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQ2pDLENBQUM7UUFBQyxJQUFJLENBQUMsQ0FBQztZQUNKLE1BQU0sQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLHdCQUFRLENBQUMsQ0FBQztRQUNyQyxDQUFDO0lBQ0wsQ0FBQztJQUVPLG9DQUFXLEdBQW5CLFVBQW9CLEtBQVU7UUFDMUIsT0FBTyxDQUFDLEtBQUssQ0FBQyxtQkFBbUIsRUFBRSxLQUFLLENBQUMsQ0FBQztRQUMxQyxNQUFNLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsT0FBTyxJQUFJLEtBQUssQ0FBQyxDQUFDO0lBQ2xELENBQUM7SUF2Qkw7UUFBQyxpQkFBVSxFQUFFOztzQkFBQTtJQXdCYixxQkFBQztBQUFELENBdkJBLEFBdUJDLElBQUE7QUF2Qlksc0JBQWMsaUJBdUIxQixDQUFBIiwiZmlsZSI6ImNsaWVudC9hcHAvc2VydmljZXMvbWVzc2FnZS5zZXJ2aWNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IEh0dHAgfSBmcm9tIFwiQGFuZ3VsYXIvaHR0cFwiO1xyXG5cclxuaW1wb3J0IFwicnhqcy9hZGQvb3BlcmF0b3IvdG9Qcm9taXNlXCI7XHJcblxyXG5pbXBvcnQgeyBNZXNzYWdlIH0gZnJvbSBcIi4uL2R0b3MvbWVzc2FnZVwiO1xyXG5pbXBvcnQgeyBtZXNzYWdlcyB9IGZyb20gXCIuL21lc3NhZ2VzLW1vY2tcIjtcclxuXHJcbmltcG9ydCB7IEFwcENvbmZpZyB9IGZyb20gXCIuLi8uLi9jb25maWcvYXBwLmNvbmZpZ1wiO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgTWVzc2FnZVNlcnZpY2Uge1xyXG5cclxuICAgIHByaXZhdGUgYmFzZVVybDogc3RyaW5nOyAvLyBhZGQgVVJMIHRvIHdlYiBhcGkuIElmIGVtcHR5IC0tPiBtb2NrIGRhdGEgd2lsbCBiZSB1c2VkXHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwLCBwcml2YXRlIGFwcENvbmZpZzogQXBwQ29uZmlnKSB7XHJcbiAgICAgICAgdGhpcy5iYXNlVXJsID0gYXBwQ29uZmlnLmFwaUVuZHBvaW50O1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRNZXNzYWdlcygpOiBQcm9taXNlPE1lc3NhZ2VbXT4ge1xyXG4gICAgICAgIGlmICh0aGlzLmJhc2VVcmwpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQodGhpcy5iYXNlVXJsICsgXCIvbWVzc2FnZXNcIilcclxuICAgICAgICAgICAgICAgIC50b1Byb21pc2UoKVxyXG4gICAgICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpIGFzIE1lc3NhZ2VbXSlcclxuICAgICAgICAgICAgICAgIC5jYXRjaCh0aGlzLmhhbmRsZUVycm9yKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKG1lc3NhZ2VzKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBoYW5kbGVFcnJvcihlcnJvcjogYW55KSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihcIkFuIGVycm9yIG9jY3VycmVkXCIsIGVycm9yKTtcclxuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoZXJyb3IubWVzc2FnZSB8fCBlcnJvcik7XHJcbiAgICB9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
