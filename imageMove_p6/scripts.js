let slides = document.querySelectorAll(".slide");
let index = 0;

// first image show
slides[index].classList.add("active");

function moveForward() {
  slides[index].classList.remove("active");

  index++;

  if (index >= slides.length) {
    index = 0;
  }

  slides[index].classList.add("active");
}

function moveBackward() {
  slides[index].classList.remove("active");

  index--;

  if (index < 0) {
    index = slides.length - 1;
  }

  slides[index].classList.add("active");
}
