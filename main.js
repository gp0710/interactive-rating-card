//select the elements
const star = document.querySelector(".icon-star");
const ratings = document.querySelector("#ratings");
const ratingBtn = document.querySelectorAll(".btn");
const results = document.querySelector("#results");
const ratingContainer = document.querySelector("#rating-component");
const ratingValue = document.querySelector("#rating-value");
const submit = document.querySelector("#submit-button");

results.style.display = "none"

submit.addEventListener("click", submitCall)

function submitCall(e) {
    e.preventDefault();
    results.style.display = "flex"
    ratingContainer.style.display = "none"
    star.style.display = "none"
} 

//Add active class to rating
//When another rating is clicked, remove the active class
//Keep active class for current selection
ratingBtn.forEach((rating) => {
    console.log(rating.classList)
    rating.addEventListener("click", function clickRating() {
        const currentlyActive = document.querySelector(".btn.active");
        if(currentlyActive) {
            currentlyActive.classList.remove("active")
        } 
        rating.classList.add("active");
        ratingValue.textContent = `You selected ${rating.textContent} out of 5`
    })
})