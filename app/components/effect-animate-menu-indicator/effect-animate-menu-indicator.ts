export function effectAnimateMenuIndicator() {
    let list = document.querySelectorAll('.list');
    for(let i=0;i<list.length;i++){
        list[i].addEventListener('mouseover',()=>{
            let j=0;
            while(j<list.length){
                list[j++].className='list';
            }
            list[i++].className='list active';
        })


        /*
        list[i].onmouseover = function(){
            let j=0;
            while(j<list.length){
                list[j++].className='list';
            }
            list[i++].className='list active';
        }*/
    }

    list.forEach(element=>{
        element.addEventListener("mouseenter",function(event){
            let bg = document.querySelector('body');
            let tar = event.target as HTMLElement;
            let color = tar.getAttribute('data-color');
            bg.style.backgroundColor=color;
        })
    })
  }