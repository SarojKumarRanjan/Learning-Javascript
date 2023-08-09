const user = {
    name:"saroj",
    age:23,
    message:function(){
        console.log(`${this.name},Welcome to the website `);
        console.log(this);
    }
}

//  user.message(); // here this refer to the name of the persion in the above context which in that variable.

user.name="golu";

// user.message(); // here the name is changed in this context.

// console.log(this); // this print empty because in node environment global context is a empty object.

/* function two(){
    username:"saroj"

    console.log(this.username); // this gives undefined as result.
}

two(); */

