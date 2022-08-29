let rating = document.getElementsByClassName('rating');

rating.addEventListener("click", selectRating);

function selectRating(e) {
    preventDefault(e);
    rating.style.color="orange";
}