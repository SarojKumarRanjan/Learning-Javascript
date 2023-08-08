
const hero = ["Thor","Spiderman","Ironman"]


const hero2 = ["Batman","Flash","Superman"]

  //   hero.push(hero2);

//  console.log(hero);

// It takes the whole element as a single element and we can access it by a single index

//   console.log(hero[3][1]); 

//to get the value of a element in the second array we have to give the path of the in the 2d form.


/* const hero3 = hero.concat(hero2);

console.log(hero3); // This method add two array and gives the third array which is the combination of the third array.It solves the problem of the push of an array in another array where we were getting the another result. */


// ******** Spread operator ********


/* 
const hero4 = [...hero, ...hero2];

console.log(hero4); // This is used to add two array or more than two array this is handy than concat to add add more than two array.
 */


/* const arr5 = [1,2,3,[7,5,9,6,[7,5,6,9,4,1,[8,2,2,1,3,4,[7,9,3,1,4,6]]]]]; // It is a combinaton of the many sdub arrays in a single array to convert all the subarray in a single array we can use flat method.

console.log(arr5.flat(Infinity).sort()); 

// we have to the input in flat as till how many depth we want to resolve the subarrays.
 */

/* const str = "javascript";

console.log(Array.isArray(str)); // to cheak weather the recieved data is array or not.

console.log(Array.from(str)); // to convert any data into array  */


console.log(Array.from({name:"saroj"}.name)); // intresting case.


