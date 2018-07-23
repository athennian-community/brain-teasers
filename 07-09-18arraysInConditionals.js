let lists = {
	toDoList: ["code"],
	groceryList: ["potato", "tomato"]
}

lists.toDoList.pop() // woohoo!

console.log(lists.toDoList ? "let's" : "let's not")

console.log(lists.toDoList == [] ? "buy groceries" : "do work")

console.log(lists.toDoList.length == 0 ? "now" : "later")