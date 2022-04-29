
const track = document.querySelector(".carousel_track");
var slides = Array.from(track.children);
const nextButton = document.querySelector(".carousel_button--right");
const prevButton = document.querySelector(".carousel_button--left");
const nav = document.querySelector(".carousel_nav");
const dots = Array.from(nav.children);

const slideWidth = slides[0].getBoundingClientRect().width;

//arrange besides each other.
/*slides[0].style.left = 0;
slides[1].style.left = slideWidth + "px";
slides[2].style.left = slideWidth * 2 + "px";
*/
const setSlidePosition = (slide, index) => {
    slide.style.left = slideWidth * index + "px";
}
slides.forEach(setSlidePosition);

// => <- function | to move.
const moveToSlide = (track, currentSlide, targetSlide) => {
    track.style.transform = "translateX(-" + targetSlide.style.left + ")";
    currentSlide.classList.remove("current-slide");
    targetSlide.classList.add("current-slide");
}
const updateDots = (currentDot, targetDot) => {
    currentDot.classList.remove("current-slide");
    targetDot.classList.add("current-slide");
}

const hideShowNav = (slides, prevButton, nextButton, targetIndex) => {
    if (targetIndex === 0) {
        prevButton.classList.add("is-hidden");
        nextButton.classList.remove("is-hidden");
    } else if (targetIndex === slides.length - 1) {
        prevButton.classList.remove("is-hidden");
        nextButton.classList.add("is-hidden");
    } else {
        prevButton.classList.remove("is-hidden");
        nextButton.classList.remove("is-hidden");
    }
}

prevButton.addEventListener("click", e => {
    const currentSlide = track.querySelector(".current-slide");
    const prevSlide = currentSlide.previousElementSibling;
    const currentDot = nav.querySelector(".current-slide");
    const prevDot = currentDot.previousElementSibling;
    const prevIndex = slides.findIndex(slide => slide === prevSlide);

    moveToSlide(track, currentSlide, prevSlide);
    updateDots(currentDot, prevDot);
    hideShowNav(slides, prevButton, nextButton, prevIndex);
});

// Right button
nextButton.addEventListener("click", e => {
    const currentSlide = track.querySelector(".current-slide");
    //console.log(currentSlide);
    //console.log(currentSlide.nextElementSibling);
    const nextSlide = currentSlide.nextElementSibling;
    const currentDot = nav.querySelector(".current-slide");
    const nextDot = currentDot.nextElementSibling;
    const nextIndex = slides.findIndex(slide => slide === nextSlide);

    moveToSlide(track, currentSlide, nextSlide);
    updateDots(currentDot, nextDot);
    hideShowNav(slides, prevButton, nextButton, nextIndex)
    //const amountToMove = nextSlide.style.left;
    //move to next slide
    //track.style.transform = "translateX(" + amountToMove + ")";
    //currentSlide.classList.remove("current-slide");
  //  nextSlide.classList.add("current-slide");
});

nav.addEventListener("click", e => {
    //what indicator was clicked on?
    const targetDot = e.target.closest("button");
    console.log(targetDot);
    if (!targetDot) return; //If click on anything that isn't a button, stop here.

    const currentSlide = track.querySelector(".current-slide");
    const currentDot = nav.querySelector(".current-slide");
    const targetIndex = dots.findIndex(dot => dot == targetDot); //returns index nr.
    const targetSlide = slides[targetIndex];

    moveToSlide(track, currentSlide, targetSlide);
    updateDots(currentDot, targetDot);
    hideShowNav(slides, prevButton, nextButton, targetIndex);

});
