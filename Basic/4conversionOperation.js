let score = "33abc"


console.log(score);
console.log(typeof score);

let valueInNumber = Number(score);

console.log(valueInNumber);
console.log( typeof valueInNumber);


//"33" => 33

//"33abc" => NaN

//true => 1

//false => 0 

let one=1

let booleanOne= Boolean(one)

console.log(booleanOne);


/* 1 => true
0 => false
"" => false
"saroj" => true */

/* ******** Opration ******** */

let a1 = 3;
let b1 = 4;

console.log(String(a1),String(b1));
let a2= String(a1);
let b2= String(b1);


console.log(a2+b2);


/* another example */ 

let value = 3

let negativeValue = -value;

// console.log(negativeValue);

console.log(2**6);// ** indicates as power means 2**6 : 2 raise to power 6 which is 64.

console.log("2"+ 2)

console.log("2"+ 2 + 2);//output is 222 which probably should be 24.
console.log(2+2+ "2"); // Here output is 42 which should be 222 according to the above but its not.

// So the conclusion is that whenever there is string in first place javascript treats all the afterwards number as string but when there is any number opertion in first place then it perform those operation and then log the string numbers after the result of those opeation.


console.log(+true); // but true+ in a error.

console.log(+"")// output is 0.



// ******** preincrement and post increment ******
let x = 3;
const y = x++;

console.log(`x:${x}, y:${y}`);
// Expected output: "x:4, y:3"

let a = 3;
const b = a++;

console.log(`a:${a}, b:${b}`);
// Expected output: "a:4, b:4"




