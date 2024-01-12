const newobj = {
    username:"saroj",
    password:"abc123",
    myfun: function(){
       // console.log("function inside object");
       // console.log(`name:${this.username}`);
       // console.log(this);
    }
}

// console.log(this);
newobj.myfun();

// constructer functions 


function user(name,password){
    this.name = name,
    this.password = password


    return this
}
const user1 = new user("saroj","123")
const user2 = new user("golu","456")
// here user2 will overwrite the value of the user one while we call function two with differet values hence we add new keyword before calling new function so that everytime we call the function a new instance will be created and we will get the values accordingly.
// After adding new keyword a new object is created and the values is injected in the constructer function.  
console.log(user1.name,user1.password); 


