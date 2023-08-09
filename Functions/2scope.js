function one(){

    const username = "saroj"

    function two(){

        const website = "youtube"

        console.log(username);

    }

    
    two();
    // console.log(website);
}

//   one ();


// *************** HOISTING ***************

console.log(addone(5));
function addone(num1){
    return num1+1;
}

console.log(addtwo(5));
const addtwo = function(num2){
    return num2+2;
}

// console.log(addtwo(5));