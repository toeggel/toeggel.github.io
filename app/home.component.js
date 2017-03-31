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
require("rxjs/add/operator/toPromise");
var HomeComponent = (function () {
    function HomeComponent(messageService) {
        this.messageService = messageService;
        this.messages = [];
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.messageService.getMessages()
            .then(function (messages) {
            _this.messages = messages;
        })
            .catch(function (reason) {
            console.log("error while loading messages: " + reason);
        });
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNsaWVudC9hcHAvaG9tZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUFrQyxlQUFlLENBQUMsQ0FBQTtBQUNsRCxnQ0FBK0IsNEJBQTRCLENBQUMsQ0FBQTtBQUU1RCxRQUFPLDZCQUE2QixDQUFDLENBQUE7QUFNckM7SUFJRSx1QkFBb0IsY0FBOEI7UUFBOUIsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBRjNDLGFBQVEsR0FBYyxFQUFFLENBQUM7SUFFc0IsQ0FBQztJQUVoRCxnQ0FBUSxHQUFmO1FBQUEsaUJBUUM7UUFQQyxJQUFJLENBQUMsY0FBYyxDQUFDLFdBQVcsRUFBRTthQUM5QixJQUFJLENBQUMsVUFBQSxRQUFRO1lBQ1osS0FBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7UUFDM0IsQ0FBQyxDQUFDO2FBQ0QsS0FBSyxDQUFDLFVBQUEsTUFBTTtZQUNYLE9BQU8sQ0FBQyxHQUFHLENBQUMsbUNBQWlDLE1BQVEsQ0FBQyxDQUFDO1FBQ3pELENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQWxCSDtRQUFDLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsU0FBUztZQUNuQixXQUFXLEVBQUUsMkJBQTJCO1NBQ3pDLENBQUM7O3FCQUFBO0lBZ0JGLG9CQUFDO0FBQUQsQ0FmQSxBQWVDLElBQUE7QUFmWSxxQkFBYSxnQkFlekIsQ0FBQSIsImZpbGUiOiJjbGllbnQvYXBwL2hvbWUuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgTWVzc2FnZVNlcnZpY2UgfSBmcm9tIFwiLi9zZXJ2aWNlcy9tZXNzYWdlLnNlcnZpY2VcIjtcbmltcG9ydCB7IE1lc3NhZ2UgfSBmcm9tIFwiLi9kdG9zL21lc3NhZ2VcIjtcbmltcG9ydCBcInJ4anMvYWRkL29wZXJhdG9yL3RvUHJvbWlzZVwiO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6IFwibXktaG9tZVwiLFxuICB0ZW1wbGF0ZVVybDogXCIuL2FwcC9ob21lLmNvbXBvbmVudC5odG1sXCIsXG59KVxuZXhwb3J0IGNsYXNzIEhvbWVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIHB1YmxpYyBtZXNzYWdlczogTWVzc2FnZVtdID0gW107XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBtZXNzYWdlU2VydmljZTogTWVzc2FnZVNlcnZpY2UpIHsgfVxuXG4gIHB1YmxpYyBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLm1lc3NhZ2VTZXJ2aWNlLmdldE1lc3NhZ2VzKClcbiAgICAgIC50aGVuKG1lc3NhZ2VzID0+IHtcbiAgICAgICAgdGhpcy5tZXNzYWdlcyA9IG1lc3NhZ2VzO1xuICAgICAgfSlcbiAgICAgIC5jYXRjaChyZWFzb24gPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhgZXJyb3Igd2hpbGUgbG9hZGluZyBtZXNzYWdlczogJHtyZWFzb259YCk7XG4gICAgICB9KTtcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
