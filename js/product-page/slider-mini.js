let slideIndexMini = 1;

showSlidesMini(slideIndexMini);

function nextSlideMini() {
  showSlidesMini((slideIndexMini += 1));
}

function previousSlideMini() {
  showSlidesMini((slideIndexMini -= 1));
}

function currentSlideMini(n) {
  showSlidesMini((slideIndexMini = n));
}

function showSlidesMini(n) {
  let slidesMini = document.getElementsByClassName('visible-cart--mini');

  if (n > slidesMini.length) {
    slideIndexMini = 1;
  }
  if (n < 1) {
    slideIndexMini = slidesMini.length;
  }
  for (let slideMini of slidesMini) {
    slideMini.style.display = 'none';
  }
  slidesMini[slideIndexMini - 1].style.display = 'block';
}
