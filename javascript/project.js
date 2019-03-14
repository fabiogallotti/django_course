var firstName = prompt("Insert first name: ");
var lastName = prompt("Insert last name: ");
var age = prompt("Insert age: ");
var height = prompt("Insert height in cm: ");
var petName = prompt("Insert pet name: ");

cond1 = (firstName[0].toLowerCase() === lastName[0].toLowerCase());
cond2 = (20 < age < 30);
cond3 = (height > 170);
cond4 = (petName[petName.length - 1].toLowerCase() === "y");

if (cond1 && cond2 && cond3 && cond4) {
  console.log("Hello spy!");
} else {
  console.log("Nothing");
}
