//Select color.
let color = document.querySelector("#color-picker");

let theGrid = document.querySelector("#the-grid");

const submitGrid = document.querySelector('#submit-grid');
let height = 5 //document.querySelector("#height");
let width =  10 //document.querySelector("#width");

submitGrid.addEventListener('click', function makeGrid() {

	let height = document.querySelector("#height");
	let width =  document.querySelector("#width");
	for (let i = 0; i < width; i++) {
	 	theGrid.insertAdjacentHTML('afterbegin', '<tr>table row</tr>');
	}
	for (let j = 0; j < height; j++) {
	 	theGrid.insertAdjacentHTML('afterbegin', '<td>table detail</td>');
	}
});
	//build the grid with a for loop that creates
	// the elements of a table that has css to show gridlines.
