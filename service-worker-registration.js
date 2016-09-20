(function () {
    "use strict";
    if ("serviceWorker" in navigator) {
        navigator.serviceWorker.register("/service-worker.js").then(function (registration) {
            // Registration was successful
            console.log("ServiceWorker registration successful with scope: ", registration.scope);
        }).catch(function (err) {
            // registration failed :(
            console.log("ServiceWorker registration failed: ", err);
        });
    }
})();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNsaWVudC9zZXJ2aWNlLXdvcmtlci1yZWdpc3RyYXRpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsQ0FBQztJQUNDLFlBQVksQ0FBQztJQUViLEVBQUUsQ0FBQyxDQUFDLGVBQWUsSUFBSSxTQUFTLENBQUMsQ0FBQyxDQUFDO1FBQ2pDLFNBQVMsQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLG9CQUFvQixDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsWUFBWTtZQUNoRiw4QkFBOEI7WUFDOUIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxvREFBb0QsRUFBRSxZQUFZLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDeEYsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLFVBQVUsR0FBRztZQUNwQix5QkFBeUI7WUFDekIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxxQ0FBcUMsRUFBRSxHQUFHLENBQUMsQ0FBQztRQUMxRCxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7QUFFSCxDQUFDLENBQUMsRUFBRSxDQUFDIiwiZmlsZSI6ImNsaWVudC9zZXJ2aWNlLXdvcmtlci1yZWdpc3RyYXRpb24uanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gKCkge1xyXG4gIFwidXNlIHN0cmljdFwiO1xyXG5cclxuICBpZiAoXCJzZXJ2aWNlV29ya2VyXCIgaW4gbmF2aWdhdG9yKSB7XHJcbiAgICBuYXZpZ2F0b3Iuc2VydmljZVdvcmtlci5yZWdpc3RlcihcIi9zZXJ2aWNlLXdvcmtlci5qc1wiKS50aGVuKGZ1bmN0aW9uIChyZWdpc3RyYXRpb24pIHtcclxuICAgICAgLy8gUmVnaXN0cmF0aW9uIHdhcyBzdWNjZXNzZnVsXHJcbiAgICAgIGNvbnNvbGUubG9nKFwiU2VydmljZVdvcmtlciByZWdpc3RyYXRpb24gc3VjY2Vzc2Z1bCB3aXRoIHNjb3BlOiBcIiwgcmVnaXN0cmF0aW9uLnNjb3BlKTtcclxuICAgIH0pLmNhdGNoKGZ1bmN0aW9uIChlcnIpIHtcclxuICAgICAgLy8gcmVnaXN0cmF0aW9uIGZhaWxlZCA6KFxyXG4gICAgICBjb25zb2xlLmxvZyhcIlNlcnZpY2VXb3JrZXIgcmVnaXN0cmF0aW9uIGZhaWxlZDogXCIsIGVycik7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG59KSgpO1xyXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
