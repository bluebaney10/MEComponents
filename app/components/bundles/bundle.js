(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.componentAdminDashboard = void 0;
function componentAdminDashboard() {
    var toggleBt = document.querySelector('.toggle');
    if (toggleBt) {
        toggleBt.addEventListener('click', function () {
            var toggle = document.querySelector('.toggle');
            var navigation = document.querySelector('.navigation');
            var main = document.querySelector('.main');
            toggle.classList.toggle('active');
            navigation.classList.toggle('active');
            main.classList.toggle('active');
        });
    }
}
exports.componentAdminDashboard = componentAdminDashboard;
},{}],2:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.componentMenu = void 0;
function componentMenu() {
    if (document.querySelector('.menu-toggle')) {
        document.querySelector('.menu-toggle').addEventListener('click', function () {
            document.querySelector('.menu-toggle').classList.toggle('active');
            document.querySelector('nav').classList.toggle('active');
        });
    }
}
exports.componentMenu = componentMenu;
},{}],3:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MeComponents = void 0;
var component_menu_1 = require("./component-menu/component-menu");
var component_admin_dashboard_1 = require("./component-admin-dashboard/component-admin-dashboard");
var parallax_background_1 = require("./parallax-background/parallax-background");
var landing_pepsi_1 = require("./landing-pepsi/landing-pepsi");
var popup_blurred_bg_1 = require("./popup-blurred-bg/popup-blurred-bg");
//import { sliderFullPage } from "./slider-full-page/slider-full-page";
var MeComponents = /** @class */ (function () {
    function MeComponents() {
        this.components = [];
        component_menu_1.componentMenu();
        component_admin_dashboard_1.componentAdminDashboard();
        //responsiveWebCooking();
        //sliderFullPage();
        landing_pepsi_1.landingPepsi();
        //popupNewsletter();
        popup_blurred_bg_1.popupBlurredBg();
        this.createparallaxBackground();
    }
    MeComponents.prototype.createparallaxBackground = function () {
        var _this = this;
        document.querySelectorAll('.parallax-background').forEach(function (el) {
            _this.components.push(new parallax_background_1.parallaxBackground(el));
        });
    };
    return MeComponents;
}());
exports.MeComponents = MeComponents;
(function () {
    var meComponents = new MeComponents();
    window.meComponents = MeComponents;
})();
},{"./component-admin-dashboard/component-admin-dashboard":1,"./component-menu/component-menu":2,"./landing-pepsi/landing-pepsi":4,"./parallax-background/parallax-background":5,"./popup-blurred-bg/popup-blurred-bg":6}],4:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.landingPepsi = void 0;
function landingPepsi() {
    document.querySelectorAll('.landing-pepsi .tn-pepsi').forEach(function (item) {
        item.addEventListener('click', function () {
            var img = item.getAttribute('data-image');
            var bg = item.getAttribute('data-bg');
            imgSlider(img);
            changeBgColor(bg);
        });
    });
    function imgSlider(anything) {
        var pepsi = document.querySelector('.landing-pepsi .pepsi');
        pepsi.src = 'images/' + anything;
    }
    function changeBgColor(color) {
        var landingPepsi = document.querySelector('.landing-pepsi');
        landingPepsi.style.background = color;
    }
}
exports.landingPepsi = landingPepsi;
},{}],5:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parallaxBackground = void 0;
var parallaxBackground = /** @class */ (function () {
    function parallaxBackground(el) {
        this.element = el;
        this.MouseMove();
    }
    parallaxBackground.prototype.MouseMove = function () {
        document.addEventListener("mousemove", parallax);
        function parallax(e) {
            this.querySelectorAll('.layer').forEach(function (layer) {
                var speed = Number(layer.getAttribute('data-speed'));
                var x = (window.innerWidth - e.pageX * speed) / 100;
                var y = (window.innerHeight - e.pageY * speed) / 100;
                layer.style.transform = "translateX(" + x + "px) translateY(" + y + "px)";
            });
        }
    };
    return parallaxBackground;
}());
exports.parallaxBackground = parallaxBackground;
},{}],6:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.popupBlurredBg = void 0;
function popupBlurredBg() {
    document.querySelector('.bt-read-more').addEventListener('click', function () {
        toggle();
    });
    document.querySelector('.bt-close').addEventListener('click', function () {
        toggle();
    });
    function toggle() {
        console.log('click read more');
        var blur = document.getElementById('blur');
        blur.classList.toggle('active');
        var popup = document.getElementById('popup');
        popup.classList.toggle('active');
    }
}
exports.popupBlurredBg = popupBlurredBg;
},{}]},{},[3])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhcHAvY29tcG9uZW50cy9jb21wb25lbnQtYWRtaW4tZGFzaGJvYXJkL2NvbXBvbmVudC1hZG1pbi1kYXNoYm9hcmQudHMiLCJhcHAvY29tcG9uZW50cy9jb21wb25lbnQtbWVudS9jb21wb25lbnQtbWVudS50cyIsImFwcC9jb21wb25lbnRzL2NvbXBvbmVudHMudHMiLCJhcHAvY29tcG9uZW50cy9sYW5kaW5nLXBlcHNpL2xhbmRpbmctcGVwc2kudHMiLCJhcHAvY29tcG9uZW50cy9wYXJhbGxheC1iYWNrZ3JvdW5kL3BhcmFsbGF4LWJhY2tncm91bmQudHMiLCJhcHAvY29tcG9uZW50cy9wb3B1cC1ibHVycmVkLWJnL3BvcHVwLWJsdXJyZWQtYmcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7QUNBQSxTQUFnQix1QkFBdUI7SUFFcEMsSUFBTSxRQUFRLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUNuRCxJQUFHLFFBQVEsRUFBQztRQUNYLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUU7WUFDL0IsSUFBSSxNQUFNLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsQ0FBQztZQUMvQyxJQUFJLFVBQVUsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1lBQ3ZELElBQUksSUFBSSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDM0MsTUFBTSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDbEMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDdEMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDcEMsQ0FBQyxDQUFDLENBQUM7S0FDSDtBQUNILENBQUM7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LElBQUksS0FBSyxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDN0MsS0FBSyxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDckMsQ0FBQztBQUNILENBQUM7QUFoQkgsd0NBZ0JHIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKXtmdW5jdGlvbiByKGUsbix0KXtmdW5jdGlvbiBvKGksZil7aWYoIW5baV0pe2lmKCFlW2ldKXt2YXIgYz1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlO2lmKCFmJiZjKXJldHVybiBjKGksITApO2lmKHUpcmV0dXJuIHUoaSwhMCk7dmFyIGE9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitpK1wiJ1wiKTt0aHJvdyBhLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsYX12YXIgcD1uW2ldPXtleHBvcnRzOnt9fTtlW2ldWzBdLmNhbGwocC5leHBvcnRzLGZ1bmN0aW9uKHIpe3ZhciBuPWVbaV1bMV1bcl07cmV0dXJuIG8obnx8cil9LHAscC5leHBvcnRzLHIsZSxuLHQpfXJldHVybiBuW2ldLmV4cG9ydHN9Zm9yKHZhciB1PVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmUsaT0wO2k8dC5sZW5ndGg7aSsrKW8odFtpXSk7cmV0dXJuIG99cmV0dXJuIHJ9KSgpIiwiZXhwb3J0IGZ1bmN0aW9uIGNvbXBvbmVudEFkbWluRGFzaGJvYXJkKCkge1xyXG5cclxuICAgY29uc3QgdG9nZ2xlQnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9nZ2xlJyk7XHJcbiAgIGlmKHRvZ2dsZUJ0KXtcclxuICAgIHRvZ2dsZUJ0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgIGxldCB0b2dnbGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9nZ2xlJyk7XHJcbiAgICAgICAgbGV0IG5hdmlnYXRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmF2aWdhdGlvbicpO1xyXG4gICAgICAgIGxldCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW4nKTtcclxuICAgICAgICB0b2dnbGUuY2xhc3NMaXN0LnRvZ2dsZSgnYWN0aXZlJyk7XHJcbiAgICAgICAgbmF2aWdhdGlvbi5jbGFzc0xpc3QudG9nZ2xlKCdhY3RpdmUnKTtcclxuICAgICAgICBtYWluLmNsYXNzTGlzdC50b2dnbGUoJ2FjdGl2ZScpO1xyXG4gICAgfSk7XHJcbiAgIH1cclxuIH0iLCJleHBvcnQgZnVuY3Rpb24gY29tcG9uZW50TWVudSgpIHtcclxuICAgICAgICBpZihkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWVudS10b2dnbGUnKSl7XHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWVudS10b2dnbGUnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpPT4ge1xyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1lbnUtdG9nZ2xlJykuY2xhc3NMaXN0LnRvZ2dsZSgnYWN0aXZlJyk7XHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCduYXYnKS5jbGFzc0xpc3QudG9nZ2xlKCdhY3RpdmUnKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbn0iLCJpbXBvcnQgeyBJQ29tcG9uZW50IH0gZnJvbSBcIi4vY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IGNvbXBvbmVudE1lbnUgfSBmcm9tIFwiLi9jb21wb25lbnQtbWVudS9jb21wb25lbnQtbWVudVwiO1xyXG5pbXBvcnQgeyBjb21wb25lbnRBZG1pbkRhc2hib2FyZCB9IGZyb20gXCIuL2NvbXBvbmVudC1hZG1pbi1kYXNoYm9hcmQvY29tcG9uZW50LWFkbWluLWRhc2hib2FyZFwiO1xyXG5pbXBvcnQgeyBwYXJhbGxheEJhY2tncm91bmQgfSBmcm9tIFwiLi9wYXJhbGxheC1iYWNrZ3JvdW5kL3BhcmFsbGF4LWJhY2tncm91bmRcIjtcclxuaW1wb3J0IHsgcmVzcG9uc2l2ZVdlYkNvb2tpbmcgfSBmcm9tIFwiLi9yZXNwb25zaXZlLXdlYi1jb29raW5nL3Jlc3BvbnNpdmUtd2ViLWNvb2tpbmdcIjtcclxuaW1wb3J0IHsgc2xpZGVyRnVsbFBhZ2UgfSBmcm9tIFwiLi9zbGlkZXItZnVsbC1wYWdlL3NsaWRlci1mdWxsLXBhZ2VcIjtcclxuaW1wb3J0IHsgbGFuZGluZ1BlcHNpIH0gZnJvbSBcIi4vbGFuZGluZy1wZXBzaS9sYW5kaW5nLXBlcHNpXCI7XHJcbmltcG9ydCB7cG9wdXBOZXdzbGV0dGVyfSBmcm9tIFwiLi9wb3B1cC1uZXdzbGV0dGVyL3BvcHVwLW5ld3NsZXR0ZXJcIjtcclxuaW1wb3J0IHtwb3B1cEJsdXJyZWRCZ30gZnJvbSBcIi4vcG9wdXAtYmx1cnJlZC1iZy9wb3B1cC1ibHVycmVkLWJnXCI7XHJcbi8vaW1wb3J0IHsgc2xpZGVyRnVsbFBhZ2UgfSBmcm9tIFwiLi9zbGlkZXItZnVsbC1wYWdlL3NsaWRlci1mdWxsLXBhZ2VcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBNZUNvbXBvbmVudHMge1xyXG4gICAgcHVibGljIGNvbXBvbmVudHM6IEFycmF5PElDb21wb25lbnQ+ID0gW107XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgY29tcG9uZW50TWVudSgpO1xyXG4gICAgICAgIGNvbXBvbmVudEFkbWluRGFzaGJvYXJkKCk7XHJcbiAgICAgICAgLy9yZXNwb25zaXZlV2ViQ29va2luZygpO1xyXG4gICAgICAgIC8vc2xpZGVyRnVsbFBhZ2UoKTtcclxuICAgICAgICBsYW5kaW5nUGVwc2koKTtcclxuICAgICAgICAvL3BvcHVwTmV3c2xldHRlcigpO1xyXG4gICAgICAgIHBvcHVwQmx1cnJlZEJnKCk7XHJcbiAgICAgICAgdGhpcy5jcmVhdGVwYXJhbGxheEJhY2tncm91bmQoKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBjcmVhdGVwYXJhbGxheEJhY2tncm91bmQoKSB7XHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnBhcmFsbGF4LWJhY2tncm91bmQnKS5mb3JFYWNoKChlbDogSFRNTEVsZW1lbnQpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5jb21wb25lbnRzLnB1c2gobmV3IHBhcmFsbGF4QmFja2dyb3VuZChlbCkpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcblxyXG4oKCkgPT4ge1xyXG4gICAgY29uc3QgbWVDb21wb25lbnRzID0gbmV3IE1lQ29tcG9uZW50cygpO1xyXG4gICAgKHdpbmRvdyBhcyBhbnkpLm1lQ29tcG9uZW50cyA9IE1lQ29tcG9uZW50cztcclxufSkoKTsiLCJleHBvcnQgZnVuY3Rpb24gbGFuZGluZ1BlcHNpKCkge1xyXG5cclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5sYW5kaW5nLXBlcHNpIC50bi1wZXBzaScpLmZvckVhY2goKGl0ZW06SFRNTEVsZW1lbnQpPT57XHJcbiAgICAgICAgaXRlbS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsKCk9PntcclxuICAgICAgICAgICAgY29uc3QgaW1nPWl0ZW0uZ2V0QXR0cmlidXRlKCdkYXRhLWltYWdlJyk7XHJcbiAgICAgICAgICAgIGNvbnN0IGJnPWl0ZW0uZ2V0QXR0cmlidXRlKCdkYXRhLWJnJyk7XHJcbiAgICAgICAgICAgIGltZ1NsaWRlcihpbWcpO1xyXG4gICAgICAgICAgICBjaGFuZ2VCZ0NvbG9yKGJnKTtcclxuICAgICAgICB9KVxyXG4gICAgfSk7XHJcblxyXG4gICAgZnVuY3Rpb24gaW1nU2xpZGVyKGFueXRoaW5nOnN0cmluZyl7XHJcbiAgICAgICAgY29uc3QgcGVwc2k6SFRNTEltYWdlRWxlbWVudD0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxhbmRpbmctcGVwc2kgLnBlcHNpJyk7XHJcbiAgICAgICAgcGVwc2kuc3JjID0gJ2ltYWdlcy8nK2FueXRoaW5nO1xyXG4gICAgIH1cclxuXHJcbiAgICAgZnVuY3Rpb24gY2hhbmdlQmdDb2xvcihjb2xvcjpzdHJpbmcpe1xyXG4gICAgICBjb25zdCBsYW5kaW5nUGVwc2k6SFRNTEVsZW1lbnQ9ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxhbmRpbmctcGVwc2knKTtcclxuICAgICAgbGFuZGluZ1BlcHNpLnN0eWxlLmJhY2tncm91bmQ9Y29sb3I7XHJcbiAgICAgfVxyXG4gIH0iLCIgIGltcG9ydCB7IElDb21wb25lbnQgfSBmcm9tIFwiLi4vY29tcG9uZW50XCI7XHJcblxyXG4gIGV4cG9ydCBjbGFzcyBwYXJhbGxheEJhY2tncm91bmQgaW1wbGVtZW50cyBJQ29tcG9uZW50IHtcclxuICAgIHB1YmxpYyBpZDogc3RyaW5nO1xyXG4gICAgcHJpdmF0ZSBlbGVtZW50OiBIVE1MRWxlbWVudDtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihlbDogSFRNTEVsZW1lbnQpIHtcclxuICAgICAgICB0aGlzLmVsZW1lbnQgPSBlbDtcclxuICAgICAgICB0aGlzLk1vdXNlTW92ZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgTW91c2VNb3ZlKCkge1xyXG4gICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vtb3ZlXCIscGFyYWxsYXgpO1xyXG4gICAgICAgICBmdW5jdGlvbiBwYXJhbGxheChlOk1vdXNlRXZlbnQpe1xyXG4gICAgICAgICAgdGhpcy5xdWVyeVNlbGVjdG9yQWxsKCcubGF5ZXInKS5mb3JFYWNoKChsYXllcjogSFRNTEVsZW1lbnQpPT57XHJcbiAgICAgICAgICAgIGNvbnN0IHNwZWVkOm51bWJlcj0gTnVtYmVyKGxheWVyLmdldEF0dHJpYnV0ZSgnZGF0YS1zcGVlZCcpKTtcclxuICAgICAgICAgICAgY29uc3QgeD0od2luZG93LmlubmVyV2lkdGgtIGUucGFnZVggKiBzcGVlZCkvMTAwO1xyXG4gICAgICAgICAgICBjb25zdCB5PSh3aW5kb3cuaW5uZXJIZWlnaHQtIGUucGFnZVkgKiBzcGVlZCkvMTAwO1xyXG4gICAgICAgICAgICBsYXllci5zdHlsZS50cmFuc2Zvcm09IGB0cmFuc2xhdGVYKCR7eH1weCkgdHJhbnNsYXRlWSgke3l9cHgpYFxyXG4gICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG59IiwiZXhwb3J0IGZ1bmN0aW9uIHBvcHVwQmx1cnJlZEJnKCkge1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJ0LXJlYWQtbW9yZScpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywoKT0+e1xyXG4gICAgICAgIHRvZ2dsZSgpO1xyXG4gICAgfSlcclxuXHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYnQtY2xvc2UnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsKCk9PntcclxuICAgICAgICB0b2dnbGUoKTtcclxuICAgIH0pXHJcblxyXG4gICAgZnVuY3Rpb24gdG9nZ2xlKCl7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ2NsaWNrIHJlYWQgbW9yZScpO1xyXG4gICAgICAgIGxldCBibHVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2JsdXInKTtcclxuICAgICAgICBibHVyLmNsYXNzTGlzdC50b2dnbGUoJ2FjdGl2ZScpO1xyXG4gICAgICAgIGxldCBwb3B1cCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwb3B1cCcpO1xyXG4gICAgICAgIHBvcHVwLmNsYXNzTGlzdC50b2dnbGUoJ2FjdGl2ZScpO1xyXG4gICAgfVxyXG4gIH0iXX0=
