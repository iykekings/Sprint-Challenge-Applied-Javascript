class Carousel {
  constructor(carouselElement) {
    this.carouselElement = carouselElement;
    this.leftButton = carouselElement.querySelector('.left-button');
    this.rightButton = carouselElement.querySelector('.right-button');
    this.images = carouselElement.querySelectorAll('img');
    this.currentIndex = 0;
    this.activate();
    this.rightButton.addEventListener('click', this.slideRight.bind(this));
    this.leftButton.addEventListener('click', this.slideLeft.bind(this));
    setInterval(this.slideRight.bind(this), 3000);
  }

  activate() {
    this.images[this.currentIndex].classList.add('active');
  }

  resetActive() {
    this.images.forEach(image => image.classList.remove('active'));
  }

  slideLeft() {
    this.resetActive();
    if (this.currentIndex === 0) {
      this.images[this.images.length - 1].classList.add('active');
      this.currentIndex = this.images.length - 1;
    } else {
      this.images[--this.currentIndex].classList.add('active');
    }
  }

  slideRight() {
    this.resetActive();
    if (this.currentIndex === this.images.length - 1) {
      this.images[0].classList.add('active');
      this.currentIndex = 0;
    } else {
      this.images[++this.currentIndex].classList.add('active');
    }
  }
}

let carousel = document.querySelector('.carousel');
new Carousel(carousel);

/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to grab a reference to the carousel, and in it grab the left and right buttons
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this compoennt. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/
