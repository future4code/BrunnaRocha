const operation = (process.argv[2])
const firstNumber = Number(process.argv[3])
const secondNumber = Number(process.argv[4])

if (operation === "add") {
    let response = firstNumber + secondNumber
    console.log(`O resultado será: ${response}`)
} else if (operation === "sub") {
    let response = firstNumber - secondNumber
    console.log(`O resultado será: ${response}`)
} else if (operation === "mult") {
    let response = firstNumber * secondNumber
    console.log(`O resultado será: ${response}`)
} else if (operation === "div") {
    let response = firstNumber / secondNumber
    console.log(`O resultado será: ${response}`)
}

