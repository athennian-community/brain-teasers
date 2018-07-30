let randomTreasure = () => {
	return Math.random() < 0.2
}
let treasureIsland = [
	{name: 'palm tree', hasTreasure: randomTreasure()},
	{name: 'crossbones', hasTreasure: randomTreasure()},
	{name: 'sand', hasTreasure: randomTreasure()},
	{name: 'volcano', hasTreasure: randomTreasure()},
	{name: 'conch', hasTreasure: randomTreasure()},
	{name: 'pirateShip', hasTreasure: randomTreasure()},
]

// let's find the buried treasure!
treasureIsland.forEach(area => {
	if(area.hasTreasure) {
		console.log(area.name)
		return true
	}
})

"instructions: change one line of code so that it only finds the first area with treasure"