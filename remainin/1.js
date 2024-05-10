// 55// var x=10;
// // let x;
// let x=null;
// console.log(x)


// single threat,switchcase
// npm
// switch case
// diffrence between api and rest api
// callback ,callback hell
// promises
// async await

// var a=[34,45,5678,678,67]
// console.log(instanceof(a))

// const person = {
//     firstName: "John",
//     lastName : "Doe",
//     id       : 5566,
//     fullName : function() {
//       return this.firstName + " " + this.lastName;
//     }
//   };
// console.log(person.fullName())

// let a="qwertyuio"
// var e=a.split("")
// console.log(e)




// let text = "Hello world, welcome to the universe.";
// text.includes("world") 
// console.log(text)

// const numbers1 = [45, 4, 9, 16, 25];
// const numbers2 = numbers1.map(myFunction);

// function myFunction(value, index, array) {
//   return value * 2;
// }
// console.log(numbers2)




//*************call backs**************
// function enroll(name,call){
//   console.log("Your name is",name)
//   call()
// }
// function  roll(){
//   setTimeout(function(){
//     console.log("welcome to navgurukul")

//   },3000)

// }
// enroll("sagarika",roll)

// ****************promise************
// let arrrr = new Promise(function (resolve, reject) {
//   let am = 2;

//   if (am == 52) {
//     // console.log("your promise has been resolved")
//     resolve()
//   }
//   else {
//     // console.log(" your promise has been rejected")
//     reject()
//   }

// }
// )
//   .then(() => {
//     console.log("thanks")
//   }

//   ).catch((err) => {
//     console.log(" try again")
//   });


// **********async await*********
// async function namess(){
//   return("sagarika")
//   const response=await fetch('')

// }
// let a=namess()
// console.log(a)


// const person = {
//   fullName: function() {
//     console.log(this.firstName + " " + this.lastName);
//   }
// }

// const person1 = {
//   firstName: "Mary",
//   lastName: "Doe"
// }

// // This will return "Mary Doe":
// person.fullName.call(person1);

// it is collection of all the remainig elements in to an array 


// function reeest(...args){
//   console.log(args)

// }
// reeest("sagg","sdfhj","sdfgh")

// it is opposite to rest parameter  ,where rest parameter collect items into an array,it unpacks the operator 

// var nnn=("sagariks","prity","kirti")
// var stt=[...nnn,"kiyo","mona"]
// console.log(stt)



// let a
// a=8
// console.log(a








// const s = require("readline-sync")


// var day=s.question("enter the day")
// var meal=s.question("enter the meal")
// switch(day){
//     case "monday":
//         switch(meal){
//             case "breakfast":
//                 console.log("poha")
//                 break
//             case "lunch":
//                 console.log("dal rice")
//                 break
//             case "dinner":
//                 console.log("methi roti")
//                 break        
//         }
//         break
//     case "tuesday":
//         switch(meal){
//             case "breakfast":
//                 console.log("chilla")
//                 break
//             case "lunch":
//                 console.log("dal rice acchar")
//                 break
//             case "dinner":
//                 console.log("rajma roti")
//                 break        
//         }
//         break        
//     case "wednesday":
//         switch(meal){
//             case "breakfast":
//                 console.log("idli")
//                 break
//             case "lunch":
//                 console.log("chole chawal")
//                 break
//             case "dinner":
//                 console.log("allu roti")
//                 break        
//         }
//         break    

// }

const s = require("readline-sync")
var f=s.question('times:-')
i=0
d={}
while (i<f){
    var h=s.question('name:-')
    var k=s.question('age:-')
    d[h]=k
    // d.concat(c) 
    i++
}
console.log(d)