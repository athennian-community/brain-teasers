// model
let database = [
	{name: 'Elvin', occupation: "professional ukulele player"},
	{name: 'Spencer' , occupation: 'bootleg keyboard dealer'},
	{name: 'Jeremy', occupation: 'diversity hire'},
	{name: 'Zuckerberg', occupation: 'a lizard'},
]

// controller
let indexFinder = name => {
	if(name==='Zuckerberg') throw "he got fired"
	database.forEach((employee, i) => {
		if(name==employee.name) {
			return i
		}
	})
	return -1 // can't find!
}
let index

// what does it print? fix this algorithm!

// view
index = indexFinder('Elvin')
console.log(`${database[index].name} is a ${database[index].occupation}\n`)

index = indexFinder('Spencer')
console.log(`${database[index].name} is a ${database[index].occupation}\n`)

index = indexFinder('Jeremy')
console.log(`${database[index].name} is a ${database[index].occupation}\n`)