var todo = [];
var item;

while (true){
	var action = prompt("What would you like to do?");

	if (action == "New"){
		item = prompt("Wht is you new task?");
		todo.push(item);
	}
	if (action == "list"){
		console.log(todo);
	}
	if (action == "Qui"){
		break;
	}
}

alert("Thank You!!");