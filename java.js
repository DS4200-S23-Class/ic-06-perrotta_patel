// gets the circle by element ID
let circle = document.getElementById("top_right");

// Click button function...WIP
function clickButton() {
    document.getElementById('bottom_parallel').classList.toggle("hovered");
}

//  handles when the mouse is over the circle
circle.addEventListener('mouseover', function () {
    this.style.fill = "pink";
});

// handles when the mouse goes away from the circle 
circle.addEventListener('mouseout', function () {
    fill(circle, "black");
});

// changes the color of this circle to the given circle 
function fill(x, color) {
    x.style.fill = color;
}