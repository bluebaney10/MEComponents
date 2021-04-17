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
var responsive_web_cooking_1 = require("./responsive-web-cooking/responsive-web-cooking");
var MeComponents = /** @class */ (function () {
    function MeComponents() {
        this.components = [];
        component_menu_1.componentMenu();
        component_admin_dashboard_1.componentAdminDashboard();
        responsive_web_cooking_1.responsiveWebCooking();
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
},{"./component-admin-dashboard/component-admin-dashboard":1,"./component-menu/component-menu":2,"./parallax-background/parallax-background":4,"./responsive-web-cooking/responsive-web-cooking":5}],4:[function(require,module,exports){
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
},{}],5:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.responsiveWebCooking = void 0;
function responsiveWebCooking() {
    window.addEventListener('scroll', function () {
        var header = document.querySelector('header');
        header.classList.toggle('sticky', window.scrollY > 0);
    });
    //menuToggle
    document.querySelector('.menuToggle').addEventListener('click', function () {
        toggleMenu();
    });
    document.querySelectorAll('.nav-menu').forEach(function (item) {
        item.addEventListener('click', function () {
            toggleMenu();
        });
    });
    function toggleMenu() {
        var menuToggle = document.querySelector('.menuToggle');
        var navigation = document.querySelector('.navigation');
        menuToggle.classList.toggle('active');
        navigation.classList.toggle('active');
    }
}
exports.responsiveWebCooking = responsiveWebCooking;
},{}]},{},[3])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhcHAvY29tcG9uZW50cy9jb21wb25lbnQtYWRtaW4tZGFzaGJvYXJkL2NvbXBvbmVudC1hZG1pbi1kYXNoYm9hcmQudHMiLCJhcHAvY29tcG9uZW50cy9jb21wb25lbnQtbWVudS9jb21wb25lbnQtbWVudS50cyIsImFwcC9jb21wb25lbnRzL2NvbXBvbmVudHMudHMiLCJhcHAvY29tcG9uZW50cy9wYXJhbGxheC1iYWNrZ3JvdW5kL3BhcmFsbGF4LWJhY2tncm91bmQudHMiLCJhcHAvY29tcG9uZW50cy9yZXNwb25zaXZlLXdlYi1jb29raW5nL3Jlc3BvbnNpdmUtd2ViLWNvb2tpbmcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7QUNBQSxTQUFnQix1QkFBdUI7SUFFcEMsSUFBTSxRQUFRLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUNuRCxJQUFHLFFBQVEsRUFBQztRQUNYLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUU7WUFDL0IsSUFBSSxNQUFNLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsQ0FBQztZQUMvQyxJQUFJLFVBQVUsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1lBQ3ZELElBQUksSUFBSSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDM0MsTUFBTSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDbEMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDdEMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDcEMsQ0FBQyxDQUFDLENBQUM7S0FDSDtBQUNILENBQUM7QUFiRiwwREFhRTs7Ozs7QUNiRixTQUFnQixhQUFhO0lBQ3JC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QUMsQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUM7UUFDMUQsVUFBVSxFQUFFLENBQUM7SUFDbEIsQ0FBQyxDQUFDLENBQUM7SUFFSCxRQUFRLENBQUMsZ0JBQWdCLENBQUMsV0FBVyxDQUFDLENBQUMsT0FBTyxDQUFDLFVBQUMsSUFBZ0I7UUFDNUQsSUFBSSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBRTtZQUMzQixVQUFVLEVBQUUsQ0FBQztRQUNqQixDQUFDLENBQUMsQ0FBQztJQUNQLENBQUMsQ0FBQyxDQUFDO0lBRUgsU0FBUyxVQUFVO1FBQ2YsSUFBTSxVQUFVLEdBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUN2RCxJQUFNLFVBQVUsR0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBQ3ZELFVBQVUsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ3RDLFVBQVUsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQzFDLENBQUM7QUFFSCxDQUFDO0FBeEJILG9EQXdCRyIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSIsImV4cG9ydCBmdW5jdGlvbiBjb21wb25lbnRBZG1pbkRhc2hib2FyZCgpIHtcclxuXHJcbiAgIGNvbnN0IHRvZ2dsZUJ0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvZ2dsZScpO1xyXG4gICBpZih0b2dnbGVCdCl7XHJcbiAgICB0b2dnbGVCdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICBsZXQgdG9nZ2xlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvZ2dsZScpO1xyXG4gICAgICAgIGxldCBuYXZpZ2F0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5hdmlnYXRpb24nKTtcclxuICAgICAgICBsZXQgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluJyk7XHJcbiAgICAgICAgdG9nZ2xlLmNsYXNzTGlzdC50b2dnbGUoJ2FjdGl2ZScpO1xyXG4gICAgICAgIG5hdmlnYXRpb24uY2xhc3NMaXN0LnRvZ2dsZSgnYWN0aXZlJyk7XHJcbiAgICAgICAgbWFpbi5jbGFzc0xpc3QudG9nZ2xlKCdhY3RpdmUnKTtcclxuICAgIH0pO1xyXG4gICB9XHJcbiB9IiwiZXhwb3J0IGZ1bmN0aW9uIGNvbXBvbmVudE1lbnUoKSB7XHJcbiAgICAgICAgaWYoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1lbnUtdG9nZ2xlJykpe1xyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1lbnUtdG9nZ2xlJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKT0+IHtcclxuICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tZW51LXRvZ2dsZScpLmNsYXNzTGlzdC50b2dnbGUoJ2FjdGl2ZScpO1xyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbmF2JykuY2xhc3NMaXN0LnRvZ2dsZSgnYWN0aXZlJyk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG59IiwiaW1wb3J0IHsgSUNvbXBvbmVudCB9IGZyb20gXCIuL2NvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBjb21wb25lbnRNZW51IH0gZnJvbSBcIi4vY29tcG9uZW50LW1lbnUvY29tcG9uZW50LW1lbnVcIjtcclxuaW1wb3J0IHsgY29tcG9uZW50QWRtaW5EYXNoYm9hcmQgfSBmcm9tIFwiLi9jb21wb25lbnQtYWRtaW4tZGFzaGJvYXJkL2NvbXBvbmVudC1hZG1pbi1kYXNoYm9hcmRcIjtcclxuaW1wb3J0IHsgcGFyYWxsYXhCYWNrZ3JvdW5kIH0gZnJvbSBcIi4vcGFyYWxsYXgtYmFja2dyb3VuZC9wYXJhbGxheC1iYWNrZ3JvdW5kXCI7XHJcbmltcG9ydCB7IHJlc3BvbnNpdmVXZWJDb29raW5nIH0gZnJvbSBcIi4vcmVzcG9uc2l2ZS13ZWItY29va2luZy9yZXNwb25zaXZlLXdlYi1jb29raW5nXCI7XHJcbmV4cG9ydCBjbGFzcyBNZUNvbXBvbmVudHMge1xyXG4gICAgcHVibGljIGNvbXBvbmVudHM6IEFycmF5PElDb21wb25lbnQ+ID0gW107XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgY29tcG9uZW50TWVudSgpO1xyXG4gICAgICAgIGNvbXBvbmVudEFkbWluRGFzaGJvYXJkKCk7XHJcbiAgICAgICAgcmVzcG9uc2l2ZVdlYkNvb2tpbmcoKTtcclxuICAgICAgICB0aGlzLmNyZWF0ZXBhcmFsbGF4QmFja2dyb3VuZCgpO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGNyZWF0ZXBhcmFsbGF4QmFja2dyb3VuZCgpIHtcclxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucGFyYWxsYXgtYmFja2dyb3VuZCcpLmZvckVhY2goKGVsOiBIVE1MRWxlbWVudCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmNvbXBvbmVudHMucHVzaChuZXcgcGFyYWxsYXhCYWNrZ3JvdW5kKGVsKSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbigoKSA9PiB7XHJcbiAgICBjb25zdCBtZUNvbXBvbmVudHMgPSBuZXcgTWVDb21wb25lbnRzKCk7XHJcbiAgICAod2luZG93IGFzIGFueSkubWVDb21wb25lbnRzID0gTWVDb21wb25lbnRzO1xyXG59KSgpOyIsIiAgaW1wb3J0IHsgSUNvbXBvbmVudCB9IGZyb20gXCIuLi9jb21wb25lbnRcIjtcclxuXHJcbiAgZXhwb3J0IGNsYXNzIHBhcmFsbGF4QmFja2dyb3VuZCBpbXBsZW1lbnRzIElDb21wb25lbnQge1xyXG4gICAgcHVibGljIGlkOiBzdHJpbmc7XHJcbiAgICBwcml2YXRlIGVsZW1lbnQ6IEhUTUxFbGVtZW50O1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGVsOiBIVE1MRWxlbWVudCkge1xyXG4gICAgICAgIHRoaXMuZWxlbWVudCA9IGVsO1xyXG4gICAgICAgIHRoaXMuTW91c2VNb3ZlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBNb3VzZU1vdmUoKSB7XHJcbiAgICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW1vdmVcIixwYXJhbGxheCk7XHJcbiAgICAgICAgIGZ1bmN0aW9uIHBhcmFsbGF4KGU6TW91c2VFdmVudCl7XHJcbiAgICAgICAgICB0aGlzLnF1ZXJ5U2VsZWN0b3JBbGwoJy5sYXllcicpLmZvckVhY2goKGxheWVyOiBIVE1MRWxlbWVudCk9PntcclxuICAgICAgICAgICAgY29uc3Qgc3BlZWQ6bnVtYmVyPSBOdW1iZXIobGF5ZXIuZ2V0QXR0cmlidXRlKCdkYXRhLXNwZWVkJykpO1xyXG4gICAgICAgICAgICBjb25zdCB4PSh3aW5kb3cuaW5uZXJXaWR0aC0gZS5wYWdlWCAqIHNwZWVkKS8xMDA7XHJcbiAgICAgICAgICAgIGNvbnN0IHk9KHdpbmRvdy5pbm5lckhlaWdodC0gZS5wYWdlWSAqIHNwZWVkKS8xMDA7XHJcbiAgICAgICAgICAgIGxheWVyLnN0eWxlLnRyYW5zZm9ybT0gYHRyYW5zbGF0ZVgoJHt4fXB4KSB0cmFuc2xhdGVZKCR7eX1weClgXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbn0iLCJleHBvcnQgZnVuY3Rpb24gcmVzcG9uc2l2ZVdlYkNvb2tpbmcoKSB7XHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJyxmdW5jdGlvbigpe1xyXG4gICAgICAgIGNvbnN0IGhlYWRlcj1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdoZWFkZXInKTtcclxuICAgICAgICBoZWFkZXIuY2xhc3NMaXN0LnRvZ2dsZSgnc3RpY2t5Jyx3aW5kb3cuc2Nyb2xsWSA+IDApO1xyXG4gICAgfSk7XHJcblxyXG4gICAgLy9tZW51VG9nZ2xlXHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWVudVRvZ2dsZScpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywoKT0+e1xyXG4gICAgICAgICB0b2dnbGVNZW51KCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubmF2LW1lbnUnKS5mb3JFYWNoKChpdGVtOkhUTUxFbGVtZW50KT0+e1xyXG4gICAgICAgIGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIHRvZ2dsZU1lbnUoKTtcclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG5cclxuICAgIGZ1bmN0aW9uIHRvZ2dsZU1lbnUoKXtcclxuICAgICAgICBjb25zdCBtZW51VG9nZ2xlPWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tZW51VG9nZ2xlJyk7XHJcbiAgICAgICAgY29uc3QgbmF2aWdhdGlvbj1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmF2aWdhdGlvbicpO1xyXG4gICAgICAgIG1lbnVUb2dnbGUuY2xhc3NMaXN0LnRvZ2dsZSgnYWN0aXZlJyk7XHJcbiAgICAgICAgbmF2aWdhdGlvbi5jbGFzc0xpc3QudG9nZ2xlKCdhY3RpdmUnKTtcclxuICAgIH1cclxuXHJcbiAgfSJdfQ==
