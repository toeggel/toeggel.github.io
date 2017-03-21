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
var CameraComponent = (function () {
    function CameraComponent() {
        this.showErrorMessage = false;
    }
    CameraComponent.prototype.ngOnInit = function () {
        // Grab elements, create settings, etc.
        var _this = this;
        // eslint hack
        var mediaNavigator = navigator;
        // Get access to the camera!
        if (mediaNavigator.mediaDevices && mediaNavigator.mediaDevices.getUserMedia) {
            this.showErrorMessage = false;
            // Not adding `{ audio: true }` since we only want video now
            mediaNavigator.mediaDevices.getUserMedia({ video: true })
                .then(function (stream) {
                var video = document.getElementById("video");
                video.src = window.URL.createObjectURL(stream);
                video.play();
            })
                .catch(function (reason) {
                _this.showErrorMessage = true;
            });
        }
        else {
            this.showErrorMessage = true;
        }
    };
    CameraComponent = __decorate([
        core_1.Component({
            selector: "my-camera",
            templateUrl: "./app/camera.component.html",
        }), 
        __metadata('design:paramtypes', [])
    ], CameraComponent);
    return CameraComponent;
}());
exports.CameraComponent = CameraComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNsaWVudC9hcHAvY2FtZXJhLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQTBCLGVBQWUsQ0FBQyxDQUFBO0FBTTFDO0lBQUE7UUFFUyxxQkFBZ0IsR0FBRyxLQUFLLENBQUM7SUF5QmxDLENBQUM7SUF2QlEsa0NBQVEsR0FBZjtRQUNFLHVDQUF1QztRQUR6QyxpQkFzQkM7UUFuQkMsY0FBYztRQUNkLElBQUksY0FBYyxHQUFRLFNBQVMsQ0FBQztRQUVwQyw0QkFBNEI7UUFDNUIsRUFBRSxDQUFDLENBQUMsY0FBYyxDQUFDLFlBQVksSUFBSSxjQUFjLENBQUMsWUFBWSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUM7WUFDNUUsSUFBSSxDQUFDLGdCQUFnQixHQUFHLEtBQUssQ0FBQztZQUM5Qiw0REFBNEQ7WUFDNUQsY0FBYyxDQUFDLFlBQVksQ0FBQyxZQUFZLENBQUMsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLENBQUM7aUJBQ3RELElBQUksQ0FBQyxVQUFBLE1BQU07Z0JBQ1YsSUFBSSxLQUFLLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQXFCLENBQUM7Z0JBQ2pFLEtBQUssQ0FBQyxHQUFHLEdBQUcsTUFBTSxDQUFDLEdBQUcsQ0FBQyxlQUFlLENBQUMsTUFBTSxDQUFDLENBQUM7Z0JBQy9DLEtBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQztZQUNmLENBQUMsQ0FBQztpQkFDRCxLQUFLLENBQUMsVUFBQSxNQUFNO2dCQUNYLEtBQUksQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLENBQUM7WUFDL0IsQ0FBQyxDQUFDLENBQUM7UUFDUCxDQUFDO1FBQUMsSUFBSSxDQUFDLENBQUM7WUFDTixJQUFJLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDO1FBQy9CLENBQUM7SUFDSCxDQUFDO0lBOUJIO1FBQUMsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxXQUFXO1lBQ3JCLFdBQVcsRUFBRSw2QkFBNkI7U0FDM0MsQ0FBQzs7dUJBQUE7SUE0QkYsc0JBQUM7QUFBRCxDQTNCQSxBQTJCQyxJQUFBO0FBM0JZLHVCQUFlLGtCQTJCM0IsQ0FBQSIsImZpbGUiOiJjbGllbnQvYXBwL2NhbWVyYS5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6IFwibXktY2FtZXJhXCIsXG4gIHRlbXBsYXRlVXJsOiBcIi4vYXBwL2NhbWVyYS5jb21wb25lbnQuaHRtbFwiLFxufSlcbmV4cG9ydCBjbGFzcyBDYW1lcmFDb21wb25lbnQge1xuXG4gIHB1YmxpYyBzaG93RXJyb3JNZXNzYWdlID0gZmFsc2U7XG5cbiAgcHVibGljIG5nT25Jbml0KCkge1xuICAgIC8vIEdyYWIgZWxlbWVudHMsIGNyZWF0ZSBzZXR0aW5ncywgZXRjLlxuXG4gICAgLy8gZXNsaW50IGhhY2tcbiAgICBsZXQgbWVkaWFOYXZpZ2F0b3I6IGFueSA9IG5hdmlnYXRvcjtcblxuICAgIC8vIEdldCBhY2Nlc3MgdG8gdGhlIGNhbWVyYSFcbiAgICBpZiAobWVkaWFOYXZpZ2F0b3IubWVkaWFEZXZpY2VzICYmIG1lZGlhTmF2aWdhdG9yLm1lZGlhRGV2aWNlcy5nZXRVc2VyTWVkaWEpIHtcbiAgICAgIHRoaXMuc2hvd0Vycm9yTWVzc2FnZSA9IGZhbHNlO1xuICAgICAgLy8gTm90IGFkZGluZyBgeyBhdWRpbzogdHJ1ZSB9YCBzaW5jZSB3ZSBvbmx5IHdhbnQgdmlkZW8gbm93XG4gICAgICBtZWRpYU5hdmlnYXRvci5tZWRpYURldmljZXMuZ2V0VXNlck1lZGlhKHsgdmlkZW86IHRydWUgfSlcbiAgICAgICAgLnRoZW4oc3RyZWFtID0+IHtcbiAgICAgICAgICBsZXQgdmlkZW8gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInZpZGVvXCIpIGFzIEhUTUxWaWRlb0VsZW1lbnQ7XG4gICAgICAgICAgdmlkZW8uc3JjID0gd2luZG93LlVSTC5jcmVhdGVPYmplY3RVUkwoc3RyZWFtKTtcbiAgICAgICAgICB2aWRlby5wbGF5KCk7XG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaChyZWFzb24gPT4ge1xuICAgICAgICAgIHRoaXMuc2hvd0Vycm9yTWVzc2FnZSA9IHRydWU7XG4gICAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNob3dFcnJvck1lc3NhZ2UgPSB0cnVlO1xuICAgIH1cbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
