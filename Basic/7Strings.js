const name = "abc"
const count = 34;
console.log(name+count+"cde");


let a = 3;
let b = 4;

 let c = String(b);
//console.log(a+String(b));

console.log(`hello lets print the number a here ${a} and String b here ${c}`);


// declaring a string

const name3 = new String('something  ');

console.log(name3[0]);
console.log(name3.__proto__);

console.log(name3.length);

console.log(name3.toUpperCase());

console.log(name3);

console.log(name3.indexOf('n'));

console.log(name3.substring(0,5));

console.log(name3.slice(-7,5));

console.log(name3.trim());

console.log(name3.replace('thing','-where').split('-'));

console.log(name3.includes('etr'));