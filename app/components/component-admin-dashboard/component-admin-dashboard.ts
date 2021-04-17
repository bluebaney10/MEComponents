export function componentAdminDashboard() {

   const toggleBt = document.querySelector('.toggle');
   if(toggleBt){
    toggleBt.addEventListener('click', () => {
        let toggle = document.querySelector('.toggle');
        let navigation = document.querySelector('.navigation');
        let main = document.querySelector('.main');
        toggle.classList.toggle('active');
        navigation.classList.toggle('active');
        main.classList.toggle('active');
    });
   }
 }