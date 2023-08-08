// Singleton


// Object.create


// object literals


let mysym = Symbol("key1")
const user = {

    name:"user1",
    [mysym]:"key2",
    age:12,
    location:"jaipur",
    email:"abc@gmail.com",
    login:false,
    "last Login":["monday","wednesday"]
}

// console.log(user.login);


// Another way to access

/* console.log(user["login"]);

console.log(user["last Login"]);

console.log(user[mysym]); */

user.location = "delhi"; // to change the value it the object.

console.log(user.location);


// to Ovoid the changes to be done in the object we can freeze it.

/* Object.freeze(user); */

// user.name = "def"; // now this is not valid as the object is in the freeze conditions.

console.log(user["name"]);


user.greeting = function(){
    console.log(`hello world , ${this.email}`);
}


console.log(user.greeting());
