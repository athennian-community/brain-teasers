let d = "d", b = "b", z ="z",
    expression1 = d || b,
    expression2 = d || false ? b : z

console.log(expression1, expression2)
//What does it print?