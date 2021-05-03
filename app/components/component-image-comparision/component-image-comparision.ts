export function componentImageComparision() {
        const slide2=document.querySelector('.slide2') as HTMLElement;
        window.addEventListener('mousemove',(e)=>{
            var x=e.clientX;
            slide2.style.left=x+'px';
        });
  }