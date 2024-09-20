const control = document.querySelectorAll('.arrow');
const slide = document.querySelector('.slide');
const dots = document.querySelectorAll('.dot');
const dotContainer = document.querySelector('.dots');


const nextSlide = (e) => {
    let offset = e.target.classList.contains('right') === true ? 1 : -1;
    activeSlide(offset);
    activeDot();
}

const activeSlide = (value) => {
    let activeImg = slide.querySelector('[data-active]');
    let nextIndex = [...slide.children].indexOf(activeImg) + value;

    if (nextIndex < 0) {
        nextIndex = slide.children.length -1;
    }
    if (nextIndex >= slide.children.length) {
        nextIndex = 0
    }

    let nextImg = slide.children[nextIndex];

    activeImg.removeAttribute('data-active');
    nextImg.dataset.active = true;
}

const selectSlide = (e) => {
    let index = e.target.dataset.index;    
    let showImg = slide.children[index -1];
    slide.querySelector('[data-active]').removeAttribute('data-active');
    showImg.dataset.active = true;
    activeDot();
}

const activeDot = () => {
    dots.forEach(dot => {
        dot.classList.remove('active');
    });

    let activeIndex = [...slide.children].indexOf(slide.querySelector('[data-active]')) + 1 ;
    let activeD = dotContainer.querySelector(`[data-index = '${activeIndex}']`);

    activeD.classList.add('active');
}


control.forEach(arrow => {
    arrow.addEventListener("click",nextSlide)
})

dots.forEach(dot => {
    dot.addEventListener('click', selectSlide)
})

