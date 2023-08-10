

// for of 

const arr = [{}, {}, {}]

const a=[1,2,3,4,5,6,7,8,9]

for(const num of a){
  // console.log(num);
}

const b = "saroj"

for(const name of b){
   // console.log(name);

}


//  ***********  MAPS ************

// Maps holds only unique values and in the order in which they are put.

 const map = new Map();

 map.set('1',"One")
 map.set('2',"two")
 map.set('3',"three")

 // console.log(map);
 
for (const [ key , value] of map) {
    // console.log(key , value); // This prints a key value pair in array from.
}

