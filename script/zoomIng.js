const zoomedImg = document.querySelector(".zoomed-image");

function showZoomedImage() {
  const overlay = document.querySelector(".overlay");
  overlay.style.display = "flex";

  const zoomedImg = document.querySelector(".zoomed-image");
  const clickedImage = event.currentTarget;
  const source = clickedImage.getAttribute("data-src");

  zoomedImg.src = source;
}

function closeZoom() {
  const overlay = document.querySelector(".overlay");
  overlay.style.display = "none";
}

const clickableImages = document.querySelectorAll(".clickable-image");

clickableImages.forEach(function (image) {
  image.addEventListener("click", showZoomedImage);
});
