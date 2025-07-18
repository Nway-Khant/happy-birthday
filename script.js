const images = [
  "images/photo1.jpg",
  "images/photo2.jpg",
  "images/photo3.jpg",
  "images/photo4.jpg",
  "images/photo5.jpg",
  "images/photo6.jpg",
  "images/photo7.jpg",
  "images/photo8.jpg",
  "images/photo9.jpg",
  "images/photo10.jpg",
  "images/photo11.jpg",
  "images/photo12.jpg",
  "images/photo13.jpg",
  "images/photo14.jpg",
  "images/photo15.jpg",
  "images/photo16.jpg",
  "images/photo17.jpg",
  "images/photo18.jpg",
  "images/photo19.jpg",
  "images/photo20.jpg",
  "images/photo21.jpg",
  "images/photo22.jpg",
  "images/photo23.jpg",
  "images/photo24.jpg",
  "images/photo25.jpg",
  "images/photo26.jpg",
  "images/photo27.jpg",
  "images/photo28.jpg",
  "images/photo29.jpg",
  "images/photo30.jpg"
];

const imageElement = document.getElementById("slideshow-image");
let index = 0;

function showNextImage() {
  imageElement.style.opacity = 0;

  setTimeout(() => {
    imageElement.src = images[index];
    imageElement.style.opacity = 1;
    index = (index + 1) % images.length;
  }, 1000);
}

// Initial show
showNextImage();
setInterval(showNextImage, 3000);
