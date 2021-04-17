import { IComponent } from "./component";
import { componentMenu } from "./component-menu/component-menu";
import { componentAdminDashboard } from "./component-admin-dashboard/component-admin-dashboard";
import { parallaxBackground } from "./parallax-background/parallax-background";
import { responsiveWebCooking } from "./responsive-web-cooking/responsive-web-cooking";
export class MeComponents {
    public components: Array<IComponent> = [];

    constructor() {
        componentMenu();
        componentAdminDashboard();
        responsiveWebCooking();
        this.createparallaxBackground();

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