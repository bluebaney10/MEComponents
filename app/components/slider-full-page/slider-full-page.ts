export function sliderFullPage() {
    const imgBx=document.querySelector('.slider-full-page .imgBx');
    const slides=imgBx.getElementsByTagName('img');
    let i=0;

    document.querySelector('.slider-full-page .nextBt').addEventListener('click', () => {
        nextSlide();
        nextSlideText();
    })
    document.querySelector('.slider-full-page .prevBt').addEventListener('click', () => {
        prevSlide();
        prevSlideText();
    })

    function nextSlide(){
       slides[i].classList.remove('active');
        i=(i+1) % slides.length;
        slides[i].classList.add('active');
    }

    function prevSlide(){
        slides[i].classList.remove('active');
        i=(i-1 +slides.length) % slides.length;
        slides[i].classList.add('active');
    }

    const contentBx=document.querySelector('.slider-full-page .contentBx');
    const slidesText=contentBx.getElementsByTagName('div');
    let j=0;

    function nextSlideText(){
        slidesText[j].classList.remove('active');
        j=(j+1) % slidesText.length;
        slidesText[j].classList.add('active');
    }

    function prevSlideText(){
        slidesText[j].classList.remove('active');
        j=(j-1 +slides.length) % slidesText.length;
        slidesText[j].classList.add('active');
    }
  }