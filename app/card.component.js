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
var message_1 = require("./dtos/message");
var MessageComponent = (function () {
    function MessageComponent() {
    }
    __decorate([
        core_1.Input(), 
        __metadata('design:type', message_1.Message)
    ], MessageComponent.prototype, "message", void 0);
    MessageComponent = __decorate([
        core_1.Component({
            selector: "my-message",
            templateUrl: "./app/message.component.html",
        }), 
        __metadata('design:paramtypes', [])
    ], MessageComponent);
    return MessageComponent;
}());
exports.MessageComponent = MessageComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNsaWVudC9hcHAvY2FyZC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUFpQyxlQUFlLENBQUMsQ0FBQTtBQUNqRCx3QkFBd0IsZ0JBRXhCLENBQUMsQ0FGdUM7QUFNeEM7SUFBQTtJQUVBLENBQUM7SUFERztRQUFDLFlBQUssRUFBRTs7cURBQUE7SUFMWjtRQUFDLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsWUFBWTtZQUN0QixXQUFXLEVBQUUsOEJBQThCO1NBQzVDLENBQUM7O3dCQUFBO0lBR0YsdUJBQUM7QUFBRCxDQUZBLEFBRUMsSUFBQTtBQUZZLHdCQUFnQixtQkFFNUIsQ0FBQSIsImZpbGUiOiJjbGllbnQvYXBwL2NhcmQuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBNZXNzYWdlIH0gZnJvbSBcIi4vZHRvcy9tZXNzYWdlXCJcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiBcIm15LW1lc3NhZ2VcIixcbiAgdGVtcGxhdGVVcmw6IFwiLi9hcHAvbWVzc2FnZS5jb21wb25lbnQuaHRtbFwiLFxufSlcbmV4cG9ydCBjbGFzcyBNZXNzYWdlQ29tcG9uZW50IHtcbiAgICBASW5wdXQoKSBtZXNzYWdlOiBNZXNzYWdlO1xufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
