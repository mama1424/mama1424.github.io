

document.addEventListener("DOMContentLoaded", () => {
    const carouselTrack = document.querySelector(".carousel-track");
    const prevButton = document.querySelector(".carousel-btn.prev");
    const nextButton = document.querySelector(".carousel-btn.next");
    const filterDropdown = document.querySelector("#assignment-filter");
  
    let images = [];
    let currentSlideIndex = 0;
  
    // Fetch images from JSON
    fetch("../json/images.json")
      .then((response) => response.json())
      .then((data) => {
        images = data;
        loadImages();
      })
      .catch((error) => console.error("Error loading images:", error));
  
    function loadImages(filter = "all") {
      // Filter images based on the selected assignment
      const filteredImages = filter === "all" ? images : images.filter((image) => image.assignment === filter);
  
      // Populate carousel with images
      carouselTrack.innerHTML = filteredImages
        .map(
          (image) => `
          <div class="carousel-item">
            <img src="${image.src}" alt="${image.caption}">
            <p class="caption">${image.caption}</p>
          </div>
        `
        )
        .join("");
  
      currentSlideIndex = 0;
      updateCarousel();
    }
  
    function updateCarousel() {
      const trackWidth = carouselTrack.offsetWidth;
      carouselTrack.style.transform = `translateX(-${currentSlideIndex * trackWidth}px)`;
    }
  
    nextButton.addEventListener("click", () => {
      const totalSlides = carouselTrack.children.length;
      currentSlideIndex = (currentSlideIndex + 1) % totalSlides;
      updateCarousel();
    });
  
    prevButton.addEventListener("click", () => {
      const totalSlides = carouselTrack.children.length;
      currentSlideIndex = (currentSlideIndex - 1 + totalSlides) % totalSlides;
      updateCarousel();
    });
  
    filterDropdown.addEventListener("change", (event) => {
      loadImages(event.target.value);
    });
  });
  
  function loadImages(filter = "all") {
    const filteredImages = filter === "all" ? images : images.filter((image) => image.assignment === filter);
  
    // Populate carousel with images
    carouselTrack.innerHTML = filteredImages
      .map(
        (image) => `
        <div class="carousel-item">
          <img src="${image.src}" alt="${image.caption}" onerror="this.onerror=null;this.src='fallback.jpg';">
          <p class="caption">${image.caption}</p>
        </div>
      `
      )
      .join("");
  
    currentSlideIndex = 0;
    updateCarousel();
  }
  
  
  
  