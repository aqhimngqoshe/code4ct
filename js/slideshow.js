// SlideShow For Home Page Image
let sliderImages = document.querySelectorAll('.slide'),
    arrowLeft = document.querySelector('#previous'),
    arrowRight = document.querySelector('#next'),
    current = 0;
// Clear All Images
function reset() {
  for(let i = 0; i < sliderImages.length; i++){
    sliderImages[i].style.display = 'none';
  }
}

//Initializes the Slider
function startSlide() {
  reset();
  sliderImages[0].style.display = 'block';
}

//Show previous(Slide to the left)
function slideLeft(){
  reset();
  sliderImages[current - 1].style.display = 'block';
  current--;
}

//Show next(slide to the right)
function slideRight(){
  reset();
  sliderImages[current + 1].style.display = 'block';
  current++;
}
//Left arrow click
arrowLeft.addEventListener('click', function(){
  if(current === 0) {
    current = sliderImages.length;
  }
  slideLeft();
});

//Right arrow click
arrowRight.addEventListener('click', function(){
  if(current === sliderImages.length - 1) {
    current = -1
  }
  slideRight();
});

startSlide();
