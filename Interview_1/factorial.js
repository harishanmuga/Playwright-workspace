// using recursive approach

function factorial(input) {
    if (input==0 || input==1) {
        return 1
    }
    return input*factorial(input-1)
}

console.log(factorial(5));


// using loop

function factorialLoop(input) {
    let fact = 1

    for (let i = 1; i <=input; i++) {
       
        fact = fact * i
        
    }
    return fact
}

console.log(factorialLoop(7));