const hambugerMenu= document.querySelector(".bars");
console.log(hambugerMenu)
const nav = document.querySelector("nav");
console.log(nav)

hambugerMenu.addEventListener("click", function(){
    nav.classList.toggle("active")
    hambugerMenu.classList.toggle("times")

})


// Dynamically set the last modified date
const lastModified = document.lastModified;
document.getElementById("lastModified").textContent = `Last Modification: ${lastModified}`;
