// program to find the LCM of two integers

// take input
const num1 = prompt('Enter a first positive integer: ');
const num2 = prompt('Enter a second positive integer: ');
console.log("Received inputs : " + num1 + "," + num2);

// higher number among number1 and number2 is stored in high
let high = (+num1 > +num2) ? +num1 : +num2;
console.log("High value: " + high);

// while loop
while (true) {
    if (high % num1 == 0 && high % num2 == 0) {
        console.log(`The LCM of ${num1} and ${num2} is ${high}`);
        break;
    }
    high++;
}
