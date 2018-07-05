// Keyless Car......

// function checkDriverAge() {

// 	var age = prompt("Enter your age");
// if (Number(age) < 18) {
// 	alert("Sorry, you are too young to drive this car. Powering off");
// } else if (Number(age) === 18) {
// 	alert("Congratulations on your first year of driving. Enjoy the ride!");
// } else if (Number(age) > 18 ) {
// 	alert("Powering On. Enjoy the ride!");
// }
// return age;
// }

// checkDriverAge();

// DOM Events
 var button = document.getElementById("enter");
 var input = document.getElementById("userinput");
 var ul = document.querySelector("ul");

 button.addEventListener("click", function() {
 	if (input.value.length > 0) {
 		var li = document.createElement("li");
 	li.appendChild(document.createTextNode(input.value));
 	ul.appendChild(li); 
 	input.value="";
 	}
 	
 })

 