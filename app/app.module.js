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
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
var app_component_1 = require("./app.component");
var home_component_1 = require("./home.component");
var message_component_1 = require("./message.component");
var message_service_1 = require("./services/message.service");
var camera_component_1 = require("./camera.component");
var snackbar_component_1 = require("./snackbar.component");
var app_routing_1 = require("./app.routing");
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                http_1.HttpModule,
                app_routing_1.routing,
            ],
            declarations: [
                app_component_1.AppComponent,
                home_component_1.HomeComponent,
                message_component_1.MessageComponent,
                camera_component_1.CameraComponent,
                snackbar_component_1.SnackbarComponent,
            ],
            providers: [
                message_service_1.MessageService,
            ],
            bootstrap: [app_component_1.AppComponent],
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNsaWVudC9hcHAvYXBwLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQThCLGVBQWUsQ0FBQyxDQUFBO0FBQzlDLGlDQUE4QiwyQkFBMkIsQ0FBQyxDQUFBO0FBQzFELHNCQUE4QixnQkFBZ0IsQ0FBQyxDQUFBO0FBQy9DLHFCQUE4QixlQUFlLENBQUMsQ0FBQTtBQUU5Qyw4QkFBK0IsaUJBQWlCLENBQUMsQ0FBQTtBQUNqRCwrQkFBK0Isa0JBQWtCLENBQUMsQ0FBQTtBQUNsRCxrQ0FBa0MscUJBQXFCLENBQUMsQ0FBQTtBQUN4RCxnQ0FBZ0MsNEJBQTRCLENBQUMsQ0FBQTtBQUM3RCxpQ0FBaUMsb0JBQW9CLENBQUMsQ0FBQTtBQUN0RCxtQ0FBbUMsc0JBQXNCLENBQUMsQ0FBQTtBQUMxRCw0QkFBK0IsZUFBZSxDQUFDLENBQUE7QUFzQi9DO0lBQUE7SUFBeUIsQ0FBQztJQW5CMUI7UUFBQyxlQUFRLENBQUM7WUFDUixPQUFPLEVBQUU7Z0JBQ1AsZ0NBQWE7Z0JBQ2IsbUJBQVc7Z0JBQ1gsaUJBQVU7Z0JBQ1YscUJBQU87YUFDUjtZQUNELFlBQVksRUFBRTtnQkFDWiw0QkFBWTtnQkFDWiw4QkFBYTtnQkFDYixvQ0FBZ0I7Z0JBQ2hCLGtDQUFlO2dCQUNmLHNDQUFpQjthQUNsQjtZQUNELFNBQVMsRUFBRTtnQkFDVCxnQ0FBYzthQUNmO1lBQ0QsU0FBUyxFQUFFLENBQUUsNEJBQVksQ0FBRTtTQUM1QixDQUFDOztpQkFBQTtJQUN1QixnQkFBQztBQUFELENBQXpCLEFBQTBCLElBQUE7QUFBYixpQkFBUyxZQUFJLENBQUEiLCJmaWxlIjoiY2xpZW50L2FwcC9hcHAubW9kdWxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSAgICAgIGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBCcm93c2VyTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXJcIjtcbmltcG9ydCB7IEZvcm1zTW9kdWxlIH0gICBmcm9tIFwiQGFuZ3VsYXIvZm9ybXNcIjtcbmltcG9ydCB7IEh0dHBNb2R1bGUgfSAgICBmcm9tIFwiQGFuZ3VsYXIvaHR0cFwiO1xuXG5pbXBvcnQgeyBBcHBDb21wb25lbnQgfSAgIGZyb20gXCIuL2FwcC5jb21wb25lbnRcIjtcbmltcG9ydCB7IEhvbWVDb21wb25lbnQgfSAgZnJvbSBcIi4vaG9tZS5jb21wb25lbnRcIjtcbmltcG9ydCB7IE1lc3NhZ2VDb21wb25lbnQgfSAgZnJvbSBcIi4vbWVzc2FnZS5jb21wb25lbnRcIjtcbmltcG9ydCB7IE1lc3NhZ2VTZXJ2aWNlIH0gIGZyb20gXCIuL3NlcnZpY2VzL21lc3NhZ2Uuc2VydmljZVwiO1xuaW1wb3J0IHsgQ2FtZXJhQ29tcG9uZW50IH0gIGZyb20gXCIuL2NhbWVyYS5jb21wb25lbnRcIjtcbmltcG9ydCB7IFNuYWNrYmFyQ29tcG9uZW50IH0gIGZyb20gXCIuL3NuYWNrYmFyLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgcm91dGluZyB9ICAgICAgICBmcm9tIFwiLi9hcHAucm91dGluZ1wiO1xuXG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBCcm93c2VyTW9kdWxlLFxuICAgIEZvcm1zTW9kdWxlLFxuICAgIEh0dHBNb2R1bGUsXG4gICAgcm91dGluZyxcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgQXBwQ29tcG9uZW50LFxuICAgIEhvbWVDb21wb25lbnQsXG4gICAgTWVzc2FnZUNvbXBvbmVudCxcbiAgICBDYW1lcmFDb21wb25lbnQsXG4gICAgU25hY2tiYXJDb21wb25lbnQsXG4gIF0sXG4gIHByb3ZpZGVyczogW1xuICAgIE1lc3NhZ2VTZXJ2aWNlLFxuICBdLFxuICBib290c3RyYXA6IFsgQXBwQ29tcG9uZW50IF0sXG59KVxuZXhwb3J0IGNsYXNzIEFwcE1vZHVsZSB7IH1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
