function printArrayElement(){
    const fruits = ['Apple', 'Banana', 'Orange', 'Mango']; 
    for (let i = 0; i < fruits.length; i++) { 
        console.log(fruits[3]); 
    } 
}

//26 - 30
function FormatTwoDecimalPlaces() {
    let num = parseFloat(prompt("Enter a number with more than 2 decimal places: "));
    let result = num.toFixed(2);
    //or
    console.log("Formatted Number: " + result);
    //console.log("Formatted Number:" + num);
    //console.log(`Formatted Numbers: ${result}`);
    
}

//31 - 35
function checkIfNumberIsEvenOrOdd() {
    let num = parseInt(prompt("Enter a number: "));
    if (num % 2 === 0) {
        //or 
        console.log(num + " is an even number");
        console.log(`${num} is an even number`);
    } else {
        //or
        console.log(num + " is an odd number");
        console.log(`${num} is an odd number`);
    }
}



// function HandlingCharacters() {
//     let character = prompt("Enter a character: ");
//     if (character === "a" || character === "e" || character === "i" || character === "o" || character === "u") {
//         console.log(character + " is a vowel");
//     } else {
//         console.log(character + " is a consonant");
//     }
// }
//36-40
function AccessingCharacters() {
    let str = "Bs Information Systems";
    for (let i = 0; i < str.length; i++) {
        console.log(str[i]);
    }
}

41 - 50
function ArrayManipulation2D() {
    let arr = [
        [1 , 2, 3],
        [4, 5, 6],
        [7, 8, 9]
    ];
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            console.log(arr[i][j]);
        }
    }
}



function multiplicationTable() {
    let tableSize = parseInt(prompt("Enter the size of the multiplication table: "));
    for (let i = 1; i <= tableSize; i++) {
        let row = '';
        for (let j = 1; j <= tableSize; j++) {
            row += (i * j).toString().padStart(4, ' ');
        }
        console.log(row);
    }
}
