const allArrows = document.querySelectorAll('.arrow');
const frame = document.querySelector('.frame');
const slide = document.querySelector('.slide');
const carouselImg = document.querySelectorAll('.carousel-img');

let initial = 0;
let amount = 840;
// let index = 1;
// let offset;

// const nextRightImg = () => {
//      initial -= amount;
//     slide.style.transform = `translate(${initial}px)`;
    
// }
// const nextLeftImg = () => {
//     initial += amount;
//    slide.style.transform = `translate(${initial}px)`;
   
// }

const nextSlide = (e) => {
    let offset = e.target.classList.contains('right') === true ? 1 : -1;
    // e.target.classList.contains('left') === true ? initial += amount : initial -= amount;
    // offset == "1" ? initial += amount : initial -= amount;
    activeSlide(offset);
    // slide.style.transform = `translate(${initial}px)`;
    // slide.children[4].dataset.active === true ? loopSlide() : activeSlide(offset);
}

const activeSlide = (value) => {
    let activeOne = slide.querySelector('[data-active]');
    let nextIndex = [...slide.children].indexOf(activeOne) + value;
    // let nextImg = slide.querySelector(`[data-index = "${index += value}"]`);

    if (nextIndex < 0) {
        nextIndex = slide.children.length -1;
        initial = -3360;
    }
    if (nextIndex >= slide.children.length) {
        nextIndex = 0
        initial = 0;
    }
    console.log(nextIndex);

    let nextImg = slide.children[nextIndex];
    activeOne.removeAttribute('data-active');
    nextImg.dataset.active = true;
    
}

const loopSlide = () => {
    console.log('oi');
    slide.children[4].removeAttribute('data-active');
    slide.children[0].dataset.active = true;
    initial = 0;
    slide.style.transform = `translate(${initial}px)`;
    
}

allArrows.forEach(arrow => {
    arrow.addEventListener("click",nextSlide)
})


// rightArrow.addEventListener('click', nextRightImg);
// leftArrow.addEventListener('click', nextLeftImg);