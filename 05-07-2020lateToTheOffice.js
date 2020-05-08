// 0 1 2 3 4 - what order will we arrive in?

// new promise
const pm = num => new Promise((resolve, reject) => {
	console.log(num)
	resolve(" ")
})

// async function
const someFn = (async() => {

	await console.log(3)
})()

// timeout of 0
setTimeout(() => {
	console.log(2)
}, 0)

// sync code
console.log(4)

// promised function call and then call
pm(0).then(res => {
	console.log(res)
})

// resolve and then call
Promise.resolve().then(() => {
	console.log(1)
})
