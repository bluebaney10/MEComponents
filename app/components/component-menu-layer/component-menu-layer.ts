export function componentMenuLayer() {
    const navigation = document.querySelector('.navagation');
    document.querySelectorAll('.toggle').forEach((item:HTMLElement) =>{
        item.addEventListener('click',()=>{
           item.classList.add('active');
           navigation.classList.add('active')
        })
    });
  }