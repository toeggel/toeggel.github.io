"use strict";
var router_1 = require("@angular/router");
var home_component_1 = require("./home.component");
var camera_component_1 = require("./camera.component");
var push_notification_component_1 = require("./push-notification.component");
var appRoutes = [
    {
        path: "",
        redirectTo: "/home",
        pathMatch: "full",
    },
    {
        path: "home",
        component: home_component_1.HomeComponent,
    },
    {
        path: "camera",
        component: camera_component_1.CameraComponent,
    },
    {
        path: "pushNotification",
        component: push_notification_component_1.PushNotificationComponent,
    },
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNsaWVudC9hcHAvYXBwLnJvdXRpbmcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHVCQUFxQyxpQkFBaUIsQ0FBQyxDQUFBO0FBRXZELCtCQUE4QixrQkFBa0IsQ0FBQyxDQUFBO0FBQ2pELGlDQUFnQyxvQkFBb0IsQ0FBQyxDQUFBO0FBQ3JELDRDQUEwQywrQkFBK0IsQ0FBQyxDQUFBO0FBRTFFLElBQU0sU0FBUyxHQUFXO0lBQ3hCO1FBQ0UsSUFBSSxFQUFFLEVBQUU7UUFDUixVQUFVLEVBQUUsT0FBTztRQUNuQixTQUFTLEVBQUUsTUFBTTtLQUNsQjtJQUNEO1FBQ0UsSUFBSSxFQUFFLE1BQU07UUFDWixTQUFTLEVBQUUsOEJBQWE7S0FDekI7SUFDRDtRQUNFLElBQUksRUFBRSxRQUFRO1FBQ2QsU0FBUyxFQUFFLGtDQUFlO0tBQzNCO0lBQ0Q7UUFDRSxJQUFJLEVBQUUsa0JBQWtCO1FBQ3hCLFNBQVMsRUFBRSx1REFBeUI7S0FDckM7Q0FDRixDQUFDO0FBRVcsZUFBTyxHQUFHLHFCQUFZLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDIiwiZmlsZSI6ImNsaWVudC9hcHAvYXBwLnJvdXRpbmcuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBSb3V0ZXMsIFJvdXRlck1vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcblxuaW1wb3J0IHsgSG9tZUNvbXBvbmVudCB9IGZyb20gXCIuL2hvbWUuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBDYW1lcmFDb21wb25lbnQgfSBmcm9tIFwiLi9jYW1lcmEuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBQdXNoTm90aWZpY2F0aW9uQ29tcG9uZW50IH0gZnJvbSBcIi4vcHVzaC1ub3RpZmljYXRpb24uY29tcG9uZW50XCI7XG5cbmNvbnN0IGFwcFJvdXRlczogUm91dGVzID0gW1xuICB7XG4gICAgcGF0aDogXCJcIixcbiAgICByZWRpcmVjdFRvOiBcIi9ob21lXCIsXG4gICAgcGF0aE1hdGNoOiBcImZ1bGxcIixcbiAgfSxcbiAge1xuICAgIHBhdGg6IFwiaG9tZVwiLFxuICAgIGNvbXBvbmVudDogSG9tZUNvbXBvbmVudCxcbiAgfSxcbiAge1xuICAgIHBhdGg6IFwiY2FtZXJhXCIsXG4gICAgY29tcG9uZW50OiBDYW1lcmFDb21wb25lbnQsXG4gIH0sXG4gIHtcbiAgICBwYXRoOiBcInB1c2hOb3RpZmljYXRpb25cIixcbiAgICBjb21wb25lbnQ6IFB1c2hOb3RpZmljYXRpb25Db21wb25lbnQsXG4gIH0sXG5dO1xuXG5leHBvcnQgY29uc3Qgcm91dGluZyA9IFJvdXRlck1vZHVsZS5mb3JSb290KGFwcFJvdXRlcyk7XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
