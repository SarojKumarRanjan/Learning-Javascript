 

 let myDate = new Date();
 console.log(myDate.toDateString());
 console.log(myDate.toJSON());
 console.log(myDate.toLocaleString());
 console.log(myDate.toLocaleDateString());


 let myNewDate = new Date("05-08-2023")

 console.log(myNewDate.toLocaleDateString());

 let timeStamp = Date.now();
 console.log(Math.floor(timeStamp/1000));


 let olddate = new Date()

 console.log(olddate.getMonth());