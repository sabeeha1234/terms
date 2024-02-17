let date1=new Date()
console.log(date1.toString());
console.log(date1.toDateString());
 console.log(date1.toLocaleString());
 console.log(typeof myDate);

//  let myCreatedDate = new Date(2023, 0, 23)
//  let myCreatedDate = new Date(2023, 0, 23, 5, 3) 
  let myCreatedDate = new Date("2023-01-14") 
//  let myCreatedDate = new Date("01-14-2023")

 console.log(myCreatedDate.toLocaleString());



 let myTimeStamp = Date.now()
//  console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
 console.log(Math.floor(Date.now()/1000));
