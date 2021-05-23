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
exports.componentReadMore = void 0;
function componentReadMore() {
    var more = document.querySelectorAll('.more');
    var _loop_1 = function (i) {
        more[i].addEventListener('click', function () {
            more[i].parentNode.classList.toggle('active');
        });
    };
    for (var i = 0; i < more.length; i++) {
        _loop_1(i);
    }
}
exports.componentReadMore = componentReadMore;
},{}],6:[function(require,module,exports){
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
//import {componentToggleTheme} from "./component-toggle-theme/component-toggle-theme";
var component_read_more_1 = require("./component-read-more/component-read-more");
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
        //componentToggleTheme();
        component_read_more_1.componentReadMore();
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
},{"./component-admin-dashboard/component-admin-dashboard":1,"./component-image-comparision/component-image-comparision":2,"./component-login-register/component-login-register":3,"./component-menu/component-menu":4,"./component-read-more/component-read-more":5,"./landing-pepsi/landing-pepsi":7,"./parallax-background/parallax-background":8}],7:[function(require,module,exports){
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
},{}],8:[function(require,module,exports){
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
},{}]},{},[6])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhcHAvY29tcG9uZW50cy9jb21wb25lbnQtYWRtaW4tZGFzaGJvYXJkL2NvbXBvbmVudC1hZG1pbi1kYXNoYm9hcmQudHMiLCJhcHAvY29tcG9uZW50cy9jb21wb25lbnQtaW1hZ2UtY29tcGFyaXNpb24vY29tcG9uZW50LWltYWdlLWNvbXBhcmlzaW9uLnRzIiwiYXBwL2NvbXBvbmVudHMvY29tcG9uZW50LWxvZ2luLXJlZ2lzdGVyL2NvbXBvbmVudC1sb2dpbi1yZWdpc3Rlci50cyIsImFwcC9jb21wb25lbnRzL2NvbXBvbmVudC1tZW51L2NvbXBvbmVudC1tZW51LnRzIiwiYXBwL2NvbXBvbmVudHMvY29tcG9uZW50LXJlYWQtbW9yZS9jb21wb25lbnQtcmVhZC1tb3JlLnRzIiwiYXBwL2NvbXBvbmVudHMvY29tcG9uZW50cy50cyIsImFwcC9jb21wb25lbnRzL2xhbmRpbmctcGVwc2kvbGFuZGluZy1wZXBzaS50cyIsImFwcC9jb21wb25lbnRzL3BhcmFsbGF4LWJhY2tncm91bmQvcGFyYWxsYXgtYmFja2dyb3VuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7OztBQ0FBLFNBQWdCLHVCQUF1QjtJQUVwQyxJQUFNLFFBQVEsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQ25ELElBQUcsUUFBUSxFQUFDO1FBQ1gsUUFBUSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBRTtZQUMvQixJQUFJLE1BQU0sR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1lBQy9DLElBQUksVUFBVSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsYUFBYSxDQUFDLENBQUM7WUFDdkQsSUFBSSxJQUFJLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUMzQyxNQUFNLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxR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QUQsQ0FyQkUsQUFxQkQsSUFBQTtBQXJCYyxnREFBa0IiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpe2Z1bmN0aW9uIHIoZSxuLHQpe2Z1bmN0aW9uIG8oaSxmKXtpZighbltpXSl7aWYoIWVbaV0pe3ZhciBjPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmU7aWYoIWYmJmMpcmV0dXJuIGMoaSwhMCk7aWYodSlyZXR1cm4gdShpLCEwKTt2YXIgYT1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK2krXCInXCIpO3Rocm93IGEuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixhfXZhciBwPW5baV09e2V4cG9ydHM6e319O2VbaV1bMF0uY2FsbChwLmV4cG9ydHMsZnVuY3Rpb24ocil7dmFyIG49ZVtpXVsxXVtyXTtyZXR1cm4gbyhufHxyKX0scCxwLmV4cG9ydHMscixlLG4sdCl9cmV0dXJuIG5baV0uZXhwb3J0c31mb3IodmFyIHU9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZSxpPTA7aTx0Lmxlbmd0aDtpKyspbyh0W2ldKTtyZXR1cm4gb31yZXR1cm4gcn0pKCkiLCJleHBvcnQgZnVuY3Rpb24gY29tcG9uZW50QWRtaW5EYXNoYm9hcmQoKSB7XHJcblxyXG4gICBjb25zdCB0b2dnbGVCdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b2dnbGUnKTtcclxuICAgaWYodG9nZ2xlQnQpe1xyXG4gICAgdG9nZ2xlQnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgbGV0IHRvZ2dsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b2dnbGUnKTtcclxuICAgICAgICBsZXQgbmF2aWdhdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uYXZpZ2F0aW9uJyk7XHJcbiAgICAgICAgbGV0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbicpO1xyXG4gICAgICAgIHRvZ2dsZS5jbGFzc0xpc3QudG9nZ2xlKCdhY3RpdmUnKTtcclxuICAgICAgICBuYXZpZ2F0aW9uLmNsYXNzTGlzdC50b2dnbGUoJ2FjdGl2ZScpO1xyXG4gICAgICAgIG1haW4uY2xhc3NMaXN0LnRvZ2dsZSgnYWN0aXZlJyk7XHJcbiAgICB9KTtcclxuICAgfVxyXG4gfSIsImV4cG9ydCBmdW5jdGlvbiBjb21wb25lbnRJbWFnZUNvbXBhcmlzaW9uKCkge1xyXG4gICAgICAgIGNvbnN0IHNsaWRlMj1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2xpZGUyJykgYXMgSFRNTEVsZW1lbnQ7XHJcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsKGUpPT57XHJcbiAgICAgICAgICAgIHZhciB4PWUuY2xpZW50WDtcclxuICAgICAgICAgICAgc2xpZGUyLnN0eWxlLmxlZnQ9eCsncHgnO1xyXG4gICAgICAgIH0pO1xyXG4gIH0iLCJleHBvcnQgZnVuY3Rpb24gY29tcG9uZW50TG9naW5SZWdpc3RlcigpIHtcclxuXHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYnQtdG9nZ2xlJykuZm9yRWFjaCgoaXRlbTpIVE1MRWxlbWVudCk9PntcclxuICAgICAgICBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywoKT0+e1xyXG4gICAgICAgICAgICB0b2dnbGUoKTtcclxuICAgICAgICB9KVxyXG4gICAgfSlcclxuXHJcbiAgICBmdW5jdGlvbiB0b2dnbGUoKXtcclxuICAgICAgICBjb25zdCBjb25zdGFpbmVyPWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250YWluZXInKTtcclxuICAgICAgICBjb25zdCBzZWN0aW9uPWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ3NlY3Rpb24nKTtcclxuICAgICAgICBjb25zdGFpbmVyLmNsYXNzTGlzdC50b2dnbGUoJ2FjdGl2ZScpO1xyXG4gICAgICAgIHNlY3Rpb24uY2xhc3NMaXN0LnRvZ2dsZSgnYWN0aXZlJyk7XHJcbiAgIH1cclxuXHJcbiAgfSIsImV4cG9ydCBmdW5jdGlvbiBjb21wb25lbnRNZW51KCkge1xyXG4gICAgICAgIGlmKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tZW51LXRvZ2dsZScpKXtcclxuICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tZW51LXRvZ2dsZScpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCk9PiB7XHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWVudS10b2dnbGUnKS5jbGFzc0xpc3QudG9nZ2xlKCdhY3RpdmUnKTtcclxuICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ25hdicpLmNsYXNzTGlzdC50b2dnbGUoJ2FjdGl2ZScpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxufSIsImV4cG9ydCBmdW5jdGlvbiBjb21wb25lbnRSZWFkTW9yZSgpIHtcclxuICAgIGxldCBtb3JlPWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5tb3JlJyk7XHJcbiAgICBmb3IobGV0IGk9MDtpPG1vcmUubGVuZ3RoO2krKyl7XHJcbiAgICAgICAgbW9yZVtpXS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgbW9yZVtpXS5wYXJlbnROb2RlLmNsYXNzTGlzdC50b2dnbGUoJ2FjdGl2ZScpO1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbiAgfSIsImltcG9ydCB7IElDb21wb25lbnQgfSBmcm9tIFwiLi9jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgY29tcG9uZW50TWVudSB9IGZyb20gXCIuL2NvbXBvbmVudC1tZW51L2NvbXBvbmVudC1tZW51XCI7XHJcbmltcG9ydCB7IGNvbXBvbmVudEFkbWluRGFzaGJvYXJkIH0gZnJvbSBcIi4vY29tcG9uZW50LWFkbWluLWRhc2hib2FyZC9jb21wb25lbnQtYWRtaW4tZGFzaGJvYXJkXCI7XHJcbmltcG9ydCB7IHBhcmFsbGF4QmFja2dyb3VuZCB9IGZyb20gXCIuL3BhcmFsbGF4LWJhY2tncm91bmQvcGFyYWxsYXgtYmFja2dyb3VuZFwiO1xyXG5pbXBvcnQgeyByZXNwb25zaXZlV2ViQ29va2luZyB9IGZyb20gXCIuL3Jlc3BvbnNpdmUtd2ViLWNvb2tpbmcvcmVzcG9uc2l2ZS13ZWItY29va2luZ1wiO1xyXG5pbXBvcnQgeyBzbGlkZXJGdWxsUGFnZSB9IGZyb20gXCIuL3NsaWRlci1mdWxsLXBhZ2Uvc2xpZGVyLWZ1bGwtcGFnZVwiO1xyXG5pbXBvcnQgeyBsYW5kaW5nUGVwc2kgfSBmcm9tIFwiLi9sYW5kaW5nLXBlcHNpL2xhbmRpbmctcGVwc2lcIjtcclxuaW1wb3J0IHtwb3B1cE5ld3NsZXR0ZXJ9IGZyb20gXCIuL3BvcHVwLW5ld3NsZXR0ZXIvcG9wdXAtbmV3c2xldHRlclwiO1xyXG5pbXBvcnQge3BvcHVwQmx1cnJlZEJnfSBmcm9tIFwiLi9wb3B1cC1ibHVycmVkLWJnL3BvcHVwLWJsdXJyZWQtYmdcIjtcclxuaW1wb3J0IHtjb21wb25lbnRJbWFnZUNvbXBhcmlzaW9ufSBmcm9tIFwiLi9jb21wb25lbnQtaW1hZ2UtY29tcGFyaXNpb24vY29tcG9uZW50LWltYWdlLWNvbXBhcmlzaW9uXCI7XHJcbmltcG9ydCB7Y29tcG9uZW50TG9naW5SZWdpc3Rlcn0gZnJvbSBcIi4vY29tcG9uZW50LWxvZ2luLXJlZ2lzdGVyL2NvbXBvbmVudC1sb2dpbi1yZWdpc3RlclwiO1xyXG4vL2ltcG9ydCB7IHNsaWRlckZ1bGxQYWdlIH0gZnJvbSBcIi4vc2xpZGVyLWZ1bGwtcGFnZS9zbGlkZXItZnVsbC1wYWdlXCI7XHJcbi8vaW1wb3J0IHtjb21wb25lbnRUb2dnbGVUaGVtZX0gZnJvbSBcIi4vY29tcG9uZW50LXRvZ2dsZS10aGVtZS9jb21wb25lbnQtdG9nZ2xlLXRoZW1lXCI7XHJcbmltcG9ydCB7Y29tcG9uZW50UmVhZE1vcmV9IGZyb20gXCIuL2NvbXBvbmVudC1yZWFkLW1vcmUvY29tcG9uZW50LXJlYWQtbW9yZVwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIE1lQ29tcG9uZW50cyB7XHJcbiAgICBwdWJsaWMgY29tcG9uZW50czogQXJyYXk8SUNvbXBvbmVudD4gPSBbXTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBjb21wb25lbnRNZW51KCk7XHJcbiAgICAgICAgY29tcG9uZW50QWRtaW5EYXNoYm9hcmQoKTtcclxuICAgICAgICAvL3Jlc3BvbnNpdmVXZWJDb29raW5nKCk7XHJcbiAgICAgICAgLy9zbGlkZXJGdWxsUGFnZSgpO1xyXG4gICAgICAgIGxhbmRpbmdQZXBzaSgpO1xyXG4gICAgICAgIC8vcG9wdXBOZXdzbGV0dGVyKCk7XHJcbiAgICAgICAgLy9wb3B1cEJsdXJyZWRCZygpO1xyXG4gICAgICAgIHRoaXMuY3JlYXRlcGFyYWxsYXhCYWNrZ3JvdW5kKCk7XHJcbiAgICAgICAgY29tcG9uZW50SW1hZ2VDb21wYXJpc2lvbigpO1xyXG4gICAgICAgIGNvbXBvbmVudExvZ2luUmVnaXN0ZXIoKTtcclxuICAgICAgICAvL2NvbXBvbmVudFRvZ2dsZVRoZW1lKCk7XHJcbiAgICAgICAgY29tcG9uZW50UmVhZE1vcmUoKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBjcmVhdGVwYXJhbGxheEJhY2tncm91bmQoKSB7XHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnBhcmFsbGF4LWJhY2tncm91bmQnKS5mb3JFYWNoKChlbDogSFRNTEVsZW1lbnQpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5jb21wb25lbnRzLnB1c2gobmV3IHBhcmFsbGF4QmFja2dyb3VuZChlbCkpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcblxyXG4oKCkgPT4ge1xyXG4gICAgY29uc3QgbWVDb21wb25lbnRzID0gbmV3IE1lQ29tcG9uZW50cygpO1xyXG4gICAgKHdpbmRvdyBhcyBhbnkpLm1lQ29tcG9uZW50cyA9IE1lQ29tcG9uZW50cztcclxufSkoKTsiLCJleHBvcnQgZnVuY3Rpb24gbGFuZGluZ1BlcHNpKCkge1xyXG5cclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5sYW5kaW5nLXBlcHNpIC50bi1wZXBzaScpLmZvckVhY2goKGl0ZW06SFRNTEVsZW1lbnQpPT57XHJcbiAgICAgICAgaXRlbS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsKCk9PntcclxuICAgICAgICAgICAgY29uc3QgaW1nPWl0ZW0uZ2V0QXR0cmlidXRlKCdkYXRhLWltYWdlJyk7XHJcbiAgICAgICAgICAgIGNvbnN0IGJnPWl0ZW0uZ2V0QXR0cmlidXRlKCdkYXRhLWJnJyk7XHJcbiAgICAgICAgICAgIGltZ1NsaWRlcihpbWcpO1xyXG4gICAgICAgICAgICBjaGFuZ2VCZ0NvbG9yKGJnKTtcclxuICAgICAgICB9KVxyXG4gICAgfSk7XHJcblxyXG4gICAgZnVuY3Rpb24gaW1nU2xpZGVyKGFueXRoaW5nOnN0cmluZyl7XHJcbiAgICAgICAgY29uc3QgcGVwc2k6SFRNTEltYWdlRWxlbWVudD0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxhbmRpbmctcGVwc2kgLnBlcHNpJyk7XHJcbiAgICAgICAgcGVwc2kuc3JjID0gJ2ltYWdlcy8nK2FueXRoaW5nO1xyXG4gICAgIH1cclxuXHJcbiAgICAgZnVuY3Rpb24gY2hhbmdlQmdDb2xvcihjb2xvcjpzdHJpbmcpe1xyXG4gICAgICBjb25zdCBsYW5kaW5nUGVwc2k6SFRNTEVsZW1lbnQ9ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxhbmRpbmctcGVwc2knKTtcclxuICAgICAgbGFuZGluZ1BlcHNpLnN0eWxlLmJhY2tncm91bmQ9Y29sb3I7XHJcbiAgICAgfVxyXG4gIH0iLCIgIGltcG9ydCB7IElDb21wb25lbnQgfSBmcm9tIFwiLi4vY29tcG9uZW50XCI7XHJcblxyXG4gIGV4cG9ydCBjbGFzcyBwYXJhbGxheEJhY2tncm91bmQgaW1wbGVtZW50cyBJQ29tcG9uZW50IHtcclxuICAgIHB1YmxpYyBpZDogc3RyaW5nO1xyXG4gICAgcHJpdmF0ZSBlbGVtZW50OiBIVE1MRWxlbWVudDtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihlbDogSFRNTEVsZW1lbnQpIHtcclxuICAgICAgICB0aGlzLmVsZW1lbnQgPSBlbDtcclxuICAgICAgICB0aGlzLk1vdXNlTW92ZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgTW91c2VNb3ZlKCkge1xyXG4gICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vtb3ZlXCIscGFyYWxsYXgpO1xyXG4gICAgICAgICBmdW5jdGlvbiBwYXJhbGxheChlOk1vdXNlRXZlbnQpe1xyXG4gICAgICAgICAgdGhpcy5xdWVyeVNlbGVjdG9yQWxsKCcubGF5ZXInKS5mb3JFYWNoKChsYXllcjogSFRNTEVsZW1lbnQpPT57XHJcbiAgICAgICAgICAgIGNvbnN0IHNwZWVkOm51bWJlcj0gTnVtYmVyKGxheWVyLmdldEF0dHJpYnV0ZSgnZGF0YS1zcGVlZCcpKTtcclxuICAgICAgICAgICAgY29uc3QgeD0od2luZG93LmlubmVyV2lkdGgtIGUucGFnZVggKiBzcGVlZCkvMTAwO1xyXG4gICAgICAgICAgICBjb25zdCB5PSh3aW5kb3cuaW5uZXJIZWlnaHQtIGUucGFnZVkgKiBzcGVlZCkvMTAwO1xyXG4gICAgICAgICAgICBsYXllci5zdHlsZS50cmFuc2Zvcm09IGB0cmFuc2xhdGVYKCR7eH1weCkgdHJhbnNsYXRlWSgke3l9cHgpYFxyXG4gICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG59Il19
