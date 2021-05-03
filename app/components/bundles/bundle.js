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
exports.componentImageComparision = void 0;
function componentImageComparision() {
    var slide2 = document.querySelector('.slide2');
    window.addEventListener('mousemove', function (e) {
        var x = e.clientX;
        slide2.style.left = x + 'px';
    });
}
exports.componentImageComparision = componentImageComparision;
},{}],3:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.componentLoginRegister = void 0;
function componentLoginRegister() {
    document.querySelectorAll('.bt-toggle').forEach(function (item) {
        item.addEventListener('click', function () {
            toggle();
        });
    });
    function toggle() {
        var constainer = document.querySelector('.container');
        var section = document.querySelector('section');
        constainer.classList.toggle('active');
        section.classList.toggle('active');
    }
}
exports.componentLoginRegister = componentLoginRegister;
},{}],4:[function(require,module,exports){
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
},{}],5:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MeComponents = void 0;
var component_menu_1 = require("./component-menu/component-menu");
var component_admin_dashboard_1 = require("./component-admin-dashboard/component-admin-dashboard");
var parallax_background_1 = require("./parallax-background/parallax-background");
var landing_pepsi_1 = require("./landing-pepsi/landing-pepsi");
var component_image_comparision_1 = require("./component-image-comparision/component-image-comparision");
var component_login_register_1 = require("./component-login-register/component-login-register");
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
        //popupBlurredBg();
        this.createparallaxBackground();
        component_image_comparision_1.componentImageComparision();
        component_login_register_1.componentLoginRegister();
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
},{"./component-admin-dashboard/component-admin-dashboard":1,"./component-image-comparision/component-image-comparision":2,"./component-login-register/component-login-register":3,"./component-menu/component-menu":4,"./landing-pepsi/landing-pepsi":6,"./parallax-background/parallax-background":7}],6:[function(require,module,exports){
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
},{}],7:[function(require,module,exports){
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
},{}]},{},[5])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhcHAvY29tcG9uZW50cy9jb21wb25lbnQtYWRtaW4tZGFzaGJvYXJkL2NvbXBvbmVudC1hZG1pbi1kYXNoYm9hcmQudHMiLCJhcHAvY29tcG9uZW50cy9jb21wb25lbnQtaW1hZ2UtY29tcGFyaXNpb24vY29tcG9uZW50LWltYWdlLWNvbXBhcmlzaW9uLnRzIiwiYXBwL2NvbXBvbmVudHMvY29tcG9uZW50LWxvZ2luLXJlZ2lzdGVyL2NvbXBvbmVudC1sb2dpbi1yZWdpc3Rlci50cyIsImFwcC9jb21wb25lbnRzL2NvbXBvbmVudC1tZW51L2NvbXBvbmVudC1tZW51LnRzIiwiYXBwL2NvbXBvbmVudHMvY29tcG9uZW50cy50cyIsImFwcC9jb21wb25lbnRzL2xhbmRpbmctcGVwc2kvbGFuZGluZy1wZXBzaS50cyIsImFwcC9jb21wb25lbnRzL3BhcmFsbGF4LWJhY2tncm91bmQvcGFyYWxsYXgtYmFja2dyb3VuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7OztBQ0FBLFNBQWdCLHVCQUF1QjtJQUVwQyxJQUFNLFFBQVEsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQ25ELElBQUcsUUFBUSxFQUFDO1FBQ1gsUUFBUSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBRTtZQUMvQixJQUFJLE1BQU0sR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1lBQy9DLElBQUksVUFBVSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsYUFBYSxDQUFDLENBQUM7WUFDdkQsSUFBSSxJQUFJLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUMzQyxNQUFNLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUNsQyxVQUFVLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMs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QixDQUFDLFFBQVEsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxVQUFDLEtBQWtCO2dCQUN6RCxJQUFNLEtBQUssR0FBUyxNQUFNLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDO2dCQUM3RCxJQUFNLENBQUMsR0FBQyxDQUFDLE1BQU0sQ0FBQyxVQUFVLEdBQUUsQ0FBQyxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUMsR0FBQyxHQUFHLENBQUM7Z0JBQ2pELElBQU0sQ0FBQyxHQUFDLENBQUMsTUFBTSxDQUFDLFdBQVcsR0FBRSxDQUFDLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQyxHQUFDLEdBQUcsQ0FBQztnQkFDbEQsS0FBSyxDQUFDLEtBQUssQ0FBQyxTQUFTLEdBQUUsZ0JBQWMsQ0FBQyx1QkFBa0IsQ0FBQyxRQUFLLENBQUE7WUFDaEUsQ0FBQyxDQUFDLENBQUE7UUFDSixDQUFDO0lBQ0wsQ0FBQztJQUVMLHlCQUFDO0FBQUQsQ0FyQkUsQUFxQkQsSUFBQTtBQXJCYyxnREFBa0IiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpe2Z1bmN0aW9uIHIoZSxuLHQpe2Z1bmN0aW9uIG8oaSxmKXtpZighbltpXSl7aWYoIWVbaV0pe3ZhciBjPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmU7aWYoIWYmJmMpcmV0dXJuIGMoaSwhMCk7aWYodSlyZXR1cm4gdShpLCEwKTt2YXIgYT1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK2krXCInXCIpO3Rocm93IGEuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixhfXZhciBwPW5baV09e2V4cG9ydHM6e319O2VbaV1bMF0uY2FsbChwLmV4cG9ydHMsZnVuY3Rpb24ocil7dmFyIG49ZVtpXVsxXVtyXTtyZXR1cm4gbyhufHxyKX0scCxwLmV4cG9ydHMscixlLG4sdCl9cmV0dXJuIG5baV0uZXhwb3J0c31mb3IodmFyIHU9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZSxpPTA7aTx0Lmxlbmd0aDtpKyspbyh0W2ldKTtyZXR1cm4gb31yZXR1cm4gcn0pKCkiLCJleHBvcnQgZnVuY3Rpb24gY29tcG9uZW50QWRtaW5EYXNoYm9hcmQoKSB7XHJcblxyXG4gICBjb25zdCB0b2dnbGVCdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b2dnbGUnKTtcclxuICAgaWYodG9nZ2xlQnQpe1xyXG4gICAgdG9nZ2xlQnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgbGV0IHRvZ2dsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b2dnbGUnKTtcclxuICAgICAgICBsZXQgbmF2aWdhdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uYXZpZ2F0aW9uJyk7XHJcbiAgICAgICAgbGV0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbicpO1xyXG4gICAgICAgIHRvZ2dsZS5jbGFzc0xpc3QudG9nZ2xlKCdhY3RpdmUnKTtcclxuICAgICAgICBuYXZpZ2F0aW9uLmNsYXNzTGlzdC50b2dnbGUoJ2FjdGl2ZScpO1xyXG4gICAgICAgIG1haW4uY2xhc3NMaXN0LnRvZ2dsZSgnYWN0aXZlJyk7XHJcbiAgICB9KTtcclxuICAgfVxyXG4gfSIsImV4cG9ydCBmdW5jdGlvbiBjb21wb25lbnRJbWFnZUNvbXBhcmlzaW9uKCkge1xyXG4gICAgICAgIGNvbnN0IHNsaWRlMj1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2xpZGUyJykgYXMgSFRNTEVsZW1lbnQ7XHJcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsKGUpPT57XHJcbiAgICAgICAgICAgIHZhciB4PWUuY2xpZW50WDtcclxuICAgICAgICAgICAgc2xpZGUyLnN0eWxlLmxlZnQ9eCsncHgnO1xyXG4gICAgICAgIH0pO1xyXG4gIH0iLCJleHBvcnQgZnVuY3Rpb24gY29tcG9uZW50TG9naW5SZWdpc3RlcigpIHtcclxuXHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYnQtdG9nZ2xlJykuZm9yRWFjaCgoaXRlbTpIVE1MRWxlbWVudCk9PntcclxuICAgICAgICBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywoKT0+e1xyXG4gICAgICAgICAgICB0b2dnbGUoKTtcclxuICAgICAgICB9KVxyXG4gICAgfSlcclxuXHJcbiAgICBmdW5jdGlvbiB0b2dnbGUoKXtcclxuICAgICAgICBjb25zdCBjb25zdGFpbmVyPWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250YWluZXInKTtcclxuICAgICAgICBjb25zdCBzZWN0aW9uPWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ3NlY3Rpb24nKTtcclxuICAgICAgICBjb25zdGFpbmVyLmNsYXNzTGlzdC50b2dnbGUoJ2FjdGl2ZScpO1xyXG4gICAgICAgIHNlY3Rpb24uY2xhc3NMaXN0LnRvZ2dsZSgnYWN0aXZlJyk7XHJcbiAgIH1cclxuXHJcbiAgfSIsImV4cG9ydCBmdW5jdGlvbiBjb21wb25lbnRNZW51KCkge1xyXG4gICAgICAgIGlmKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tZW51LXRvZ2dsZScpKXtcclxuICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tZW51LXRvZ2dsZScpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCk9PiB7XHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWVudS10b2dnbGUnKS5jbGFzc0xpc3QudG9nZ2xlKCdhY3RpdmUnKTtcclxuICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ25hdicpLmNsYXNzTGlzdC50b2dnbGUoJ2FjdGl2ZScpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxufSIsImltcG9ydCB7IElDb21wb25lbnQgfSBmcm9tIFwiLi9jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgY29tcG9uZW50TWVudSB9IGZyb20gXCIuL2NvbXBvbmVudC1tZW51L2NvbXBvbmVudC1tZW51XCI7XHJcbmltcG9ydCB7IGNvbXBvbmVudEFkbWluRGFzaGJvYXJkIH0gZnJvbSBcIi4vY29tcG9uZW50LWFkbWluLWRhc2hib2FyZC9jb21wb25lbnQtYWRtaW4tZGFzaGJvYXJkXCI7XHJcbmltcG9ydCB7IHBhcmFsbGF4QmFja2dyb3VuZCB9IGZyb20gXCIuL3BhcmFsbGF4LWJhY2tncm91bmQvcGFyYWxsYXgtYmFja2dyb3VuZFwiO1xyXG5pbXBvcnQgeyByZXNwb25zaXZlV2ViQ29va2luZyB9IGZyb20gXCIuL3Jlc3BvbnNpdmUtd2ViLWNvb2tpbmcvcmVzcG9uc2l2ZS13ZWItY29va2luZ1wiO1xyXG5pbXBvcnQgeyBzbGlkZXJGdWxsUGFnZSB9IGZyb20gXCIuL3NsaWRlci1mdWxsLXBhZ2Uvc2xpZGVyLWZ1bGwtcGFnZVwiO1xyXG5pbXBvcnQgeyBsYW5kaW5nUGVwc2kgfSBmcm9tIFwiLi9sYW5kaW5nLXBlcHNpL2xhbmRpbmctcGVwc2lcIjtcclxuaW1wb3J0IHtwb3B1cE5ld3NsZXR0ZXJ9IGZyb20gXCIuL3BvcHVwLW5ld3NsZXR0ZXIvcG9wdXAtbmV3c2xldHRlclwiO1xyXG5pbXBvcnQge3BvcHVwQmx1cnJlZEJnfSBmcm9tIFwiLi9wb3B1cC1ibHVycmVkLWJnL3BvcHVwLWJsdXJyZWQtYmdcIjtcclxuaW1wb3J0IHtjb21wb25lbnRJbWFnZUNvbXBhcmlzaW9ufSBmcm9tIFwiLi9jb21wb25lbnQtaW1hZ2UtY29tcGFyaXNpb24vY29tcG9uZW50LWltYWdlLWNvbXBhcmlzaW9uXCI7XHJcbmltcG9ydCB7Y29tcG9uZW50TG9naW5SZWdpc3Rlcn0gZnJvbSBcIi4vY29tcG9uZW50LWxvZ2luLXJlZ2lzdGVyL2NvbXBvbmVudC1sb2dpbi1yZWdpc3RlclwiO1xyXG4vL2ltcG9ydCB7IHNsaWRlckZ1bGxQYWdlIH0gZnJvbSBcIi4vc2xpZGVyLWZ1bGwtcGFnZS9zbGlkZXItZnVsbC1wYWdlXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgTWVDb21wb25lbnRzIHtcclxuICAgIHB1YmxpYyBjb21wb25lbnRzOiBBcnJheTxJQ29tcG9uZW50PiA9IFtdO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIGNvbXBvbmVudE1lbnUoKTtcclxuICAgICAgICBjb21wb25lbnRBZG1pbkRhc2hib2FyZCgpO1xyXG4gICAgICAgIC8vcmVzcG9uc2l2ZVdlYkNvb2tpbmcoKTtcclxuICAgICAgICAvL3NsaWRlckZ1bGxQYWdlKCk7XHJcbiAgICAgICAgbGFuZGluZ1BlcHNpKCk7XHJcbiAgICAgICAgLy9wb3B1cE5ld3NsZXR0ZXIoKTtcclxuICAgICAgICAvL3BvcHVwQmx1cnJlZEJnKCk7XHJcbiAgICAgICAgdGhpcy5jcmVhdGVwYXJhbGxheEJhY2tncm91bmQoKTtcclxuICAgICAgICBjb21wb25lbnRJbWFnZUNvbXBhcmlzaW9uKCk7XHJcbiAgICAgICAgY29tcG9uZW50TG9naW5SZWdpc3RlcigpO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGNyZWF0ZXBhcmFsbGF4QmFja2dyb3VuZCgpIHtcclxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucGFyYWxsYXgtYmFja2dyb3VuZCcpLmZvckVhY2goKGVsOiBIVE1MRWxlbWVudCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmNvbXBvbmVudHMucHVzaChuZXcgcGFyYWxsYXhCYWNrZ3JvdW5kKGVsKSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbigoKSA9PiB7XHJcbiAgICBjb25zdCBtZUNvbXBvbmVudHMgPSBuZXcgTWVDb21wb25lbnRzKCk7XHJcbiAgICAod2luZG93IGFzIGFueSkubWVDb21wb25lbnRzID0gTWVDb21wb25lbnRzO1xyXG59KSgpOyIsImV4cG9ydCBmdW5jdGlvbiBsYW5kaW5nUGVwc2koKSB7XHJcblxyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmxhbmRpbmctcGVwc2kgLnRuLXBlcHNpJykuZm9yRWFjaCgoaXRlbTpIVE1MRWxlbWVudCk9PntcclxuICAgICAgICBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywoKT0+e1xyXG4gICAgICAgICAgICBjb25zdCBpbWc9aXRlbS5nZXRBdHRyaWJ1dGUoJ2RhdGEtaW1hZ2UnKTtcclxuICAgICAgICAgICAgY29uc3QgYmc9aXRlbS5nZXRBdHRyaWJ1dGUoJ2RhdGEtYmcnKTtcclxuICAgICAgICAgICAgaW1nU2xpZGVyKGltZyk7XHJcbiAgICAgICAgICAgIGNoYW5nZUJnQ29sb3IoYmcpO1xyXG4gICAgICAgIH0pXHJcbiAgICB9KTtcclxuXHJcbiAgICBmdW5jdGlvbiBpbWdTbGlkZXIoYW55dGhpbmc6c3RyaW5nKXtcclxuICAgICAgICBjb25zdCBwZXBzaTpIVE1MSW1hZ2VFbGVtZW50PSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubGFuZGluZy1wZXBzaSAucGVwc2knKTtcclxuICAgICAgICBwZXBzaS5zcmMgPSAnaW1hZ2VzLycrYW55dGhpbmc7XHJcbiAgICAgfVxyXG5cclxuICAgICBmdW5jdGlvbiBjaGFuZ2VCZ0NvbG9yKGNvbG9yOnN0cmluZyl7XHJcbiAgICAgIGNvbnN0IGxhbmRpbmdQZXBzaTpIVE1MRWxlbWVudD1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubGFuZGluZy1wZXBzaScpO1xyXG4gICAgICBsYW5kaW5nUGVwc2kuc3R5bGUuYmFja2dyb3VuZD1jb2xvcjtcclxuICAgICB9XHJcbiAgfSIsIiAgaW1wb3J0IHsgSUNvbXBvbmVudCB9IGZyb20gXCIuLi9jb21wb25lbnRcIjtcclxuXHJcbiAgZXhwb3J0IGNsYXNzIHBhcmFsbGF4QmFja2dyb3VuZCBpbXBsZW1lbnRzIElDb21wb25lbnQge1xyXG4gICAgcHVibGljIGlkOiBzdHJpbmc7XHJcbiAgICBwcml2YXRlIGVsZW1lbnQ6IEhUTUxFbGVtZW50O1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGVsOiBIVE1MRWxlbWVudCkge1xyXG4gICAgICAgIHRoaXMuZWxlbWVudCA9IGVsO1xyXG4gICAgICAgIHRoaXMuTW91c2VNb3ZlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBNb3VzZU1vdmUoKSB7XHJcbiAgICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW1vdmVcIixwYXJhbGxheCk7XHJcbiAgICAgICAgIGZ1bmN0aW9uIHBhcmFsbGF4KGU6TW91c2VFdmVudCl7XHJcbiAgICAgICAgICB0aGlzLnF1ZXJ5U2VsZWN0b3JBbGwoJy5sYXllcicpLmZvckVhY2goKGxheWVyOiBIVE1MRWxlbWVudCk9PntcclxuICAgICAgICAgICAgY29uc3Qgc3BlZWQ6bnVtYmVyPSBOdW1iZXIobGF5ZXIuZ2V0QXR0cmlidXRlKCdkYXRhLXNwZWVkJykpO1xyXG4gICAgICAgICAgICBjb25zdCB4PSh3aW5kb3cuaW5uZXJXaWR0aC0gZS5wYWdlWCAqIHNwZWVkKS8xMDA7XHJcbiAgICAgICAgICAgIGNvbnN0IHk9KHdpbmRvdy5pbm5lckhlaWdodC0gZS5wYWdlWSAqIHNwZWVkKS8xMDA7XHJcbiAgICAgICAgICAgIGxheWVyLnN0eWxlLnRyYW5zZm9ybT0gYHRyYW5zbGF0ZVgoJHt4fXB4KSB0cmFuc2xhdGVZKCR7eX1weClgXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbn0iXX0=
