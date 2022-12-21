let slideIndex = 1;
showSlides1(slideIndex);

function currentSlide(n) {
    showSlides1(slideIndex = n);
  }

function showSlides1(n) {
    let i;
    let slides = document.getElementsByClassName("slides-block");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) 
    {slideIndex = 1}
    if (n < 1) 
    {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) 
    {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) 
    {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "flex";
    dots[slideIndex-1].className += " active";
  }