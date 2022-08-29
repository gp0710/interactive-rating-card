var ratings = document.getElementById("ratings");

console.log(ratings);
var btns = ratings.getElementsByClassName("btn");
console.log(btns);

/* make highlighted button active */
for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace("active", "");
    this.className += " active";
    });
}


