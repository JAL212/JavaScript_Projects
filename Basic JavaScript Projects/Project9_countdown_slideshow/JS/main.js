function countdown() {
  var second = document.getElementById("seconds").value;

  function tick() {
    seconds = seconds - 1;
    timer.innerHTML = seconds;
    var time = setTimeout(tick, 1000);
    if (seconds == - 1) {
      alert("Time's up!");
      clearTimeout(time);
      timer.innerHTML = "";
    }
  }
}






let slideIndex = 0;
showSlides();

function showSlides() { //Implementing the W3 School approach with setTimeout and slidesIndex because I was getting really hung up on the Countdown() function //
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}