// Immediately Invoked Function Expression (IIFE)


(function chai (){
    console.log("hello");
})(); /// this is done to immediately invoke the function and excute the code.

( () => {
    console.log("hello");
})()  // this also works with arrow function