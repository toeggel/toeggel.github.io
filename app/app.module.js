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
                snackbar_component_1.SnackbarComponent,
            ],
            providers: [
                message_service_1.MessageService,
                { provide: Navigator, useValue: navigator },
            ],
            bootstrap: [app_component_1.AppComponent],
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNsaWVudC9hcHAvYXBwLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQThCLGVBQWUsQ0FBQyxDQUFBO0FBQzlDLGlDQUE4QiwyQkFBMkIsQ0FBQyxDQUFBO0FBQzFELHNCQUE4QixnQkFBZ0IsQ0FBQyxDQUFBO0FBQy9DLHFCQUE4QixlQUFlLENBQUMsQ0FBQTtBQUU5Qyw4QkFBK0IsaUJBQWlCLENBQUMsQ0FBQTtBQUNqRCwrQkFBK0Isa0JBQWtCLENBQUMsQ0FBQTtBQUNsRCxrQ0FBa0MscUJBQXFCLENBQUMsQ0FBQTtBQUN4RCxnQ0FBZ0MsNEJBQTRCLENBQUMsQ0FBQTtBQUM3RCxtQ0FBbUMsc0JBQXNCLENBQUMsQ0FBQTtBQUMxRCw0QkFBK0IsZUFBZSxDQUFDLENBQUE7QUFzQi9DO0lBQUE7SUFBeUIsQ0FBQztJQW5CMUI7UUFBQyxlQUFRLENBQUM7WUFDUixPQUFPLEVBQUU7Z0JBQ1AsZ0NBQWE7Z0JBQ2IsbUJBQVc7Z0JBQ1gsaUJBQVU7Z0JBQ1YscUJBQU87YUFDUjtZQUNELFlBQVksRUFBRTtnQkFDWiw0QkFBWTtnQkFDWiw4QkFBYTtnQkFDYixvQ0FBZ0I7Z0JBQ2hCLHNDQUFpQjthQUNsQjtZQUNELFNBQVMsRUFBRTtnQkFDVCxnQ0FBYztnQkFDZCxFQUFFLE9BQU8sRUFBRSxTQUFTLEVBQUUsUUFBUSxFQUFFLFNBQVMsRUFBRTthQUM1QztZQUNELFNBQVMsRUFBRSxDQUFFLDRCQUFZLENBQUU7U0FDNUIsQ0FBQzs7aUJBQUE7SUFDdUIsZ0JBQUM7QUFBRCxDQUF6QixBQUEwQixJQUFBO0FBQWIsaUJBQVMsWUFBSSxDQUFBIiwiZmlsZSI6ImNsaWVudC9hcHAvYXBwLm1vZHVsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gICAgICBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgQnJvd3Nlck1vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyXCI7XG5pbXBvcnQgeyBGb3Jtc01vZHVsZSB9ICAgZnJvbSBcIkBhbmd1bGFyL2Zvcm1zXCI7XG5pbXBvcnQgeyBIdHRwTW9kdWxlIH0gICAgZnJvbSBcIkBhbmd1bGFyL2h0dHBcIjtcblxuaW1wb3J0IHsgQXBwQ29tcG9uZW50IH0gICBmcm9tIFwiLi9hcHAuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBIb21lQ29tcG9uZW50IH0gIGZyb20gXCIuL2hvbWUuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBNZXNzYWdlQ29tcG9uZW50IH0gIGZyb20gXCIuL21lc3NhZ2UuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBNZXNzYWdlU2VydmljZSB9ICBmcm9tIFwiLi9zZXJ2aWNlcy9tZXNzYWdlLnNlcnZpY2VcIjtcbmltcG9ydCB7IFNuYWNrYmFyQ29tcG9uZW50IH0gIGZyb20gXCIuL3NuYWNrYmFyLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgcm91dGluZyB9ICAgICAgICBmcm9tIFwiLi9hcHAucm91dGluZ1wiO1xuXG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBCcm93c2VyTW9kdWxlLFxuICAgIEZvcm1zTW9kdWxlLFxuICAgIEh0dHBNb2R1bGUsXG4gICAgcm91dGluZyxcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgQXBwQ29tcG9uZW50LFxuICAgIEhvbWVDb21wb25lbnQsXG4gICAgTWVzc2FnZUNvbXBvbmVudCxcbiAgICBTbmFja2JhckNvbXBvbmVudCxcbiAgXSxcbiAgcHJvdmlkZXJzOiBbXG4gICAgTWVzc2FnZVNlcnZpY2UsXG4gICAgeyBwcm92aWRlOiBOYXZpZ2F0b3IsIHVzZVZhbHVlOiBuYXZpZ2F0b3IgfSxcbiAgXSxcbiAgYm9vdHN0cmFwOiBbIEFwcENvbXBvbmVudCBdLFxufSlcbmV4cG9ydCBjbGFzcyBBcHBNb2R1bGUgeyB9XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
