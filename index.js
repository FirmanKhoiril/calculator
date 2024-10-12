// function puasaGakYa(agama, umur, gender, datangBulan) {
//     if(agama.toLowerCase() !== "muslim") {
//         return console.log("Tidak diwajibkan berpuasa karena non muslim"); 
//     }
    
//     if(umur <= 12) {
//         return console.log("Tidak diwajibkan Berpuasa karena masih dibawah umur"); 
//     }

//     if(gender.toLowerCase() === "wanita" && datangBulan) {
//         return console.log("Tidak diwajibkan Berpuasa karena masih datang bulan");   
//     }

//     return console.log("Wajib berpuasa");
// }


// function calculator(number, number2, operator) {
//     return eval(`${number} ${operator} ${number2}`)
// }

// console.log(calculator(1, 2, '+')) // 3
// console.log(calculator(1, 2, '-')) // -1
// console.log(calculator(1, 2, '*')) // 2
// console.log(calculator(1, 2, '/')) // 0.5
// console.log(calculator(4, 2, '%')) // 0


// function graduate(name, score) {
//     if(score >= 70) {
//         console.log(`${name} lulus`)
//     } else {
//         console.log(`${name} tidak lulus`)
//     }
// }

// graduate("Kokasih", 98)
// graduate("Fulan", 14)


let existingResult = false;
const result = document.getElementById("result");
const lastResult = document.getElementById("existingResult");
const darkToogle = document.getElementById("dark-toggle")
const container = document.querySelector(".container")
const calculatorContainer = document.querySelector(".calculator-container")
const existingResultParagraf = document.getElementById("existingResult")
const aC = document.getElementById("AC")
const plus = document.getElementById("plus")
const minus = document.getElementById("minus")
const times = document.getElementById("times")
const division = document.getElementById("division")
const decimal = document.getElementById("decimal")
const one = document.getElementById("one")
const two = document.getElementById("two")
const three = document.getElementById("three")
const four = document.getElementById("four")
const five = document.getElementById("five")
const six = document.getElementById("six")
const seven = document.getElementById("seven")
const eight = document.getElementById("eight")
const nine = document.getElementById("nine")
const zero = document.getElementById("zero")

function addToDisplay(input) {

    const operators = ['+', '-', '*', '/'];

    const lastChar = result.value[result.value.length - 1];

    if (operators.includes(lastChar) && operators.includes(input)) {
        alert("You already entered an operator. Please enter a number before adding another operator.")
        return;
    }

    if (existingResult) {
        // result.value = "";
        existingResult = false;
    }
    result.value += input;
}

function allClear() {
    result.value = "";
    existingResult = false; 
    lastResult.innerHTML = ""
}

function resultEqual() {
    const evaluatedResult = eval(result.value);
    lastResult.innerHTML = `${result.value}`;
    result.value = evaluatedResult;
    existingResult = true; 
}

darkToogle.addEventListener("change", function() {
    if (this.checked) {
        container.classList.add("light-bg")
        container.classList.remove("dark-bg")
        calculatorContainer.classList.add("light-secondary-bg")
        calculatorContainer.classList.remove("dark-secondary-bg")
        result.classList.add("text-black")
        result.classList.remove("text-white")
        existingResultParagraf.classList.add("text-black")
        existingResultParagraf.classList.remove("text-white")
        aC.classList.add("btn-blur")
        aC.classList.remove("btn-dark")
        plus.classList.add("btn-blur")
        plus.classList.remove("btn-dark")
        minus.classList.add("btn-blur")
        minus.classList.remove("btn-dark")
        times.classList.add("btn-blur")
        times.classList.remove("btn-dark")
        decimal.classList.add("btn-blur")
        decimal.classList.remove("btn-dark")
        division.classList.add("btn-blur")
        division.classList.remove("btn-dark")
        one.classList.add("btn-blur")
        one.classList.remove("btn-dark")
        two.classList.add("btn-blur")
        two.classList.remove("btn-dark")
        three.classList.add("btn-blur")
        three.classList.remove("btn-dark")
        four.classList.add("btn-blur")
        four.classList.remove("btn-dark")
        five.classList.add("btn-blur")
        five.classList.remove("btn-dark")
        six.classList.add("btn-blur")
        six.classList.remove("btn-dark")
        seven.classList.add("btn-blur")
        seven.classList.remove("btn-dark")
        eight.classList.add("btn-blur")
        eight.classList.remove("btn-dark")
        nine.classList.add("btn-blur")
        nine.classList.remove("btn-dark")
        zero.classList.add("btn-blur")
        zero.classList.remove("btn-dark")
      } else {
        container.classList.remove("light-bg")
        container.classList.add("dark-bg")
        calculatorContainer.classList.remove("light-secondary-bg")
        calculatorContainer.classList.add("dark-secondary-bg")
        result.classList.remove("text-black")
        result.classList.add("text-white")
        existingResultParagraf.classList.remove("text-black")
        existingResultParagraf.classList.add("text-white")
        aC.classList.remove("btn-blur")
        aC.classList.add("btn-dark")
        plus.classList.remove("btn-blur")
        plus.classList.add("btn-dark")
        minus.classList.remove("btn-blur")
        minus.classList.add("btn-dark")
        times.classList.remove("btn-blur")
        times.classList.add("btn-dark")
        division.classList.remove("btn-blur")
        division.classList.add("btn-dark")
        decimal.classList.remove("btn-blur")
        decimal.classList.add("btn-dark")
        one.classList.remove("btn-blur")
        one.classList.add("btn-dark")
        two.classList.remove("btn-blur")
        two.classList.add("btn-dark")
        three.classList.remove("btn-blur")
        three.classList.add("btn-dark")
        four.classList.remove("btn-blur")
        four.classList.add("btn-dark")
        five.classList.remove("btn-blur")
        five.classList.add("btn-dark")
        six.classList.remove("btn-blur")
        six.classList.add("btn-dark")
        seven.classList.remove("btn-blur")
        seven.classList.add("btn-dark")
        eight.classList.remove("btn-blur")
        eight.classList.add("btn-dark")
        nine.classList.remove("btn-blur")
        nine.classList.add("btn-dark")
        zero.classList.remove("btn-blur")
        zero.classList.add("btn-dark")
      }
})