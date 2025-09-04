var slides = document.querySelectorAll(".slide");
var prevBtn = document.querySelector(".prev");
var nextBtn = document.querySelector(".next");
var dotsContainer = document.querySelector(".dots");
var index = 0;

// Create dots
for (var i = 0; i < slides.length; i++) {
  var dot = document.createElement("span");
  dot.setAttribute("data-index", i);
  if (i === 0) dot.classList.add("active");
  dotsContainer.appendChild(dot);
}

var dots = document.querySelectorAll(".dots span");

function showSlide(n) {
  // Wrap around
  if (n >= slides.length) index = 0;
  if (n < 0) index = slides.length - 1;

  // Hide all slides
  for (var i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
    dots[i].classList.remove("active");
  }

  // Show active slide
  slides[index].style.display = "block";
  dots[index].classList.add("active");
}

nextBtn.addEventListener("click", function () {
  index++;
  showSlide(index);
});

prevBtn.addEventListener("click", function () {
  index--;
  showSlide(index);
});

dots.forEach(function(dot) {
  dot.addEventListener("click", function() {
    index = parseInt(this.getAttribute("data-index"));
    showSlide(index);
  });
});

// Auto play
setInterval(function () {
  index++;
  showSlide(index);
}, 3000);

// Initial call
showSlide(index);
