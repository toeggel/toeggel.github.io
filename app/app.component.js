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
    function AppComponent() {
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
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNsaWVudC9hcHAvYXBwLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQXdDLGVBQWUsQ0FBQyxDQUFBO0FBUXhEO0lBTUU7UUFITyxjQUFTLEdBQVksS0FBSyxDQUFDO1FBQzNCLGNBQVMsR0FBWSxLQUFLLENBQUM7UUFHaEMsSUFBSSxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUMsTUFBTSxLQUFLLEtBQUssQ0FBQztJQUM5QyxDQUFDO0lBR00sK0JBQVEsR0FBZjtRQUNFLE9BQU8sQ0FBQyxHQUFHLENBQUMsZUFBZSxDQUFDLENBQUM7UUFDN0IsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7UUFDdkIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO0lBQ3ZDLENBQUM7SUFHTSxnQ0FBUyxHQUFoQjtRQUNFLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO1FBQ3RCLE9BQU8sQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztRQUM5QixJQUFJLENBQUMsU0FBUyxDQUFDLHFCQUFxQixDQUFDLENBQUM7SUFDeEMsQ0FBQztJQUVNLHNDQUFlLEdBQXRCO1FBQ0UsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ3JCLENBQUM7SUFFTyxnQ0FBUyxHQUFqQixVQUFrQixPQUFlO1FBQWpDLGlCQU1DO1FBTEMsSUFBSSxDQUFDLFlBQVksR0FBRyxPQUFPLENBQUM7UUFDNUIsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7UUFDdEIsVUFBVSxDQUFDO1lBQ1QsS0FBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7UUFDekIsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ1gsQ0FBQztJQUVPLGtDQUFXLEdBQW5CO1FBQ0UsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLEtBQUssQ0FBQztZQUNmLENBQUMsQ0FBQyxrQkFBa0IsQ0FBUyxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQzNDLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQTlCRDtRQUFDLG1CQUFZLENBQUMsZUFBZSxDQUFDOzs7O2dEQUFBO0lBTzlCO1FBQUMsbUJBQVksQ0FBQyxnQkFBZ0IsQ0FBQzs7OztpREFBQTtJQXJCakM7UUFBQyxnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLFFBQVE7WUFDbEIsV0FBVyxFQUFFLDBCQUEwQjtTQUN4QyxDQUFDOztvQkFBQTtJQTBDRixtQkFBQztBQUFELENBekNBLEFBeUNDLElBQUE7QUF6Q1ksb0JBQVksZUF5Q3hCLENBQUEiLCJmaWxlIjoiY2xpZW50L2FwcC9hcHAuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBIb3N0TGlzdGVuZXIgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuXG5kZWNsYXJlIHZhciAkOiBKUXVlcnlTdGF0aWM7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogXCJteS1hcHBcIixcbiAgdGVtcGxhdGVVcmw6IFwiLi9hcHAvYXBwLmNvbXBvbmVudC5odG1sXCIsXG59KVxuZXhwb3J0IGNsYXNzIEFwcENvbXBvbmVudCB7XG5cbiAgcHVibGljIHNuYWNrTWVzc2FnZTogc3RyaW5nO1xuICBwdWJsaWMgaXNWaXNpYmxlOiBib29sZWFuID0gZmFsc2U7XG4gIHB1YmxpYyBpc09mZmxpbmU6IGJvb2xlYW4gPSBmYWxzZTtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmlzT2ZmbGluZSA9IG5hdmlnYXRvci5vbkxpbmUgPT09IGZhbHNlO1xuICB9XG5cbiAgQEhvc3RMaXN0ZW5lcihcIndpbmRvdzpvbmxpbmVcIilcbiAgcHVibGljIG9uT25saW5lKCkge1xuICAgIGNvbnNvbGUubG9nKFwid2luZG93Om9ubGluZVwiKTtcbiAgICB0aGlzLmlzT2ZmbGluZSA9IGZhbHNlO1xuICAgIHRoaXMuc2hvd1NuYWNrKFwieW91IGFyZSBub3cgb25saW5lXCIpO1xuICB9XG5cbiAgQEhvc3RMaXN0ZW5lcihcIndpbmRvdzpvZmZsaW5lXCIpXG4gIHB1YmxpYyBvbk9mZmxpbmUoKSB7XG4gICAgdGhpcy5pc09mZmxpbmUgPSB0cnVlO1xuICAgIGNvbnNvbGUubG9nKFwid2luZG93Om9mZmxpbmVcIik7XG4gICAgdGhpcy5zaG93U25hY2soXCJ5b3UgYXJlIG5vdyBvZmZsaW5lXCIpO1xuICB9XG5cbiAgcHVibGljIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICB0aGlzLmluaXRTaWRlTmF2KCk7XG4gIH1cblxuICBwcml2YXRlIHNob3dTbmFjayhtZXNzYWdlOiBzdHJpbmcpIHtcbiAgICB0aGlzLnNuYWNrTWVzc2FnZSA9IG1lc3NhZ2U7XG4gICAgdGhpcy5pc1Zpc2libGUgPSB0cnVlO1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy5pc1Zpc2libGUgPSBmYWxzZTtcbiAgICB9LCAzMDAwKTtcbiAgfVxuXG4gIHByaXZhdGUgaW5pdFNpZGVOYXYoKSB7XG4gICAgJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKSB7XG4gICAgICAoJChcIi5idXR0b24tY29sbGFwc2VcIikgYXMgYW55KS5zaWRlTmF2KCk7XG4gICAgfSk7XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
