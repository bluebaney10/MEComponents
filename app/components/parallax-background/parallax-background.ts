  import { IComponent } from "../component";

  export class parallaxBackground implements IComponent {
    public id: string;
    private element: HTMLElement;

    constructor(el: HTMLElement) {
        this.element = el;
        this.MouseMove();
    }

    private MouseMove() {
         document.addEventListener("mousemove",parallax);
         function parallax(e:MouseEvent){
          this.querySelectorAll('.layer').forEach((layer: HTMLElement)=>{
            const speed:number= Number(layer.getAttribute('data-speed'));
            const x=(window.innerWidth- e.pageX * speed)/100;
            const y=(window.innerHeight- e.pageY * speed)/100;
            layer.style.transform= `translateX(${x}px) translateY(${y}px)`
          })
        }
    }

}