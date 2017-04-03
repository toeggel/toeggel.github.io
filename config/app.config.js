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
var AppConfig = (function () {
    function AppConfig() {
        this.apiEndpoint = "https://mawewebapi.azurewebsites.net/api"; // https://mawewebapi.azurewebsites.net/api", "http://localhost:22603/api"
    }
    AppConfig = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], AppConfig);
    return AppConfig;
}());
exports.AppConfig = AppConfig;
;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNsaWVudC9jb25maWcvYXBwLmNvbmZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQTJCLGVBQWUsQ0FBQyxDQUFBO0FBRzNDO0lBSUk7UUFDSSxJQUFJLENBQUMsV0FBVyxHQUFHLDBDQUEwQyxDQUFDLENBQUMsMEVBQTBFO0lBQzdJLENBQUM7SUFQTDtRQUFDLGlCQUFVLEVBQUU7O2lCQUFBO0lBU2IsZ0JBQUM7QUFBRCxDQVJBLEFBUUMsSUFBQTtBQVJZLGlCQUFTLFlBUXJCLENBQUE7QUFBQSxDQUFDIiwiZmlsZSI6ImNsaWVudC9jb25maWcvYXBwLmNvbmZpZy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgQXBwQ29uZmlnICB7XHJcblxyXG4gICAgcHVibGljIGFwaUVuZHBvaW50OiBzdHJpbmc7XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5hcGlFbmRwb2ludCA9IFwiaHR0cHM6Ly9tYXdld2ViYXBpLmF6dXJld2Vic2l0ZXMubmV0L2FwaVwiOyAvLyBodHRwczovL21hd2V3ZWJhcGkuYXp1cmV3ZWJzaXRlcy5uZXQvYXBpXCIsIFwiaHR0cDovL2xvY2FsaG9zdDoyMjYwMy9hcGlcIlxyXG4gICAgfVxyXG5cclxufTtcclxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
