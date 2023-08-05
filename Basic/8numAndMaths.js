const score = 400;

const balance = new Number(100.48);
console.log(balance);
console.log(balance.toString().length);
console.log(balance.toFixed(2));

console.log(balance.toPrecision(4));

const balance2 = 600000;
console.log(balance2.toLocaleString('en-IN'));


//****************Maths************************



console.log(Math);
console.log(Math.abs(-4));//output 4
console.log(Math.round(4.8)); //output 5
console.log(Math.floor(7.8)); //output 7
console.log(Math.ceil(5.6)); //output 6
console.log(Math.sqrt(25)); // output 5
console.log(Math.min(5,8,6,78,3)); //output 3
console.log(Math.max(78,96,32,5,2,87)); // output 96


 console.log(Math.floor((Math.random()*10)+1)); //math.random returns a random number between 0 and 1. so to the number between the desired number we have to add 1 to to it and then multiply it with the desired number.

const min = 10;
const max = 20;

console.log(Math.floor(Math.random()*(max - min +1))+ min);