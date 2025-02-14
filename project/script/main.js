// getting the element and setting up their toggles 

let navBar = document.querySelector(".navbar");
const bar = document.querySelector(".bars")


bar.addEventListener('click', function(){
navBar.classList.toggle('act');
bar.classList.toggle("times");
});