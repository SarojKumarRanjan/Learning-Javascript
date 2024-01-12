/* let myName = "saroj  "

let myAnotherName = "golu"


console.log(myName.length); */


let myHero = ["thor","hulk"]

let heroPower = {
    thor:"hammer",
    hulk:"transform",

    getSpiderPower: function(){
        console.log(`thor power is ${this.thor}`);
    }
}

Object.prototype.saroj = function (){
   // console.log("i am present in all the objects");
}

Array.prototype.asaroj = function(){
    console.log(`hey saroj`);
}

myHero.asaroj()
// heroPower.asaroj()

// heroPower.saroj()
// myHero.saroj()

String.prototype.trueLength = function(){
   console.log(this);
   console.log(this.name);
   console.log(this.trim().length);
}

let name =  "saroj   "

name.trueLength()



// inheritance 

const teacher = {
    makevideo:true
}

const teachingSupport = {
    isAvailable:false
}

const TAsupport = {
    makeAssingment:"learning javascript",
    fulltime:true,
    __proto__:teachingSupport   // here this will inherit all the properties of the another object in this object 
}



// modern syntax to do the prototypical inheritance 
// the syntax follow the (from,to)
Object.setPrototypeOf(teacher,TAsupport)