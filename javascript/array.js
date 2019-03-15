var roster = []

function addNew(name) {
  roster.push(name);
}

function remove(name) {
  var index = roster.indexOf(name);
  if (index > -1) {
    roster.splice(index, 1);
  }
}

function display(){
  console.log(roster);
}

use = prompt("Hello! Do you want to use the app? (y/n)");
if (use.toLowerCase() === "y") {
  var cycle = true;
  while (cycle) {
    action = prompt("Ok, what do you want to do? Add, Remove, Display or Quit?");
    if (action.toLowerCase() === "add") {
      name = prompt("Ok, insert the name you want to add!");
      addNew(name);
    } else if (action.toLowerCase() === "remove") {
        name = prompt("Ok, tell me the name you want to remove!");
        remove(name);
    } else if (action.toLowerCase() === "display") {
        alert("Check the console!");
        display();
    } else if (action.toLowerCase() === "quit") {
      cycle = false;
      alert("Goodbye!");
    }
  }
}

// Start by asking if they want to use the web app

// Now create a while loop that keeps asking for an action (add,remove, display or quit)
// Use if and else if statements to execute the correct function for each command.
