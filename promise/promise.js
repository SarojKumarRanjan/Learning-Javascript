// Learne about the creation of new promise and how to use resolve and reject and how we do async tasks using promise 




const promise1 = new Promise(  (resolve,reject) => {
    setTimeout(()=> {
     console.log("task one completed");
     resolve();
    },1000)
    
 })
 
 
 promise1.then(()=>{
     console.log("promise one completed");
 })
 
 // Learned about how to fetch dta using promise through resolve and reject 
 
 const promise2 = new Promise((resolve,reject)=>{
 
     setTimeout(()=>{
         console.log("promise 2 completed ");
         resolve({username:"saroj",email:"abc@gmail.com"})
     },1000)
 })
 
 promise2.then((something)=>{
 
     console.log(something);
 
 })
 
 
 // In this promise learned about error handling using .catch 
 
 
 const promise3 = new Promise((resolve,reject)=>{
 
 setTimeout(()=>{
     let error = false;
     if(!error){
         resolve({username:"saroj",email:"abc@gmail.com"})
     }
     else{
     reject("not resolved error ")
     }
 },1000)
 
 
 })
 
 promise3.catch((err)=>{
     console.log(err);
 })
 
 // Chaining in promise allowed to extract data from objects 
 
 
 promise3.then((user)=>{
     console.log(user);
     return user.username
 }).then((username)=>{
     console.log(username);
 })
 .finally(()=>{
     console.log("the promise is either resolved or rejected");
 })
 
 
 
 // trying async and await in promise 
 
 
 const promise4 = new Promise((resolve,reject)=>{
 
     setTimeout(()=>{
         let error = true;
         if(!error){
             resolve({username:"sarojkumar",email:"abc123@gmail.com"})
         }
         else{
         reject("not resolved error ")
         }
     },1000)
     
     
     })
     
 
     async function consumepromise4(){
        try {
         const response =  await promise4
        console.log(response);
        } catch (error) {
         console.log(error);
        }
     }
 
     consumepromise4();
 
 