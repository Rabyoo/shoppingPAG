const carouselItems = document.querySelectorAll(".carousel-item");
let currentItem = 0;

function showNextItem() {
  // Hide the current item
  carouselItems[currentItem].style.display = "none";

  // Calculate the index of the next item
  currentItem = (currentItem + 1) % carouselItems.length;

  // Show the next item
  carouselItems[currentItem].style.display = "block";
}

// Call the showNextItem function every 3 seconds to create a slideshow effect
setInterval(showNextItem, 3000);
