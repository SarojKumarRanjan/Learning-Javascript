class user{
    constructor(username){
       this.username=username
    }

    logMe(){
        console.log(`username is ${this.username}`);
    }
}


class Teacher extends user{
    constructor(username,email,password){
        super(username)
       this.password=password
       this.email=email
    }

    courseadd(){
        console.log(`a new course was added by 
        ${this.username}`);
    }
}

const user1 = new user("saroj")
user1.logMe()
const teacher1= new Teacher("golu","abc@gmail.com","2345")
teacher1.courseadd()

// Here it is checked that the properties is inherited from one to another 
teacher1.logMe()
// to check the instance from which the properties is passed 
console.log(teacher1 instanceof user);
