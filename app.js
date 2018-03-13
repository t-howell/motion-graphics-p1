//Get slider div and toggler div
let slider = document.getElementById("slider");
let toggler = document.getElementById("toggler");

//sun and moon variable
let sunAndMoon = document.getElementById("sun-moon");

//variables for background circles
let outerCircle = document.getElementById("outerCircle");
let middleCircle = document.getElementById("middleCircle");
let innerCircle = document.getElementById("innerCircle");

//variable for the body to change the background
let pageBody = document.querySelector("body");

//variable for stars
let stars = document.getElementById("stars");


//listen for click event, add/remove 'on' ckass
slider.addEventListener('click', function() {
    //add class for switch animation
    toggler.classList.toggle('on');
    //add class for sun/moon animation
    sunAndMoon.classList.toggle('sun');
    console.log(sunAndMoon.classList);
    //add classes to change background circle colours(3)
    outerCircle.classList.toggle('daytime');
    console.log(outerCircle.classList);

    middleCircle.classList.toggle('daytime');
    innerCircle.classList.toggle('daytime');
    //change body background
    pageBody.classList.toggle('daytime');

    //toggle stars
    stars.classList.toggle('daytime');
});

