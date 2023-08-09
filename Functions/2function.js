function calculatecartprice(val1, val2, ...num1) // ... is a rest opertor which convert all the input passed from the argument and put it in a array.
{
return num1;
}

// console.log(calculatecartprice(100,200,78,56,98,56));


// How to pass object as argument in function 

const user = {
    username:"saroj",
    age:12
}

function user1(user){

    console.log(`Name of the user is ${user.username} and the age is ${user.age}`);

}

//  user1(user);



function user2(anyObject){

    console.log(`Name of the user is ${anyObject.username} and the age is ${anyObject.age}`);

}

/* user2({
    username:"golu",
    age:20
}) */

// Passing array as an argument in a function


const newarray = [200,500,900]

function arr(num3){
    console.log(num3[2]);
}

arr(newarray);