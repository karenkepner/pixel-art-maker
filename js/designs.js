//Select color.
let color = document.getElementById("color-picker");

let theGrid = document.getElementById("the-grid");

const submitGrid = document.querySelector('#submit-grid');
let height = 5 //document.querySelector("#height");
let width =  10 //document.querySelector("#width");

submitGrid.addEventListener('click', function makeGrid() {
	height = document.getElementById("height");
	width =  document.getElementById("width");
	for (let i = 0; i < width; i++) {
	 	theGrid.insertAdjacentHTML('afterbegin', '<tr>table row</tr>');
	}
	for (let j = 0; j < height; j++) {
	 	theGrid.insertAdjacentHTML('afterbegin', '<td>table detail</td>');
	}
	theGrid.preventDefault();
});
	//build the grid with a for loop that creates
	// the elements of a table that has css to show gridlines.
