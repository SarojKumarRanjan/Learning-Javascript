// Objects singleton

const tinderuser = new Object(
   
);

tinderuser["name"] = "abcde";
tinderuser["age"] = 12;

const user2 = {
    email:"def@gmail.com",
    name2 :{
        username:"jklmno",
        lastname:"kumar"
    }
}

// console.log(user2["name2"]["username"]);


// Combining two objects

const obj2 = {tinderuser,user2}

console.log(obj2); // this does not merge two obj it just concat two obj as obj elements one under another


const obj = {...tinderuser,...user2} // this merge the objects.
console.log(obj);

const obj4 = Object.assign({},tinderuser,user2)

// console.log(obj4);

const user3 = [
    {
        name:"what",
        age:13
    },
    {

    },
    {

    },
    {

    }
]

user3[1].name;

console.log(tinderuser);

console.log(Object.keys(tinderuser));// this prints all the key name
console.log(Object.values(tinderuser));// this prints all the values name

console.log(tinderuser.hasOwnProperty("name"));

console.log(Object.entries(tinderuser));// this convert all key value pair in individual array.


// Destructring

const course = {
    courseName:"javascript",
    price:"2222",
    time:"3 months"
}

course.price // instead of this we will use destructuring

const {price: p,time:t, courseName:c} = course


console.log(p,t,c); // this will print all the corresponding values of the objects.