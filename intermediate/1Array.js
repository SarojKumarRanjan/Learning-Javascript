

const arr = [0,1,2,3,4,5,6];

const myArr = ["abc", "def","ghi"];

const arr2 = new Array(1,2,3,4,5,6,7,8) // paste this in console of a chorme browser toknow all the methods and the operation which we can perform on the array. we can perform various methods on the array just like string. 

// console.log(arr2.reverse().sort());

// Array methods

arr2.push(9)

arr2.pop()

arr2.unshift(5) // this add the given input in the start of the array. This is not recomended but we can use it where it needs.

arr2.shift(); // This removes the first item of the array.
// console.log(arr2.includes(0));

// console.log(arr2.indexOf(5));


const arr3 = arr2.join() // This gives the result in string , After performing this operation on the aaray we get string the result.

/* console.log(arr2);
console.log(arr3);
console.log(typeof arr3);
 */

const arr4 = [1,2,3,4,5,6,7,8,9]

console.log(arr4);
const newarr4 = arr4.splice(2,4);// This method is used to manipulate the array by this method we can remove the data from the array by mentioning the index of it. it takes the end case of the index operation into considration.

console.log(newarr4);
console.log(arr4);



