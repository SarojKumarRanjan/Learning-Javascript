

function name (){

    console.log("something");
}

/* name();
name(); */


function add (a,b){

    let c = a+b;
    // console.log(c);

    return c;
}

let result = add(12, 5)

// console.log("result: ",result);


function userlogin(username = "guest"){
    if(!username){
        console.log("enter username");
        return;
    }
    else{
        return `${username} just logged in `
    }

}

console.log(userlogin());