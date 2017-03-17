"use strict";
var router_1 = require("@angular/router");
var home_component_1 = require("./home.component");
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
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNsaWVudC9hcHAvYXBwLnJvdXRpbmcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHVCQUFxQyxpQkFBaUIsQ0FBQyxDQUFBO0FBRXZELCtCQUE4QixrQkFBa0IsQ0FBQyxDQUFBO0FBRWpELElBQU0sU0FBUyxHQUFXO0lBQ3hCO1FBQ0UsSUFBSSxFQUFFLEVBQUU7UUFDUixVQUFVLEVBQUUsT0FBTztRQUNuQixTQUFTLEVBQUUsTUFBTTtLQUNsQjtJQUNEO1FBQ0UsSUFBSSxFQUFFLE1BQU07UUFDWixTQUFTLEVBQUUsOEJBQWE7S0FDekI7Q0FDRixDQUFDO0FBRVcsZUFBTyxHQUFHLHFCQUFZLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDIiwiZmlsZSI6ImNsaWVudC9hcHAvYXBwLnJvdXRpbmcuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBSb3V0ZXMsIFJvdXRlck1vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcblxuaW1wb3J0IHsgSG9tZUNvbXBvbmVudCB9IGZyb20gXCIuL2hvbWUuY29tcG9uZW50XCI7XG5cbmNvbnN0IGFwcFJvdXRlczogUm91dGVzID0gW1xuICB7XG4gICAgcGF0aDogXCJcIixcbiAgICByZWRpcmVjdFRvOiBcIi9ob21lXCIsXG4gICAgcGF0aE1hdGNoOiBcImZ1bGxcIixcbiAgfSxcbiAge1xuICAgIHBhdGg6IFwiaG9tZVwiLFxuICAgIGNvbXBvbmVudDogSG9tZUNvbXBvbmVudCxcbiAgfSxcbl07XG5cbmV4cG9ydCBjb25zdCByb3V0aW5nID0gUm91dGVyTW9kdWxlLmZvclJvb3QoYXBwUm91dGVzKTtcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
