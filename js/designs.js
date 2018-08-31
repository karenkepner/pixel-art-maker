//Select color.
let colorPicked = document.getElementById("color-picker");
let theGrid = document.getElementById("the-grid");

const submitGrid = document.querySelector('#submit-grid');
let height = 5;
let width = 10;

submitGrid.addEventListener('click', function setGridSize(e) {
	height = document.getElementById("height").value;
	width =  document.getElementById("width").value;
	e.preventDefault();
	buildGrid(height, width);
});

	//build the grid with a for loop that creates
	// the elements of a table that has css to show gridlines.

function buildGrid(height, width){
	let grid = "";
	for (let i = 0; i < height; i++) {
		grid += '<tr id="row' + i + '">';
		for (let j = 0; j < width; j++) {
			grid += '<td class="grid-box column' + j + '"></td>';
		}
		grid += '</tr>';
	}
	theGrid.innerHTML = grid;
	addEventListenerToGridbox();
}

//add an event listener for the grid boxes so they can be colored in.
function addEventListenerToGridbox(e){
	let boxes = document.getElementsByClassName('grid-box');
	for (let i = 0; i < boxes.length; i++){
		boxes[i].addEventListener('click', function(element){
			let box = element.target;
			box.style.backgroundColor = colorPicked.value;
	})
	}
}
