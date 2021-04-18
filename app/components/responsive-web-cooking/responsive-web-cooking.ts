export function responsiveWebCooking() {
    window.addEventListener('scroll',function(){
        const header=document.querySelector('header');
        header.classList.toggle('sticky',window.scrollY > 0);
    });

    //menuToggle
    document.querySelector('.responsive-web-cooking .menuToggle').addEventListener('click',() => {
         toggleMenu();
    });

    document.querySelectorAll('.responsive-web-cooking .nav-menu').forEach((item:HTMLElement)=>{
        item.addEventListener('click', () => {
            toggleMenu();
        });
    });

    function toggleMenu(){
        const menuToggle=document.querySelector('.responsive-web-cooking .menuToggle');
        const navigation=document.querySelector('.responsive-web-cooking .navigation');
        menuToggle.classList.toggle('active');
        navigation.classList.toggle('active');
    }

  }