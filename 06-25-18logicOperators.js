let d = "d", b = "b", z ="z",
    expression1 = d || b,
    expression2 = d || false ? b : z

//What does this console log print?
console.log(expression1, expression2)
