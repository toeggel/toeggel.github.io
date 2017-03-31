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
var push_notification_component_1 = require("./push-notification.component");
var message_service_1 = require("./services/message.service");
var camera_component_1 = require("./camera.component");
var snackbar_component_1 = require("./snackbar.component");
var app_routing_1 = require("./app.routing");
var app_config_1 = require("../config/app.config");
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
                push_notification_component_1.PushNotificationComponent,
                camera_component_1.CameraComponent,
                snackbar_component_1.SnackbarComponent,
            ],
            providers: [
                message_service_1.MessageService,
                app_config_1.AppConfig,
            ],
            bootstrap: [app_component_1.AppComponent],
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNsaWVudC9hcHAvYXBwLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQThCLGVBQWUsQ0FBQyxDQUFBO0FBQzlDLGlDQUE4QiwyQkFBMkIsQ0FBQyxDQUFBO0FBQzFELHNCQUE4QixnQkFBZ0IsQ0FBQyxDQUFBO0FBQy9DLHFCQUE4QixlQUFlLENBQUMsQ0FBQTtBQUU5Qyw4QkFBK0IsaUJBQWlCLENBQUMsQ0FBQTtBQUNqRCwrQkFBK0Isa0JBQWtCLENBQUMsQ0FBQTtBQUNsRCxrQ0FBa0MscUJBQXFCLENBQUMsQ0FBQTtBQUN4RCw0Q0FBMkMsK0JBQStCLENBQUMsQ0FBQTtBQUMzRSxnQ0FBZ0MsNEJBQTRCLENBQUMsQ0FBQTtBQUM3RCxpQ0FBaUMsb0JBQW9CLENBQUMsQ0FBQTtBQUN0RCxtQ0FBbUMsc0JBQXNCLENBQUMsQ0FBQTtBQUUxRCw0QkFBK0IsZUFBZSxDQUFDLENBQUE7QUFDL0MsMkJBQStCLHNCQUFzQixDQUFDLENBQUE7QUF1QnREO0lBQUE7SUFBeUIsQ0FBQztJQXJCMUI7UUFBQyxlQUFRLENBQUM7WUFDUixPQUFPLEVBQUU7Z0JBQ1AsZ0NBQWE7Z0JBQ2IsbUJBQVc7Z0JBQ1gsaUJBQVU7Z0JBQ1YscUJBQU87YUFDUjtZQUNELFlBQVksRUFBRTtnQkFDWiw0QkFBWTtnQkFDWiw4QkFBYTtnQkFDYixvQ0FBZ0I7Z0JBQ2hCLHVEQUF5QjtnQkFDekIsa0NBQWU7Z0JBQ2Ysc0NBQWlCO2FBQ2xCO1lBQ0QsU0FBUyxFQUFFO2dCQUNULGdDQUFjO2dCQUNkLHNCQUFTO2FBQ1Y7WUFDRCxTQUFTLEVBQUUsQ0FBRSw0QkFBWSxDQUFFO1NBQzVCLENBQUM7O2lCQUFBO0lBQ3VCLGdCQUFDO0FBQUQsQ0FBekIsQUFBMEIsSUFBQTtBQUFiLGlCQUFTLFlBQUksQ0FBQSIsImZpbGUiOiJjbGllbnQvYXBwL2FwcC5tb2R1bGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9ICAgICAgZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IEJyb3dzZXJNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3NlclwiO1xuaW1wb3J0IHsgRm9ybXNNb2R1bGUgfSAgIGZyb20gXCJAYW5ndWxhci9mb3Jtc1wiO1xuaW1wb3J0IHsgSHR0cE1vZHVsZSB9ICAgIGZyb20gXCJAYW5ndWxhci9odHRwXCI7XG5cbmltcG9ydCB7IEFwcENvbXBvbmVudCB9ICAgZnJvbSBcIi4vYXBwLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgSG9tZUNvbXBvbmVudCB9ICBmcm9tIFwiLi9ob21lLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgTWVzc2FnZUNvbXBvbmVudCB9ICBmcm9tIFwiLi9tZXNzYWdlLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgUHVzaE5vdGlmaWNhdGlvbkNvbXBvbmVudCB9ICBmcm9tIFwiLi9wdXNoLW5vdGlmaWNhdGlvbi5jb21wb25lbnRcIjtcbmltcG9ydCB7IE1lc3NhZ2VTZXJ2aWNlIH0gIGZyb20gXCIuL3NlcnZpY2VzL21lc3NhZ2Uuc2VydmljZVwiO1xuaW1wb3J0IHsgQ2FtZXJhQ29tcG9uZW50IH0gIGZyb20gXCIuL2NhbWVyYS5jb21wb25lbnRcIjtcbmltcG9ydCB7IFNuYWNrYmFyQ29tcG9uZW50IH0gIGZyb20gXCIuL3NuYWNrYmFyLmNvbXBvbmVudFwiO1xuXG5pbXBvcnQgeyByb3V0aW5nIH0gICAgICAgIGZyb20gXCIuL2FwcC5yb3V0aW5nXCI7XG5pbXBvcnQgeyBBcHBDb25maWcgfSAgICAgIGZyb20gXCIuLi9jb25maWcvYXBwLmNvbmZpZ1wiO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQnJvd3Nlck1vZHVsZSxcbiAgICBGb3Jtc01vZHVsZSxcbiAgICBIdHRwTW9kdWxlLFxuICAgIHJvdXRpbmcsXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW1xuICAgIEFwcENvbXBvbmVudCxcbiAgICBIb21lQ29tcG9uZW50LFxuICAgIE1lc3NhZ2VDb21wb25lbnQsXG4gICAgUHVzaE5vdGlmaWNhdGlvbkNvbXBvbmVudCxcbiAgICBDYW1lcmFDb21wb25lbnQsXG4gICAgU25hY2tiYXJDb21wb25lbnQsXG4gIF0sXG4gIHByb3ZpZGVyczogW1xuICAgIE1lc3NhZ2VTZXJ2aWNlLFxuICAgIEFwcENvbmZpZyxcbiAgXSxcbiAgYm9vdHN0cmFwOiBbIEFwcENvbXBvbmVudCBdLFxufSlcbmV4cG9ydCBjbGFzcyBBcHBNb2R1bGUgeyB9XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
