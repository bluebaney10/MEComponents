export function popupNewsletter() {

document.querySelector('.btn-subscribe').addEventListener('click',()=>{
    popupToggle();
});

document.querySelector('.close').addEventListener('click',()=>{
    popupToggle();
})

function popupToggle(){
    const popup=document.getElementById('popup');
    popup.classList.toggle('active');

}

}