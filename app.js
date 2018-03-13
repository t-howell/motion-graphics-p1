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
});
// toggler.addEventListener('click', function() {
//     console.log('this works');
//     toggler.classList.toggle("on");
// });
// //Check that page is loaded
// document.addEventListener("DOMContentLoaded", ready, false);

// //when page is ready, set up animation
// function ready() {
//     document.getElementById("switch").onclick = function() {
//         let toggler = document.getElementById("toggler");
//         toggler.classList.toggle('on');

//         function move(elem) {
//             let left = 0;
//             function frame() {
//                 left++;
//                 elem.style.left = left + 'px';
//                 if (left == 400) {
//                     clearInterval(id);
//                 };
//             };
//             let id = setInterval(frame, 1);
//         };
//     };
// };

//JQuery toggle button

// $(document).ready(function() {
//     $("#switch").click(function(event) {
//         //$(this).children(":first-child").css("left", "0").animate({left: "+=100"});
//        $(this).children(":first-child").toggleClass("on");
//     });
// });

//Take 3

