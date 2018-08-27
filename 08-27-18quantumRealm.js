(async function quantumRealm(){
	const key = 42

	const delayedKey = new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve(key)
			}, 2000)
		})

	const logKey = function() {
		console.log(await delayedKey)
		}

	const returnKey = function() {
		return await delayedKey
		}

	console.log(key)
	console.log(await delayedKey)
	logKey()
	console.log(returnKey())
})()


"We want to return:"
"42"
"42"
"42"
"42"