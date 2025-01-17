// Function that builds a grid in the "container"
const fill = document.querySelector('.fill');
const empties = document.querySelectorAll('.empty');
function createGrid(x) {
    for (var rows = 0; rows < x; rows++) {
        for (var columns = 0; columns < x; columns++) {
            $("#container").append("<div class='grid'></div>");
        };
    };
    $(".grid").width(1100/x);
    $(".grid").height(1100/x);
};

// Function that clears the grid
function clearGrid(){
    $(".grid").remove();
};

// Function that prompts the user to select the number of boxes in a new grid
// the function then also creates that new grid
function refreshGrid(){
    var z = prompt("How many boxes per side?");
    var y = prompt("How many boxes per side?");
    clearGrid();
    createGrid(z,y);
   
};

// Create a 16x16 grid when the page loads.
// Creates a hover effect that changes the color of a square to black when the mouse passes over it, leaving a (pixel) trail through the grid
// allows the click of a button to prompt the user to create a new grid
$(document).ready(function() {
    createGrid(50,50);

    $(".grid").mousedown(function() {
        $(this).css("background-color", "grey");
        });
        $(".grid").mousedown(function() {
            $(this).css("background-color", "grey");
            });

    $(".newGrid").click(function() {
        refreshGrid();

    


        $(".grid").mouseover(function() {
        $(this).css("background-color", "green");
        });
    });
});