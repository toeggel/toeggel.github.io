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
var AppComponent = (function () {
    function AppComponent(navigator) {
        this.navigator = navigator;
        this.isVisible = false;
        this.isOffline = false;
        this.isOffline = navigator.onLine === false;
    }
    AppComponent.prototype.onOnline = function () {
        console.log("window:online");
        this.isOffline = false;
        this.showSnack("you are now online");
    };
    AppComponent.prototype.onOffline = function () {
        this.isOffline = true;
        console.log("window:offline");
        this.showSnack("you are now offline");
    };
    AppComponent.prototype.ngAfterViewInit = function () {
        this.initSideNav();
    };
    AppComponent.prototype.showSnack = function (message) {
        var _this = this;
        this.snackMessage = message;
        this.isVisible = true;
        setTimeout(function () {
            _this.isVisible = false;
        }, 3000);
    };
    AppComponent.prototype.initSideNav = function () {
        $(document).ready(function () {
            $(".button-collapse").sideNav();
        });
    };
    __decorate([
        core_1.HostListener("window:online"), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', []), 
        __metadata('design:returntype', void 0)
    ], AppComponent.prototype, "onOnline", null);
    __decorate([
        core_1.HostListener("window:offline"), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', []), 
        __metadata('design:returntype', void 0)
    ], AppComponent.prototype, "onOffline", null);
    AppComponent = __decorate([
        core_1.Component({
            selector: "my-app",
            templateUrl: "./app/app.component.html",
        }), 
        __metadata('design:paramtypes', [Navigator])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNsaWVudC9hcHAvYXBwLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQXdDLGVBQWUsQ0FBQyxDQUFBO0FBUXhEO0lBTUUsc0JBQW9CLFNBQW9CO1FBQXBCLGNBQVMsR0FBVCxTQUFTLENBQVc7UUFIakMsY0FBUyxHQUFZLEtBQUssQ0FBQztRQUMzQixjQUFTLEdBQVksS0FBSyxDQUFDO1FBR2hDLElBQUksQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDLE1BQU0sS0FBSyxLQUFLLENBQUM7SUFDOUMsQ0FBQztJQUdNLCtCQUFRLEdBQWY7UUFDRSxPQUFPLENBQUMsR0FBRyxDQUFDLGVBQWUsQ0FBQyxDQUFDO1FBQzdCLElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxTQUFTLENBQUMsb0JBQW9CLENBQUMsQ0FBQztJQUN2QyxDQUFDO0lBR00sZ0NBQVMsR0FBaEI7UUFDRSxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztRQUN0QixPQUFPLENBQUMsR0FBRyxDQUFDLGdCQUFnQixDQUFDLENBQUM7UUFDOUIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO0lBQ3hDLENBQUM7SUFFTSxzQ0FBZSxHQUF0QjtRQUNFLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUNyQixDQUFDO0lBRU8sZ0NBQVMsR0FBakIsVUFBa0IsT0FBZTtRQUFqQyxpQkFNQztRQUxDLElBQUksQ0FBQyxZQUFZLEdBQUcsT0FBTyxDQUFDO1FBQzVCLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO1FBQ3RCLFVBQVUsQ0FBQztZQUNULEtBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO1FBQ3pCLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUNYLENBQUM7SUFFTyxrQ0FBVyxHQUFuQjtRQUNFLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxLQUFLLENBQUM7WUFDZixDQUFDLENBQUMsa0JBQWtCLENBQVMsQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUMzQyxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUE5QkQ7UUFBQyxtQkFBWSxDQUFDLGVBQWUsQ0FBQzs7OztnREFBQTtJQU85QjtRQUFDLG1CQUFZLENBQUMsZ0JBQWdCLENBQUM7Ozs7aURBQUE7SUFyQmpDO1FBQUMsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxRQUFRO1lBQ2xCLFdBQVcsRUFBRSwwQkFBMEI7U0FDeEMsQ0FBQzs7b0JBQUE7SUEwQ0YsbUJBQUM7QUFBRCxDQXpDQSxBQXlDQyxJQUFBO0FBekNZLG9CQUFZLGVBeUN4QixDQUFBIiwiZmlsZSI6ImNsaWVudC9hcHAvYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSG9zdExpc3RlbmVyIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcblxuZGVjbGFyZSB2YXIgJDogSlF1ZXJ5U3RhdGljO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6IFwibXktYXBwXCIsXG4gIHRlbXBsYXRlVXJsOiBcIi4vYXBwL2FwcC5jb21wb25lbnQuaHRtbFwiLFxufSlcbmV4cG9ydCBjbGFzcyBBcHBDb21wb25lbnQge1xuXG4gIHB1YmxpYyBzbmFja01lc3NhZ2U6IHN0cmluZztcbiAgcHVibGljIGlzVmlzaWJsZTogYm9vbGVhbiA9IGZhbHNlO1xuICBwdWJsaWMgaXNPZmZsaW5lOiBib29sZWFuID0gZmFsc2U7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBuYXZpZ2F0b3I6IE5hdmlnYXRvcikge1xuICAgIHRoaXMuaXNPZmZsaW5lID0gbmF2aWdhdG9yLm9uTGluZSA9PT0gZmFsc2U7XG4gIH1cblxuICBASG9zdExpc3RlbmVyKFwid2luZG93Om9ubGluZVwiKVxuICBwdWJsaWMgb25PbmxpbmUoKSB7XG4gICAgY29uc29sZS5sb2coXCJ3aW5kb3c6b25saW5lXCIpO1xuICAgIHRoaXMuaXNPZmZsaW5lID0gZmFsc2U7XG4gICAgdGhpcy5zaG93U25hY2soXCJ5b3UgYXJlIG5vdyBvbmxpbmVcIik7XG4gIH1cblxuICBASG9zdExpc3RlbmVyKFwid2luZG93Om9mZmxpbmVcIilcbiAgcHVibGljIG9uT2ZmbGluZSgpIHtcbiAgICB0aGlzLmlzT2ZmbGluZSA9IHRydWU7XG4gICAgY29uc29sZS5sb2coXCJ3aW5kb3c6b2ZmbGluZVwiKTtcbiAgICB0aGlzLnNob3dTbmFjayhcInlvdSBhcmUgbm93IG9mZmxpbmVcIik7XG4gIH1cblxuICBwdWJsaWMgbmdBZnRlclZpZXdJbml0KCkge1xuICAgIHRoaXMuaW5pdFNpZGVOYXYoKTtcbiAgfVxuXG4gIHByaXZhdGUgc2hvd1NuYWNrKG1lc3NhZ2U6IHN0cmluZykge1xuICAgIHRoaXMuc25hY2tNZXNzYWdlID0gbWVzc2FnZTtcbiAgICB0aGlzLmlzVmlzaWJsZSA9IHRydWU7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLmlzVmlzaWJsZSA9IGZhbHNlO1xuICAgIH0sIDMwMDApO1xuICB9XG5cbiAgcHJpdmF0ZSBpbml0U2lkZU5hdigpIHtcbiAgICAkKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpIHtcbiAgICAgICgkKFwiLmJ1dHRvbi1jb2xsYXBzZVwiKSBhcyBhbnkpLnNpZGVOYXYoKTtcbiAgICB9KTtcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
