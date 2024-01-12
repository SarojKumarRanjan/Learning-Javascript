class user{
    constructer(username){
       this.username=username
    }

    logMe(){
        console.log(`username:${this.username}`);
    }
// static keyword restricts its instances to access these properties 
    static createId(){
        return `123`
    }
}

const saroj = new user("golu")

const me = new user("you")


console.log(saroj.createId());