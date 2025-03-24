const gallery = document.getElementById("gallery");
const images = gallery.querySelectorAll("img");
let currentIndex = 0;

function showImage(index) {
    const offset = -index * 100; // Shift images horizontally
    gallery.style.transform = `translateX(${offset}%)`;
}

document.getElementById("prev-btn").addEventListener("click", () => {
    currentIndex = (currentIndex > 0) ? currentIndex - 1 : images.length - 1;
    showImage(currentIndex);
});

document.getElementById("next-btn").addEventListener("click", () => {
    currentIndex = (currentIndex < images.length - 1) ? currentIndex + 1 : 0;
    showImage(currentIndex);
});

// Initialize gallery
showImage(currentIndex);
