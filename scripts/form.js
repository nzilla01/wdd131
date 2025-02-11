const prod = ["Laptop", "jumia", "DVD-player", "phone", "tablet", "camera", 
    "Headphones", "Speakers", "Microphone", "keyboard", "mouse", "monitor"];// creat an array of products

const form = document.getElementById('product');// get the form element by id

prod.forEach((product) => {   // loop through the array of products
    let option = document.createElement('option'); // create an option element
    option.value = product;  // set the value of the option element
    option.textContent = product;
    form.appendChild(option);
});
 

function updateReviewCounter() {
    let reviewCount = localStorage.getItem("reviewCount");

    if (!reviewCount) {
        reviewCount = 0;
    } else {
        reviewCount = parseInt(reviewCount); }

    reviewCount++;

   
    localStorage.setItem("reviewCount", reviewCount);

    document.getElementById("review-counter").textContent = `Reviews Submitted: ${reviewCount}`;
}

window.onload = updateReviewCounter;
