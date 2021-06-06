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
},{}],3:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.componentMenuLayer = void 0;
function componentMenuLayer() {
    var navigation = document.querySelector('.navagation');
    document.querySelectorAll('.toggle').forEach(function (item) {
        item.addEventListener('click', function () {
            item.classList.add('active');
            navigation.classList.add('active');
        });
    });
}
exports.componentMenuLayer = componentMenuLayer;
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
var component_login_register_1 = require("./component-login-register/component-login-register");
//import { sliderFullPage } from "./slider-full-page/slider-full-page";
//import {componentToggleTheme} from "./component-toggle-theme/component-toggle-theme";
var component_read_more_1 = require("./component-read-more/component-read-more");
var effect_animate_menu_indicator_1 = require("./effect-animate-menu-indicator/effect-animate-menu-indicator");
var component_menu_layer_1 = require("./component-menu-layer/component-menu-layer");
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
        //componentImageComparision();
        component_login_register_1.componentLoginRegister();
        //componentToggleTheme();
        component_read_more_1.componentReadMore();
        effect_animate_menu_indicator_1.effectAnimateMenuIndicator();
        component_menu_layer_1.componentMenuLayer();
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
},{"./component-admin-dashboard/component-admin-dashboard":1,"./component-login-register/component-login-register":2,"./component-menu-layer/component-menu-layer":3,"./component-menu/component-menu":4,"./component-read-more/component-read-more":5,"./effect-animate-menu-indicator/effect-animate-menu-indicator":7,"./landing-pepsi/landing-pepsi":8,"./parallax-background/parallax-background":9}],7:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.effectAnimateMenuIndicator = void 0;
function effectAnimateMenuIndicator() {
    var list = document.querySelectorAll('.list');
    var _loop_1 = function (i) {
        list[i].addEventListener('mouseover', function () {
            var j = 0;
            while (j < list.length) {
                list[j++].className = 'list';
            }
            list[i++].className = 'list active';
        });
        out_i_1 = i;
    };
    var out_i_1;
    for (var i = 0; i < list.length; i++) {
        _loop_1(i);
        i = out_i_1;
    }
    list.forEach(function (element) {
        element.addEventListener("mouseenter", function (event) {
            var bg = document.querySelector('body');
            var tar = event.target;
            var color = tar.getAttribute('data-color');
            bg.style.backgroundColor = color;
        });
    });
}
exports.effectAnimateMenuIndicator = effectAnimateMenuIndicator;
},{}],8:[function(require,module,exports){
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
},{}],9:[function(require,module,exports){
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhcHAvY29tcG9uZW50cy9jb21wb25lbnQtYWRtaW4tZGFzaGJvYXJkL2NvbXBvbmVudC1hZG1pbi1kYXNoYm9hcmQudHMiLCJhcHAvY29tcG9uZW50cy9jb21wb25lbnQtbG9naW4tcmVnaXN0ZXIvY29tcG9uZW50LWxvZ2luLXJlZ2lzdGVyLnRzIiwiYXBwL2NvbXBvbmVudHMvY29tcG9uZW50LW1lbnUtbGF5ZXIvY29tcG9uZW50LW1lbnUtbGF5ZXIudHMiLCJhcHAvY29tcG9uZW50cy9jb21wb25lbnQtbWVudS9jb21wb25lbnQtbWVudS50cyIsImFwcC9jb21wb25lbnRzL2NvbXBvbmVudC1yZWFkLW1vcmUvY29tcG9uZW50LXJlYWQtbW9yZS50cyIsImFwcC9jb21wb25lbnRzL2NvbXBvbmVudHMudHMiLCJhcHAvY29tcG9uZW50cy9lZmZlY3QtYW5pbWF0ZS1tZW51LWluZGljYXRvci9lZmZlY3QtYW5pbWF0ZS1tZW51LWluZGljYXRvci50cyIsImFwcC9jb21wb25lbnRzL2xhbmRpbmctcGVwc2kvbGFuZGluZy1wZXBzaS50cyIsImFwcC9jb21wb25lbnRzL3BhcmFsbGF4LWJhY2tncm91bmQvcGFyYWxsYXgtYmFja2dyb3VuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7OztBQ0FBLFNBQWdCLHVCQUF1QjtJQUVwQyxJQUFNLFFBQVEsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQ25ELElBQUcsUUFBUSxFQUFDO1FBQ1gsUUFBUSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBRTtZQUMvQixJQUFJLE1BQU0sR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1lBQy9DLElBQUksVUFBVSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsYUFBYSxDQUFDLENBQUM7WUFDdkQsSUFBSSxJQUFJLEdBQUcsUUFBUSxD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QUFDLEtBQUssQ0FBQyxTQUFTLEdBQUUsZ0JBQWMsQ0FBQyx1QkFBa0IsQ0FBQyxRQUFLLENBQUE7WUFDaEUsQ0FBQyxDQUFDLENBQUE7UUFDSixDQUFDO0lBQ0wsQ0FBQztJQUVMLHlCQUFDO0FBQUQsQ0FyQkUsQUFxQkQsSUFBQTtBQXJCYyxnREFBa0IiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpe2Z1bmN0aW9uIHIoZSxuLHQpe2Z1bmN0aW9uIG8oaSxmKXtpZighbltpXSl7aWYoIWVbaV0pe3ZhciBjPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmU7aWYoIWYmJmMpcmV0dXJuIGMoaSwhMCk7aWYodSlyZXR1cm4gdShpLCEwKTt2YXIgYT1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK2krXCInXCIpO3Rocm93IGEuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixhfXZhciBwPW5baV09e2V4cG9ydHM6e319O2VbaV1bMF0uY2FsbChwLmV4cG9ydHMsZnVuY3Rpb24ocil7dmFyIG49ZVtpXVsxXVtyXTtyZXR1cm4gbyhufHxyKX0scCxwLmV4cG9ydHMscixlLG4sdCl9cmV0dXJuIG5baV0uZXhwb3J0c31mb3IodmFyIHU9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZSxpPTA7aTx0Lmxlbmd0aDtpKyspbyh0W2ldKTtyZXR1cm4gb31yZXR1cm4gcn0pKCkiLCJleHBvcnQgZnVuY3Rpb24gY29tcG9uZW50QWRtaW5EYXNoYm9hcmQoKSB7XHJcblxyXG4gICBjb25zdCB0b2dnbGVCdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b2dnbGUnKTtcclxuICAgaWYodG9nZ2xlQnQpe1xyXG4gICAgdG9nZ2xlQnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgbGV0IHRvZ2dsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b2dnbGUnKTtcclxuICAgICAgICBsZXQgbmF2aWdhdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uYXZpZ2F0aW9uJyk7XHJcbiAgICAgICAgbGV0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbicpO1xyXG4gICAgICAgIHRvZ2dsZS5jbGFzc0xpc3QudG9nZ2xlKCdhY3RpdmUnKTtcclxuICAgICAgICBuYXZpZ2F0aW9uLmNsYXNzTGlzdC50b2dnbGUoJ2FjdGl2ZScpO1xyXG4gICAgICAgIG1haW4uY2xhc3NMaXN0LnRvZ2dsZSgnYWN0aXZlJyk7XHJcbiAgICB9KTtcclxuICAgfVxyXG4gfSIsImV4cG9ydCBmdW5jdGlvbiBjb21wb25lbnRMb2dpblJlZ2lzdGVyKCkge1xyXG5cclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5idC10b2dnbGUnKS5mb3JFYWNoKChpdGVtOkhUTUxFbGVtZW50KT0+e1xyXG4gICAgICAgIGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCgpPT57XHJcbiAgICAgICAgICAgIHRvZ2dsZSgpO1xyXG4gICAgICAgIH0pXHJcbiAgICB9KVxyXG5cclxuICAgIGZ1bmN0aW9uIHRvZ2dsZSgpe1xyXG4gICAgICAgIGNvbnN0IGNvbnN0YWluZXI9ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRhaW5lcicpO1xyXG4gICAgICAgIGNvbnN0IHNlY3Rpb249ZG9jdW1lbnQucXVlcnlTZWxlY3Rvcignc2VjdGlvbicpO1xyXG4gICAgICAgIGNvbnN0YWluZXIuY2xhc3NMaXN0LnRvZ2dsZSgnYWN0aXZlJyk7XHJcbiAgICAgICAgc2VjdGlvbi5jbGFzc0xpc3QudG9nZ2xlKCdhY3RpdmUnKTtcclxuICAgfVxyXG5cclxuICB9IiwiZXhwb3J0IGZ1bmN0aW9uIGNvbXBvbmVudE1lbnVMYXllcigpIHtcclxuICAgIGNvbnN0IG5hdmlnYXRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmF2YWdhdGlvbicpO1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRvZ2dsZScpLmZvckVhY2goKGl0ZW06SFRNTEVsZW1lbnQpID0+e1xyXG4gICAgICAgIGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCgpPT57XHJcbiAgICAgICAgICAgaXRlbS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcclxuICAgICAgICAgICBuYXZpZ2F0aW9uLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpXHJcbiAgICAgICAgfSlcclxuICAgIH0pO1xyXG4gIH0iLCJleHBvcnQgZnVuY3Rpb24gY29tcG9uZW50TWVudSgpIHtcclxuICAgICAgICBpZihkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWVudS10b2dnbGUnKSl7XHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWVudS10b2dnbGUnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpPT4ge1xyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1lbnUtdG9nZ2xlJykuY2xhc3NMaXN0LnRvZ2dsZSgnYWN0aXZlJyk7XHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCduYXYnKS5jbGFzc0xpc3QudG9nZ2xlKCdhY3RpdmUnKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbn0iLCJleHBvcnQgZnVuY3Rpb24gY29tcG9uZW50UmVhZE1vcmUoKSB7XHJcbiAgICBsZXQgbW9yZT1kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubW9yZScpO1xyXG4gICAgZm9yKGxldCBpPTA7aTxtb3JlLmxlbmd0aDtpKyspe1xyXG4gICAgICAgIG1vcmVbaV0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgIG1vcmVbaV0ucGFyZW50Tm9kZS5jbGFzc0xpc3QudG9nZ2xlKCdhY3RpdmUnKTtcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG4gIH0iLCJpbXBvcnQgeyBJQ29tcG9uZW50IH0gZnJvbSBcIi4vY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IGNvbXBvbmVudE1lbnUgfSBmcm9tIFwiLi9jb21wb25lbnQtbWVudS9jb21wb25lbnQtbWVudVwiO1xyXG5pbXBvcnQgeyBjb21wb25lbnRBZG1pbkRhc2hib2FyZCB9IGZyb20gXCIuL2NvbXBvbmVudC1hZG1pbi1kYXNoYm9hcmQvY29tcG9uZW50LWFkbWluLWRhc2hib2FyZFwiO1xyXG5pbXBvcnQgeyBwYXJhbGxheEJhY2tncm91bmQgfSBmcm9tIFwiLi9wYXJhbGxheC1iYWNrZ3JvdW5kL3BhcmFsbGF4LWJhY2tncm91bmRcIjtcclxuaW1wb3J0IHsgcmVzcG9uc2l2ZVdlYkNvb2tpbmcgfSBmcm9tIFwiLi9yZXNwb25zaXZlLXdlYi1jb29raW5nL3Jlc3BvbnNpdmUtd2ViLWNvb2tpbmdcIjtcclxuaW1wb3J0IHsgc2xpZGVyRnVsbFBhZ2UgfSBmcm9tIFwiLi9zbGlkZXItZnVsbC1wYWdlL3NsaWRlci1mdWxsLXBhZ2VcIjtcclxuaW1wb3J0IHsgbGFuZGluZ1BlcHNpIH0gZnJvbSBcIi4vbGFuZGluZy1wZXBzaS9sYW5kaW5nLXBlcHNpXCI7XHJcbmltcG9ydCB7cG9wdXBOZXdzbGV0dGVyfSBmcm9tIFwiLi9wb3B1cC1uZXdzbGV0dGVyL3BvcHVwLW5ld3NsZXR0ZXJcIjtcclxuaW1wb3J0IHtwb3B1cEJsdXJyZWRCZ30gZnJvbSBcIi4vcG9wdXAtYmx1cnJlZC1iZy9wb3B1cC1ibHVycmVkLWJnXCI7XHJcbmltcG9ydCB7Y29tcG9uZW50SW1hZ2VDb21wYXJpc2lvbn0gZnJvbSBcIi4vY29tcG9uZW50LWltYWdlLWNvbXBhcmlzaW9uL2NvbXBvbmVudC1pbWFnZS1jb21wYXJpc2lvblwiO1xyXG5pbXBvcnQge2NvbXBvbmVudExvZ2luUmVnaXN0ZXJ9IGZyb20gXCIuL2NvbXBvbmVudC1sb2dpbi1yZWdpc3Rlci9jb21wb25lbnQtbG9naW4tcmVnaXN0ZXJcIjtcclxuLy9pbXBvcnQgeyBzbGlkZXJGdWxsUGFnZSB9IGZyb20gXCIuL3NsaWRlci1mdWxsLXBhZ2Uvc2xpZGVyLWZ1bGwtcGFnZVwiO1xyXG4vL2ltcG9ydCB7Y29tcG9uZW50VG9nZ2xlVGhlbWV9IGZyb20gXCIuL2NvbXBvbmVudC10b2dnbGUtdGhlbWUvY29tcG9uZW50LXRvZ2dsZS10aGVtZVwiO1xyXG5pbXBvcnQge2NvbXBvbmVudFJlYWRNb3JlfSBmcm9tIFwiLi9jb21wb25lbnQtcmVhZC1tb3JlL2NvbXBvbmVudC1yZWFkLW1vcmVcIjtcclxuaW1wb3J0IHtlZmZlY3RBbmltYXRlTWVudUluZGljYXRvcn0gZnJvbSBcIi4vZWZmZWN0LWFuaW1hdGUtbWVudS1pbmRpY2F0b3IvZWZmZWN0LWFuaW1hdGUtbWVudS1pbmRpY2F0b3JcIjtcclxuaW1wb3J0IHtjb21wb25lbnRNZW51TGF5ZXJ9IGZyb20gXCIuL2NvbXBvbmVudC1tZW51LWxheWVyL2NvbXBvbmVudC1tZW51LWxheWVyXCI7XHJcbmV4cG9ydCBjbGFzcyBNZUNvbXBvbmVudHMge1xyXG4gICAgcHVibGljIGNvbXBvbmVudHM6IEFycmF5PElDb21wb25lbnQ+ID0gW107XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgY29tcG9uZW50TWVudSgpO1xyXG4gICAgICAgIGNvbXBvbmVudEFkbWluRGFzaGJvYXJkKCk7XHJcbiAgICAgICAgLy9yZXNwb25zaXZlV2ViQ29va2luZygpO1xyXG4gICAgICAgIC8vc2xpZGVyRnVsbFBhZ2UoKTtcclxuICAgICAgICBsYW5kaW5nUGVwc2koKTtcclxuICAgICAgICAvL3BvcHVwTmV3c2xldHRlcigpO1xyXG4gICAgICAgIC8vcG9wdXBCbHVycmVkQmcoKTtcclxuICAgICAgICB0aGlzLmNyZWF0ZXBhcmFsbGF4QmFja2dyb3VuZCgpO1xyXG4gICAgICAgIC8vY29tcG9uZW50SW1hZ2VDb21wYXJpc2lvbigpO1xyXG4gICAgICAgIGNvbXBvbmVudExvZ2luUmVnaXN0ZXIoKTtcclxuICAgICAgICAvL2NvbXBvbmVudFRvZ2dsZVRoZW1lKCk7XHJcbiAgICAgICAgY29tcG9uZW50UmVhZE1vcmUoKTtcclxuICAgICAgICBlZmZlY3RBbmltYXRlTWVudUluZGljYXRvcigpO1xyXG4gICAgICAgIGNvbXBvbmVudE1lbnVMYXllcigpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgY3JlYXRlcGFyYWxsYXhCYWNrZ3JvdW5kKCkge1xyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wYXJhbGxheC1iYWNrZ3JvdW5kJykuZm9yRWFjaCgoZWw6IEhUTUxFbGVtZW50KSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuY29tcG9uZW50cy5wdXNoKG5ldyBwYXJhbGxheEJhY2tncm91bmQoZWwpKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5cclxuKCgpID0+IHtcclxuICAgIGNvbnN0IG1lQ29tcG9uZW50cyA9IG5ldyBNZUNvbXBvbmVudHMoKTtcclxuICAgICh3aW5kb3cgYXMgYW55KS5tZUNvbXBvbmVudHMgPSBNZUNvbXBvbmVudHM7XHJcbn0pKCk7IiwiZXhwb3J0IGZ1bmN0aW9uIGVmZmVjdEFuaW1hdGVNZW51SW5kaWNhdG9yKCkge1xyXG4gICAgbGV0IGxpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubGlzdCcpO1xyXG4gICAgZm9yKGxldCBpPTA7aTxsaXN0Lmxlbmd0aDtpKyspe1xyXG4gICAgICAgIGxpc3RbaV0uYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdmVyJywoKT0+e1xyXG4gICAgICAgICAgICBsZXQgaj0wO1xyXG4gICAgICAgICAgICB3aGlsZShqPGxpc3QubGVuZ3RoKXtcclxuICAgICAgICAgICAgICAgIGxpc3RbaisrXS5jbGFzc05hbWU9J2xpc3QnO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGxpc3RbaSsrXS5jbGFzc05hbWU9J2xpc3QgYWN0aXZlJztcclxuICAgICAgICB9KVxyXG5cclxuXHJcbiAgICAgICAgLypcclxuICAgICAgICBsaXN0W2ldLm9ubW91c2VvdmVyID0gZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgbGV0IGo9MDtcclxuICAgICAgICAgICAgd2hpbGUoajxsaXN0Lmxlbmd0aCl7XHJcbiAgICAgICAgICAgICAgICBsaXN0W2orK10uY2xhc3NOYW1lPSdsaXN0JztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBsaXN0W2krK10uY2xhc3NOYW1lPSdsaXN0IGFjdGl2ZSc7XHJcbiAgICAgICAgfSovXHJcbiAgICB9XHJcblxyXG4gICAgbGlzdC5mb3JFYWNoKGVsZW1lbnQ9PntcclxuICAgICAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWVudGVyXCIsZnVuY3Rpb24oZXZlbnQpe1xyXG4gICAgICAgICAgICBsZXQgYmcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5Jyk7XHJcbiAgICAgICAgICAgIGxldCB0YXIgPSBldmVudC50YXJnZXQgYXMgSFRNTEVsZW1lbnQ7XHJcbiAgICAgICAgICAgIGxldCBjb2xvciA9IHRhci5nZXRBdHRyaWJ1dGUoJ2RhdGEtY29sb3InKTtcclxuICAgICAgICAgICAgYmcuc3R5bGUuYmFja2dyb3VuZENvbG9yPWNvbG9yO1xyXG4gICAgICAgIH0pXHJcbiAgICB9KVxyXG4gIH0iLCJleHBvcnQgZnVuY3Rpb24gbGFuZGluZ1BlcHNpKCkge1xyXG5cclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5sYW5kaW5nLXBlcHNpIC50bi1wZXBzaScpLmZvckVhY2goKGl0ZW06SFRNTEVsZW1lbnQpPT57XHJcbiAgICAgICAgaXRlbS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsKCk9PntcclxuICAgICAgICAgICAgY29uc3QgaW1nPWl0ZW0uZ2V0QXR0cmlidXRlKCdkYXRhLWltYWdlJyk7XHJcbiAgICAgICAgICAgIGNvbnN0IGJnPWl0ZW0uZ2V0QXR0cmlidXRlKCdkYXRhLWJnJyk7XHJcbiAgICAgICAgICAgIGltZ1NsaWRlcihpbWcpO1xyXG4gICAgICAgICAgICBjaGFuZ2VCZ0NvbG9yKGJnKTtcclxuICAgICAgICB9KVxyXG4gICAgfSk7XHJcblxyXG4gICAgZnVuY3Rpb24gaW1nU2xpZGVyKGFueXRoaW5nOnN0cmluZyl7XHJcbiAgICAgICAgY29uc3QgcGVwc2k6SFRNTEltYWdlRWxlbWVudD0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxhbmRpbmctcGVwc2kgLnBlcHNpJyk7XHJcbiAgICAgICAgcGVwc2kuc3JjID0gJ2ltYWdlcy8nK2FueXRoaW5nO1xyXG4gICAgIH1cclxuXHJcbiAgICAgZnVuY3Rpb24gY2hhbmdlQmdDb2xvcihjb2xvcjpzdHJpbmcpe1xyXG4gICAgICBjb25zdCBsYW5kaW5nUGVwc2k6SFRNTEVsZW1lbnQ9ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxhbmRpbmctcGVwc2knKTtcclxuICAgICAgbGFuZGluZ1BlcHNpLnN0eWxlLmJhY2tncm91bmQ9Y29sb3I7XHJcbiAgICAgfVxyXG4gIH0iLCIgIGltcG9ydCB7IElDb21wb25lbnQgfSBmcm9tIFwiLi4vY29tcG9uZW50XCI7XHJcblxyXG4gIGV4cG9ydCBjbGFzcyBwYXJhbGxheEJhY2tncm91bmQgaW1wbGVtZW50cyBJQ29tcG9uZW50IHtcclxuICAgIHB1YmxpYyBpZDogc3RyaW5nO1xyXG4gICAgcHJpdmF0ZSBlbGVtZW50OiBIVE1MRWxlbWVudDtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihlbDogSFRNTEVsZW1lbnQpIHtcclxuICAgICAgICB0aGlzLmVsZW1lbnQgPSBlbDtcclxuICAgICAgICB0aGlzLk1vdXNlTW92ZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgTW91c2VNb3ZlKCkge1xyXG4gICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vtb3ZlXCIscGFyYWxsYXgpO1xyXG4gICAgICAgICBmdW5jdGlvbiBwYXJhbGxheChlOk1vdXNlRXZlbnQpe1xyXG4gICAgICAgICAgdGhpcy5xdWVyeVNlbGVjdG9yQWxsKCcubGF5ZXInKS5mb3JFYWNoKChsYXllcjogSFRNTEVsZW1lbnQpPT57XHJcbiAgICAgICAgICAgIGNvbnN0IHNwZWVkOm51bWJlcj0gTnVtYmVyKGxheWVyLmdldEF0dHJpYnV0ZSgnZGF0YS1zcGVlZCcpKTtcclxuICAgICAgICAgICAgY29uc3QgeD0od2luZG93LmlubmVyV2lkdGgtIGUucGFnZVggKiBzcGVlZCkvMTAwO1xyXG4gICAgICAgICAgICBjb25zdCB5PSh3aW5kb3cuaW5uZXJIZWlnaHQtIGUucGFnZVkgKiBzcGVlZCkvMTAwO1xyXG4gICAgICAgICAgICBsYXllci5zdHlsZS50cmFuc2Zvcm09IGB0cmFuc2xhdGVYKCR7eH1weCkgdHJhbnNsYXRlWSgke3l9cHgpYFxyXG4gICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG59Il19
