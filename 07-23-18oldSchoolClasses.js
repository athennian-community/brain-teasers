function Animal(name, sound, foods) {
	this.name = name
	this.sound = sound
	this.foods = new Array(foods)

	this.makeSound = () => console.log(this.sound)

	this.whatToFeed = () => {
		console.log(`${this.name}(s) can eat ${this.foods.toString()}\n`)
	}
}
let commonFoods = ['eggs', 'squirrels'],
	data = [{name:'Dog', sound:'WOOF!'}, {name:'Snake', sound:'HISS!'}]

// DOGGO
let pupper = new Animal(data[0].name, data[0].sound, commonFoods)
	pupper.foods.push('dog food')
	pupper.makeSound()
	pupper.whatToFeed()

// SNEKI
let longBoi = new Animal(data[1].name, data[1].sound, commonFoods)
	longBoi.foods.push('rats')
	longBoi.makeSound()
	longBoi.whatToFeed()