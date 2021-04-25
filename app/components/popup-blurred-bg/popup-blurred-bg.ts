export function popupBlurredBg() {
    document.querySelector('.bt-read-more').addEventListener('click',()=>{
        toggle();
    })

    document.querySelector('.bt-close').addEventListener('click',()=>{
        toggle();
    })

    function toggle(){
        console.log('click read more');
        let blur = document.getElementById('blur');
        blur.classList.toggle('active');
        let popup = document.getElementById('popup');
        popup.classList.toggle('active');
    }
  }