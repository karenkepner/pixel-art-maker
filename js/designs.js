//Select color.
let color = document.querySelector('color-picker');


const submitGrid = document.querySelector('#submit-grid');
//Set grid size.
submitGrid.addEventListener('click', function(){
	let height = document.querySelector("#height").value;
	let width = document.querySelector("#width").value;
	console.log('height:' + height);
	console.log('width:' + width);
	//alert('height:' + height + 'width:' + width);
	submitGrid.preventDefault();
	makeGrid();
})

//document.querySelector("")
//on Submit of both height and width, assign those values to height and width.


function makeGrid() {
	console.log("Make a grid.");
	const theGrid = document.querySelector('#the-grid');
	theGrid.createElement('tr');
	theGrid.createElement('td');

	//build the grid with a for loop that creates
	// the elements of a table that has css to show gridlines.

}
