export function componentMenu() {
        document.querySelector('.menu-toggle').addEventListener('click', ()=> {
        document.querySelector('.menu-toggle').classList.toggle('active');
        document.querySelector('nav').classList.toggle('active');
    })
  }