export function componentLoginRegister() {

    document.querySelectorAll('.bt-toggle').forEach((item:HTMLElement)=>{
        item.addEventListener('click',()=>{
            toggle();
        })
    })

    function toggle(){
        const constainer=document.querySelector('.container');
        const section=document.querySelector('section');
        constainer.classList.toggle('active');
        section.classList.toggle('active');
   }

  }