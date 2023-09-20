const body = document.body
const slides = document.querySelectorAll('.slide')
const leftBtn = document.getElementById('left')
const rightBtn = document.getElementById('right')

// initialize a variable to know which one you are on
// add event listeners to increment the active slides
// slides is a nodelist which is basically like an array
let activeSlide = 0


rightBtn.addEventListener('click', () => {
    activeSlide++

    if (activeSlide > slides.length - 1){
        activeSlide = 0
    }

    setBgToBody()
    setActiveSlide()
})

leftBtn.addEventListener('click', () => {
    activeSlide--

    if (activeSlide < 0){
        activeSlide = slides.length - 1
    }

    setBgToBody()
    setActiveSlide()
})



setBgToBody()

// setting the background image function

function setBgToBody() {
    body.style.backgroundImage = slides[activeSlide].style.backgroundImage
}

// function to set active slides
function setActiveSlide() {
    slides.forEach((slide) => slide.classList.remove ('active'))
    
   slides[activeSlide].classList.add('active')
}