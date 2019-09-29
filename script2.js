// for (i=0; i<3; i++){
// 	console.log(i);
// }

// var name = "ольга";

// function square(value) {
// 	var result = value * value;
// 	console.log(name);
// 	return result;
// }

// console.log(result);
// var squareFive = square(5);

// console.log(squareFive);

// var squareSix = square(6);

// console.log(squareSix);


// var squareTwo = square(2);

// console.log(squareTwo);

// var myName = document.getElementById("name");
// console.log(myName);

var form = document.getElementById("form");

function validate(event) {
	event.preventDefault();
	var myName = document.getElementById("name");
	var myNameValue = myName && myName.value;

	if (myNameValue === ''){
		myName.style.borderBottom = '3px solid red';
	} else {
		myName.style.borderBottom = '3px solid rgba(0, 0, 0, 0.3)';
	}
}

form.addEventListener('submit', validate);
