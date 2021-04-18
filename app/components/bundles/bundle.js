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
var popup_newsletter_1 = require("./popup-newsletter/popup-newsletter");
var MeComponents = /** @class */ (function () {
    function MeComponents() {
        this.components = [];
        component_menu_1.componentMenu();
        component_admin_dashboard_1.componentAdminDashboard();
        //responsiveWebCooking();
        //sliderFullPage();
        landing_pepsi_1.landingPepsi();
        popup_newsletter_1.popupNewsletter();
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
},{"./component-admin-dashboard/component-admin-dashboard":1,"./component-menu/component-menu":2,"./landing-pepsi/landing-pepsi":4,"./parallax-background/parallax-background":5,"./popup-newsletter/popup-newsletter":6}],4:[function(require,module,exports){
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
exports.popupNewsletter = void 0;
function popupNewsletter() {
    document.querySelector('.btn-subscribe').addEventListener('click', function () {
        popupToggle();
    });
    document.querySelector('.close').addEventListener('click', function () {
        popupToggle();
    });
    function popupToggle() {
        var popup = document.getElementById('popup');
        popup.classList.toggle('active');
    }
}
exports.popupNewsletter = popupNewsletter;
},{}]},{},[3])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhcHAvY29tcG9uZW50cy9jb21wb25lbnQtYWRtaW4tZGFzaGJvYXJkL2NvbXBvbmVudC1hZG1pbi1kYXNoYm9hcmQudHMiLCJhcHAvY29tcG9uZW50cy9jb21wb25lbnQtbWVudS9jb21wb25lbnQtbWVudS50cyIsImFwcC9jb21wb25lbnRzL2NvbXBvbmVudHMudHMiLCJhcHAvY29tcG9uZW50cy9sYW5kaW5nLXBlcHNpL2xhbmRpbmctcGVwc2kudHMiLCJhcHAvY29tcG9uZW50cy9wYXJhbGxheC1iYWNrZ3JvdW5kL3BhcmFsbGF4LWJhY2tncm91bmQudHMiLCJhcHAvY29tcG9uZW50cy9wb3B1cC1uZXdzbGV0dGVyL3BvcHVwLW5ld3NsZXR0ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7QUNBQSxTQUFnQix1QkFBdUI7SUFFcEMsSUFBTSxRQUFRLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUNuRCxJQUFHLFFBQVEsRUFBQztRQUNYLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUU7WUFDL0IsSUFBSSxNQUFNLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsQ0FBQztZQUMvQyxJQUFJLFVBQVUsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1lBQ3ZELElBQUksSUFBSSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDM0MsTUFBTSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDbEMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDdEMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDcEMsQ0FBQyxDQUFDLENBQUM7S0FDSDtBQUNILENBQUM7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OiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKXtmdW5jdGlvbiByKGUsbix0KXtmdW5jdGlvbiBvKGksZil7aWYoIW5baV0pe2lmKCFlW2ldKXt2YXIgYz1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlO2lmKCFmJiZjKXJldHVybiBjKGksITApO2lmKHUpcmV0dXJuIHUoaSwhMCk7dmFyIGE9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitpK1wiJ1wiKTt0aHJvdyBhLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsYX12YXIgcD1uW2ldPXtleHBvcnRzOnt9fTtlW2ldWzBdLmNhbGwocC5leHBvcnRzLGZ1bmN0aW9uKHIpe3ZhciBuPWVbaV1bMV1bcl07cmV0dXJuIG8obnx8cil9LHAscC5leHBvcnRzLHIsZSxuLHQpfXJldHVybiBuW2ldLmV4cG9ydHN9Zm9yKHZhciB1PVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmUsaT0wO2k8dC5sZW5ndGg7aSsrKW8odFtpXSk7cmV0dXJuIG99cmV0dXJuIHJ9KSgpIiwiZXhwb3J0IGZ1bmN0aW9uIGNvbXBvbmVudEFkbWluRGFzaGJvYXJkKCkge1xyXG5cclxuICAgY29uc3QgdG9nZ2xlQnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9nZ2xlJyk7XHJcbiAgIGlmKHRvZ2dsZUJ0KXtcclxuICAgIHRvZ2dsZUJ0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgIGxldCB0b2dnbGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9nZ2xlJyk7XHJcbiAgICAgICAgbGV0IG5hdmlnYXRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmF2aWdhdGlvbicpO1xyXG4gICAgICAgIGxldCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW4nKTtcclxuICAgICAgICB0b2dnbGUuY2xhc3NMaXN0LnRvZ2dsZSgnYWN0aXZlJyk7XHJcbiAgICAgICAgbmF2aWdhdGlvbi5jbGFzc0xpc3QudG9nZ2xlKCdhY3RpdmUnKTtcclxuICAgICAgICBtYWluLmNsYXNzTGlzdC50b2dnbGUoJ2FjdGl2ZScpO1xyXG4gICAgfSk7XHJcbiAgIH1cclxuIH0iLCJleHBvcnQgZnVuY3Rpb24gY29tcG9uZW50TWVudSgpIHtcclxuICAgICAgICBpZihkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWVudS10b2dnbGUnKSl7XHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWVudS10b2dnbGUnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpPT4ge1xyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1lbnUtdG9nZ2xlJykuY2xhc3NMaXN0LnRvZ2dsZSgnYWN0aXZlJyk7XHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCduYXYnKS5jbGFzc0xpc3QudG9nZ2xlKCdhY3RpdmUnKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbn0iLCJpbXBvcnQgeyBJQ29tcG9uZW50IH0gZnJvbSBcIi4vY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IGNvbXBvbmVudE1lbnUgfSBmcm9tIFwiLi9jb21wb25lbnQtbWVudS9jb21wb25lbnQtbWVudVwiO1xyXG5pbXBvcnQgeyBjb21wb25lbnRBZG1pbkRhc2hib2FyZCB9IGZyb20gXCIuL2NvbXBvbmVudC1hZG1pbi1kYXNoYm9hcmQvY29tcG9uZW50LWFkbWluLWRhc2hib2FyZFwiO1xyXG5pbXBvcnQgeyBwYXJhbGxheEJhY2tncm91bmQgfSBmcm9tIFwiLi9wYXJhbGxheC1iYWNrZ3JvdW5kL3BhcmFsbGF4LWJhY2tncm91bmRcIjtcclxuaW1wb3J0IHsgcmVzcG9uc2l2ZVdlYkNvb2tpbmcgfSBmcm9tIFwiLi9yZXNwb25zaXZlLXdlYi1jb29raW5nL3Jlc3BvbnNpdmUtd2ViLWNvb2tpbmdcIjtcclxuaW1wb3J0IHsgc2xpZGVyRnVsbFBhZ2UgfSBmcm9tIFwiLi9zbGlkZXItZnVsbC1wYWdlL3NsaWRlci1mdWxsLXBhZ2VcIjtcclxuaW1wb3J0IHsgbGFuZGluZ1BlcHNpIH0gZnJvbSBcIi4vbGFuZGluZy1wZXBzaS9sYW5kaW5nLXBlcHNpXCI7XHJcbmltcG9ydCB7cG9wdXBOZXdzbGV0dGVyfSBmcm9tIFwiLi9wb3B1cC1uZXdzbGV0dGVyL3BvcHVwLW5ld3NsZXR0ZXJcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBNZUNvbXBvbmVudHMge1xyXG4gICAgcHVibGljIGNvbXBvbmVudHM6IEFycmF5PElDb21wb25lbnQ+ID0gW107XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgY29tcG9uZW50TWVudSgpO1xyXG4gICAgICAgIGNvbXBvbmVudEFkbWluRGFzaGJvYXJkKCk7XHJcbiAgICAgICAgLy9yZXNwb25zaXZlV2ViQ29va2luZygpO1xyXG4gICAgICAgIC8vc2xpZGVyRnVsbFBhZ2UoKTtcclxuICAgICAgICBsYW5kaW5nUGVwc2koKTtcclxuICAgICAgICBwb3B1cE5ld3NsZXR0ZXIoKTtcclxuICAgICAgICB0aGlzLmNyZWF0ZXBhcmFsbGF4QmFja2dyb3VuZCgpO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGNyZWF0ZXBhcmFsbGF4QmFja2dyb3VuZCgpIHtcclxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucGFyYWxsYXgtYmFja2dyb3VuZCcpLmZvckVhY2goKGVsOiBIVE1MRWxlbWVudCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmNvbXBvbmVudHMucHVzaChuZXcgcGFyYWxsYXhCYWNrZ3JvdW5kKGVsKSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbigoKSA9PiB7XHJcbiAgICBjb25zdCBtZUNvbXBvbmVudHMgPSBuZXcgTWVDb21wb25lbnRzKCk7XHJcbiAgICAod2luZG93IGFzIGFueSkubWVDb21wb25lbnRzID0gTWVDb21wb25lbnRzO1xyXG59KSgpOyIsImV4cG9ydCBmdW5jdGlvbiBsYW5kaW5nUGVwc2koKSB7XHJcblxyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmxhbmRpbmctcGVwc2kgLnRuLXBlcHNpJykuZm9yRWFjaCgoaXRlbTpIVE1MRWxlbWVudCk9PntcclxuICAgICAgICBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywoKT0+e1xyXG4gICAgICAgICAgICBjb25zdCBpbWc9aXRlbS5nZXRBdHRyaWJ1dGUoJ2RhdGEtaW1hZ2UnKTtcclxuICAgICAgICAgICAgY29uc3QgYmc9aXRlbS5nZXRBdHRyaWJ1dGUoJ2RhdGEtYmcnKTtcclxuICAgICAgICAgICAgaW1nU2xpZGVyKGltZyk7XHJcbiAgICAgICAgICAgIGNoYW5nZUJnQ29sb3IoYmcpO1xyXG4gICAgICAgIH0pXHJcbiAgICB9KTtcclxuXHJcbiAgICBmdW5jdGlvbiBpbWdTbGlkZXIoYW55dGhpbmc6c3RyaW5nKXtcclxuICAgICAgICBjb25zdCBwZXBzaTpIVE1MSW1hZ2VFbGVtZW50PSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubGFuZGluZy1wZXBzaSAucGVwc2knKTtcclxuICAgICAgICBwZXBzaS5zcmMgPSAnaW1hZ2VzLycrYW55dGhpbmc7XHJcbiAgICAgfVxyXG5cclxuICAgICBmdW5jdGlvbiBjaGFuZ2VCZ0NvbG9yKGNvbG9yOnN0cmluZyl7XHJcbiAgICAgIGNvbnN0IGxhbmRpbmdQZXBzaTpIVE1MRWxlbWVudD1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubGFuZGluZy1wZXBzaScpO1xyXG4gICAgICBsYW5kaW5nUGVwc2kuc3R5bGUuYmFja2dyb3VuZD1jb2xvcjtcclxuICAgICB9XHJcbiAgfSIsIiAgaW1wb3J0IHsgSUNvbXBvbmVudCB9IGZyb20gXCIuLi9jb21wb25lbnRcIjtcclxuXHJcbiAgZXhwb3J0IGNsYXNzIHBhcmFsbGF4QmFja2dyb3VuZCBpbXBsZW1lbnRzIElDb21wb25lbnQge1xyXG4gICAgcHVibGljIGlkOiBzdHJpbmc7XHJcbiAgICBwcml2YXRlIGVsZW1lbnQ6IEhUTUxFbGVtZW50O1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGVsOiBIVE1MRWxlbWVudCkge1xyXG4gICAgICAgIHRoaXMuZWxlbWVudCA9IGVsO1xyXG4gICAgICAgIHRoaXMuTW91c2VNb3ZlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBNb3VzZU1vdmUoKSB7XHJcbiAgICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW1vdmVcIixwYXJhbGxheCk7XHJcbiAgICAgICAgIGZ1bmN0aW9uIHBhcmFsbGF4KGU6TW91c2VFdmVudCl7XHJcbiAgICAgICAgICB0aGlzLnF1ZXJ5U2VsZWN0b3JBbGwoJy5sYXllcicpLmZvckVhY2goKGxheWVyOiBIVE1MRWxlbWVudCk9PntcclxuICAgICAgICAgICAgY29uc3Qgc3BlZWQ6bnVtYmVyPSBOdW1iZXIobGF5ZXIuZ2V0QXR0cmlidXRlKCdkYXRhLXNwZWVkJykpO1xyXG4gICAgICAgICAgICBjb25zdCB4PSh3aW5kb3cuaW5uZXJXaWR0aC0gZS5wYWdlWCAqIHNwZWVkKS8xMDA7XHJcbiAgICAgICAgICAgIGNvbnN0IHk9KHdpbmRvdy5pbm5lckhlaWdodC0gZS5wYWdlWSAqIHNwZWVkKS8xMDA7XHJcbiAgICAgICAgICAgIGxheWVyLnN0eWxlLnRyYW5zZm9ybT0gYHRyYW5zbGF0ZVgoJHt4fXB4KSB0cmFuc2xhdGVZKCR7eX1weClgXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbn0iLCJleHBvcnQgZnVuY3Rpb24gcG9wdXBOZXdzbGV0dGVyKCkge1xyXG5cclxuZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJ0bi1zdWJzY3JpYmUnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsKCk9PntcclxuICAgIHBvcHVwVG9nZ2xlKCk7XHJcbn0pO1xyXG5cclxuZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNsb3NlJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCgpPT57XHJcbiAgICBwb3B1cFRvZ2dsZSgpO1xyXG59KVxyXG5cclxuZnVuY3Rpb24gcG9wdXBUb2dnbGUoKXtcclxuICAgIGNvbnN0IHBvcHVwPWRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwb3B1cCcpO1xyXG4gICAgcG9wdXAuY2xhc3NMaXN0LnRvZ2dsZSgnYWN0aXZlJyk7XHJcblxyXG59XHJcblxyXG59Il19
