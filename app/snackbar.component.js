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
var SnackbarComponent = (function () {
    function SnackbarComponent() {
    }
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], SnackbarComponent.prototype, "message", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], SnackbarComponent.prototype, "isVisible", void 0);
    SnackbarComponent = __decorate([
        core_1.Component({
            selector: "my-snackbar",
            templateUrl: "./app/snackbar.component.html",
            styleUrls: ["./app/snackbar.component.css"],
        }), 
        __metadata('design:paramtypes', [])
    ], SnackbarComponent);
    return SnackbarComponent;
}());
exports.SnackbarComponent = SnackbarComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNsaWVudC9hcHAvc25hY2tiYXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBaUMsZUFBZSxDQUFDLENBQUE7QUFPakQ7SUFBQTtJQUdBLENBQUM7SUFGQztRQUFDLFlBQUssRUFBRTs7c0RBQUE7SUFDUjtRQUFDLFlBQUssRUFBRTs7d0RBQUE7SUFQVjtRQUFDLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsYUFBYTtZQUN2QixXQUFXLEVBQUUsK0JBQStCO1lBQzVDLFNBQVMsRUFBRSxDQUFFLDhCQUE4QixDQUFFO1NBQzlDLENBQUM7O3lCQUFBO0lBSUYsd0JBQUM7QUFBRCxDQUhBLEFBR0MsSUFBQTtBQUhZLHlCQUFpQixvQkFHN0IsQ0FBQSIsImZpbGUiOiJjbGllbnQvYXBwL3NuYWNrYmFyLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6IFwibXktc25hY2tiYXJcIixcbiAgdGVtcGxhdGVVcmw6IFwiLi9hcHAvc25hY2tiYXIuY29tcG9uZW50Lmh0bWxcIixcbiAgc3R5bGVVcmxzOiBbIFwiLi9hcHAvc25hY2tiYXIuY29tcG9uZW50LmNzc1wiIF0sXG59KVxuZXhwb3J0IGNsYXNzIFNuYWNrYmFyQ29tcG9uZW50IHtcbiAgQElucHV0KCkgcHVibGljIG1lc3NhZ2U6IHN0cmluZztcbiAgQElucHV0KCkgcHVibGljIGlzVmlzaWJsZTogYm9vbGVhbjtcbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
