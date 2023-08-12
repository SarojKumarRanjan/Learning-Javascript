const numbers = [1,2,3,4,5,6,7,8,9]

 /* const newNum = numbers.map( (num) => {
    return num+10;

}) */

// console.log(numbers);

const newNumbers = numbers
.map( (nums) => {
  return nums+10
})
.map( (nums) => {
    return nums-5;
})
.filter( (nums) => {
    return nums>11
})
console.log(newNumbers);