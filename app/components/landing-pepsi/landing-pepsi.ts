export function landingPepsi() {

    document.querySelectorAll('.landing-pepsi .tn-pepsi').forEach((item:HTMLElement)=>{
        item.addEventListener('click',()=>{
            const img=item.getAttribute('data-image');
            const bg=item.getAttribute('data-bg');
            imgSlider(img);
            changeBgColor(bg);
        })
    });

    function imgSlider(anything:string){
        const pepsi:HTMLImageElement= document.querySelector('.landing-pepsi .pepsi');
        pepsi.src = 'images/'+anything;
     }

     function changeBgColor(color:string){
      const landingPepsi:HTMLElement=document.querySelector('.landing-pepsi');
      landingPepsi.style.background=color;
     }
  }