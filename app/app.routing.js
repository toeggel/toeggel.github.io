"use strict";
var router_1 = require("@angular/router");
var home_component_1 = require("./home.component");
var camera_component_1 = require("./camera.component");
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
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNsaWVudC9hcHAvYXBwLnJvdXRpbmcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHVCQUFxQyxpQkFBaUIsQ0FBQyxDQUFBO0FBRXZELCtCQUE4QixrQkFBa0IsQ0FBQyxDQUFBO0FBQ2pELGlDQUFnQyxvQkFBb0IsQ0FBQyxDQUFBO0FBRXJELElBQU0sU0FBUyxHQUFXO0lBQ3hCO1FBQ0UsSUFBSSxFQUFFLEVBQUU7UUFDUixVQUFVLEVBQUUsT0FBTztRQUNuQixTQUFTLEVBQUUsTUFBTTtLQUNsQjtJQUNEO1FBQ0UsSUFBSSxFQUFFLE1BQU07UUFDWixTQUFTLEVBQUUsOEJBQWE7S0FDekI7SUFDRDtRQUNFLElBQUksRUFBRSxRQUFRO1FBQ2QsU0FBUyxFQUFFLGtDQUFlO0tBQzNCO0NBQ0YsQ0FBQztBQUVXLGVBQU8sR0FBRyxxQkFBWSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQyIsImZpbGUiOiJjbGllbnQvYXBwL2FwcC5yb3V0aW5nLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUm91dGVzLCBSb3V0ZXJNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG5cbmltcG9ydCB7IEhvbWVDb21wb25lbnQgfSBmcm9tIFwiLi9ob21lLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgQ2FtZXJhQ29tcG9uZW50IH0gZnJvbSBcIi4vY2FtZXJhLmNvbXBvbmVudFwiO1xuXG5jb25zdCBhcHBSb3V0ZXM6IFJvdXRlcyA9IFtcbiAge1xuICAgIHBhdGg6IFwiXCIsXG4gICAgcmVkaXJlY3RUbzogXCIvaG9tZVwiLFxuICAgIHBhdGhNYXRjaDogXCJmdWxsXCIsXG4gIH0sXG4gIHtcbiAgICBwYXRoOiBcImhvbWVcIixcbiAgICBjb21wb25lbnQ6IEhvbWVDb21wb25lbnQsXG4gIH0sXG4gIHtcbiAgICBwYXRoOiBcImNhbWVyYVwiLFxuICAgIGNvbXBvbmVudDogQ2FtZXJhQ29tcG9uZW50LFxuICB9LFxuXTtcblxuZXhwb3J0IGNvbnN0IHJvdXRpbmcgPSBSb3V0ZXJNb2R1bGUuZm9yUm9vdChhcHBSb3V0ZXMpO1xuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
