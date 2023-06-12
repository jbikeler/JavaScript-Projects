let slideIndex = 1
setSlide(slideIndex)

function countdown() {
    var seconds = document.getElementById("seconds").value;

    function tick () {
        seconds = seconds - 1;
        document.getElementById("timer").innerHTML - seconds;
        var time = setTimeout(tick, 1000);
        if (seconds == -1) {
            alert("Time's up!");
            clearTimeout(time);
            document.getElementById("timer").innerHTML = "";
        }
    }
    tick();
}

function cycleSlides(n) { //increment or decrement slide index then set slide
    setSlide(slideIndex += n);
}

function currentSlide(n) {
    setSlide(slideIndex = n); //set slide index to specified slide then set slide
}


function setSlide(n) {
    let i;
    let slides = document.getElementsByClassName("slide-con"); //make an array of slide-con elements
    let dots = document.getElementsByClassName("dot"); //make an array of dots elements
    if (n > slides.length) {slideIndex = 1} //if we have passed the length of the array set index to 1
    if (n < 1) {slideIndex = slides.length} //if we have gone below the first index set index to the last in the array
    for (i = 0; i < slides.length; i++) { //loop through slides and set hide them
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) { //loop through dots and if they have the avtive class remove that class
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block"; //set the current slide to show
    dots[slideIndex-1].className += " active"; //set the correlated dot to be style correctly by adding the "active" class

}
