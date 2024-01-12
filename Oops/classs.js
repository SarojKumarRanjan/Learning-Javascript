

class user{
    constructor(username,email,password){
        this.username=username;
        this.password=password
        this.email=email
    }

    capitalname(){
       return this.username.toUpperCase()
    }

    storepassword(){
        return `abc${this.password}cde`
    }
}


// Behind the scenes of the above code

function user(username,email,password){
    this.username=username;
    this.password=password
    this.email=email
}
user.prototype.capitalname = function(){
    return this.username.toUpperCase()
}
user.prototype.storepassword = function(){
    return `abc${this.password}cde`
}
const me = new user("saroj","3456@gmail.com","09876")

console.log(me);
console.log(me.capitalname());
console.log(me.storepassword());