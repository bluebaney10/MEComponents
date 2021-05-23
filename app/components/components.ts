import { IComponent } from "./component";
import { componentMenu } from "./component-menu/component-menu";
import { componentAdminDashboard } from "./component-admin-dashboard/component-admin-dashboard";
import { parallaxBackground } from "./parallax-background/parallax-background";
import { responsiveWebCooking } from "./responsive-web-cooking/responsive-web-cooking";
import { sliderFullPage } from "./slider-full-page/slider-full-page";
import { landingPepsi } from "./landing-pepsi/landing-pepsi";
import {popupNewsletter} from "./popup-newsletter/popup-newsletter";
import {popupBlurredBg} from "./popup-blurred-bg/popup-blurred-bg";
import {componentImageComparision} from "./component-image-comparision/component-image-comparision";
import {componentLoginRegister} from "./component-login-register/component-login-register";
//import { sliderFullPage } from "./slider-full-page/slider-full-page";
//import {componentToggleTheme} from "./component-toggle-theme/component-toggle-theme";
import {componentReadMore} from "./component-read-more/component-read-more";

export class MeComponents {
    public components: Array<IComponent> = [];

    constructor() {
        componentMenu();
        componentAdminDashboard();
        //responsiveWebCooking();
        //sliderFullPage();
        landingPepsi();
        //popupNewsletter();
        //popupBlurredBg();
        this.createparallaxBackground();
        componentImageComparision();
        componentLoginRegister();
        //componentToggleTheme();
        componentReadMore();

    }

    private createparallaxBackground() {
        document.querySelectorAll('.parallax-background').forEach((el: HTMLElement) => {
            this.components.push(new parallaxBackground(el));
        });
    }
}

(() => {
    const meComponents = new MeComponents();
    (window as any).meComponents = MeComponents;
})();