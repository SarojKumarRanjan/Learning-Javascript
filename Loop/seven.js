const newNum = [1,2,3,4,5,6]

const total = newNum.reduce( (acc,curval ) => {
    console.log(acc);
  return acc+curval
},0 /* value of acc */)

console.log(total);