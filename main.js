"use strict";
var platform_browser_dynamic_1 = require("@angular/platform-browser-dynamic");
var core_1 = require("@angular/core");
var index_1 = require("./app/index");
var app_module_1 = require("./app/app.module");
if (index_1.environment.production) {
    core_1.enableProdMode();
}
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNsaWVudC9tYWluLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSx5Q0FBdUMsbUNBQW1DLENBQUMsQ0FBQTtBQUMzRSxxQkFBK0IsZUFBZSxDQUFDLENBQUE7QUFDL0Msc0JBQTRCLGFBQWEsQ0FBQyxDQUFBO0FBQzFDLDJCQUEwQixrQkFBa0IsQ0FBQyxDQUFBO0FBRTdDLEVBQUUsQ0FBQyxDQUFDLG1CQUFXLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQztJQUMzQixxQkFBYyxFQUFFLENBQUM7QUFDbkIsQ0FBQztBQUVELGlEQUFzQixFQUFFLENBQUMsZUFBZSxDQUFDLHNCQUFTLENBQUMsQ0FBQyIsImZpbGUiOiJjbGllbnQvbWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHBsYXRmb3JtQnJvd3NlckR5bmFtaWMgfSBmcm9tIFwiQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlci1keW5hbWljXCI7XG5pbXBvcnQgeyBlbmFibGVQcm9kTW9kZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBlbnZpcm9ubWVudCB9IGZyb20gXCIuL2FwcC9pbmRleFwiO1xuaW1wb3J0IHsgQXBwTW9kdWxlIH0gZnJvbSBcIi4vYXBwL2FwcC5tb2R1bGVcIjtcblxuaWYgKGVudmlyb25tZW50LnByb2R1Y3Rpb24pIHtcbiAgZW5hYmxlUHJvZE1vZGUoKTtcbn1cblxucGxhdGZvcm1Ccm93c2VyRHluYW1pYygpLmJvb3RzdHJhcE1vZHVsZShBcHBNb2R1bGUpO1xuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9