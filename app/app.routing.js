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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9hcHAucm91dGluZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsdUJBQXFDLGlCQUFpQixDQUFDLENBQUE7QUFFdkQsK0JBQThCLGtCQUFrQixDQUFDLENBQUE7QUFFakQsSUFBTSxTQUFTLEdBQVc7SUFDeEI7UUFDRSxJQUFJLEVBQUUsRUFBRTtRQUNSLFVBQVUsRUFBRSxPQUFPO1FBQ25CLFNBQVMsRUFBRSxNQUFNO0tBQ2xCO0lBQ0Q7UUFDRSxJQUFJLEVBQUUsTUFBTTtRQUNaLFNBQVMsRUFBRSw4QkFBYTtLQUN6QjtDQUNGLENBQUM7QUFFVyxlQUFPLEdBQUcscUJBQVksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUMiLCJmaWxlIjoiYXBwL2FwcC5yb3V0aW5nLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUm91dGVzLCBSb3V0ZXJNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcblxyXG5pbXBvcnQgeyBIb21lQ29tcG9uZW50IH0gZnJvbSBcIi4vaG9tZS5jb21wb25lbnRcIjtcclxuXHJcbmNvbnN0IGFwcFJvdXRlczogUm91dGVzID0gW1xyXG4gIHtcclxuICAgIHBhdGg6IFwiXCIsXHJcbiAgICByZWRpcmVjdFRvOiBcIi9ob21lXCIsXHJcbiAgICBwYXRoTWF0Y2g6IFwiZnVsbFwiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgcGF0aDogXCJob21lXCIsXHJcbiAgICBjb21wb25lbnQ6IEhvbWVDb21wb25lbnQsXHJcbiAgfSxcclxuXTtcclxuXHJcbmV4cG9ydCBjb25zdCByb3V0aW5nID0gUm91dGVyTW9kdWxlLmZvclJvb3QoYXBwUm91dGVzKTtcclxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
