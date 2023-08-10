// loop for objects

const obj = {
  1: "one",
  2: "two",
  3: "three",
};

for (const key in obj) {
  // console.log(key, obj[key]); // this for in loop for objects
}

const a = [1, 2, 3, 4];

for (const key in a) {
  // console.log(key, a[key]); // this is for in loop for array
}

// ************ FOREACH LOOP ***********

const d = [1, 20, 7, 8, 9, 54, 5, 7, 5];

d.forEach((number) => {
  // console.log(number);
});

d.forEach(function (num) {
  // console.log(num);
});

function one(var1) {
  // console.log(var1);
}

d.forEach(one);

a.forEach((item, index, arr) => {
  //  console.log(item,index,arr);
});

const objc = [
  {
    name: "saroj",
    age: 12,
  },
  {
    location: "delhi",
    city: "noida",
  },
  {
    location: "up",
    city: "greater-noida",
  },
];

objc.forEach( (item) => {
   // console.log(item.location);
})