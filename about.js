// script.js

const prevButton = document.getElementById("prevBtn");
const nextButton = document.getElementById("nextBtn");
const images = document.querySelectorAll(".slider img");
let currentIndex = 0;

// Show the initial image (index 0)
images[currentIndex].style.display = "block";

// Function to show a specific image
function showImage(index) {
    if (index < 0) {
        currentIndex = images.length - 1;
    } else if (index >= images.length) {
        currentIndex = 0;
    }

    images.forEach((img, i) => {
        if (i === currentIndex) {
            img.style.display = "block";
        } else {
            img.style.display = "none";
        }
    });
}

// Event listeners for Previous and Next buttons
prevButton.addEventListener("click", () => {
    currentIndex--;
    showImage(currentIndex);
});

nextButton.addEventListener("click", () => {
    currentIndex++;
    showImage(currentIndex);
});


