class user{
    constructor(username,email,password){
       this.email = email
       this.password=password
       this.username=username

    }
    get password(){
        return this._password.toUpperCase()
    }

    set password(value){

        this._password = value

    }


}

const me = new user("golu","12@gmail.com","abc123")
console.log(me.password);