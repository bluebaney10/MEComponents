export function responsiveWebCooking() {
    window.addEventListener('scroll',function(){
        const header=document.querySelector('header');
        header.classList.toggle('sticky',window.scrollY > 0);
    });

    //menuToggle
    document.querySelector('.menuToggle').addEventListener('click',()=>{
         toggleMenu();
    });

    document.querySelectorAll('.nav-menu').forEach((item:HTMLElement)=>{
        item.addEventListener('click', () => {
            toggleMenu();
        });
    });

    function toggleMenu(){
        const menuToggle=document.querySelector('.menuToggle');
        const navigation=document.querySelector('.navigation');
        menuToggle.classList.toggle('active');
        navigation.classList.toggle('active');
    }

  }