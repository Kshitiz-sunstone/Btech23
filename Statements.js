var x = "india"
if (x > 10)
    console.log("X is greater than 10");
else
    console.log("X is not greater than 10");
// Types of if statements
// 1. single if
var x = 100;
if (x > 10) {
    console.log("Do something");
}
if (x != 10) {
    console.log("Again do some thing");
}
if (x < 10) {
    console.log("Again do some thing");
}


// 2. else if statements
if (x > 10) {
    console.log("Do something");
}
else if (x != 10) {
    console.log("Again do some thing");
}
else if (x < 10) {
    console.log("Again do some thing");
}
else {
    console.log("Default some thing");
}


// Check for even and Odd
let y = 45
if (y % 2 == 0) {
    console.log("Even");
}
else {
    console.log("Odd");
}


// if(condition){
//     // body of if
// }
// else{
//     // body of else
// }

// Switch case
// Fall through
let ch = 'a';
switch (ch) {
    case 'a':
    case 'e':
    case 'i':
    case 'o':
    case 'u':
        {
            console.log("Vowel");
            break;
        }
    default: {
        console.log("Not a vowel");
    }
}