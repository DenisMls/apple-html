let slideIndexHd = 1;

showSlidesHd(slideIndexHd);

function nextSlideHd() {
  showSlidesHd((slideIndexHd += 1));
}

function previousSlideHd() {
  showSlidesHd((slideIndexHd -= 1));
}

function currentSlideHd(n) {
  showSlidesHd((slideIndexHd = n));
}

function showSlidesHd(n) {
  let slidesHd = document.getElementsByClassName('header-slider--li');

  if (n > slidesHd.length) {
    slideIndexHd = 1;
  }
  if (n < 1) {
    slideIndexHd = slidesHd.length;
  }
  for (let slideHd of slidesHd) {
    slideHd.style.display = 'none';
  }
  slidesHd[slideIndexHd - 1].style.display = 'block';
}
