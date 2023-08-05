"use strict" //treat all js code as newer version 


// alert("hello") we are using node js, not browser

// different types of data types 

// 1.number => 2 to power 53
// 2.string => ""
// 3.bigint
// 4.boolean
// 5.null
// 6.undefined
// 7.symbol



// Object

console.log(typeof null);


// primitive data types
// #7 types

/* 1=> String
2=> Number
3=> Boolean
4=> null
5=> undefined
6=> Symbol : const id = Symbol("123")

7=> BigInt */

// non-primitive or reference data types

/* 1=>Arrays
2=>Objects
3=>Functions */

// javascript is a dynamic type language in which we do not need to specifiy the data types it automatically detects the type from the value assigned to it.



//***************************************************************

// ++++++++++++++++Memeory+++++++++++++++++

//Stack and Heap

// Stack => Primitive
// Heap  => Non primitive 

let myName = "saroj"
 let AnotherName = myName;

 AnotherName = "golu"

console.log(myName);
console.log(AnotherName);

let user = {
    Name:"saroj",
    email:"abc@gmail.com"
}
let user2 = user

user2.email = "def@gmail.com"

console.log(user.email);
console.log(user2.email);