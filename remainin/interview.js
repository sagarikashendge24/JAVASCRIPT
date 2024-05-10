// exose
// how many function in js


// function myDisplay() {
//        result=("welcome")
        
//         console.log(result)
//       }
      
// myDisplay()
// function se(){
//     setTimeout(function(){
//     console.log("welcome")
// },3000)
// }
// se()

// let arr=new Promise(function (res,rej){
//     var a=2
//     if (a==2){
//         res()
//     }
//     else{
//         rej()
//     }
// }).then(()=>{
//     console.log("resolved")
// }).catch(()=>{
//     console.log("rejected")
// })


// function sum(x, y, z) {
//         return x + y + z;
       
//       } 
// const numbers = [1, 2, 3];  
// console.log(sum(...numbers));



// function sum(args) {
//     return args;
   
//   } 
// s="sagarika"
// console.log(...s);


// var arr=[2,4,6,8,12,10,3,5,7,9,11]
// var i=0
// var even=0
// var odd=0
// while (i <arr.length){
//     if (arr[i]%2==0){
//         even=even+1
//     }
//     else{
//         odd=odd+1
//     }
//     i++
// }
// var d=even/arr.length*100
// var l=odd/arr.length*100
// console.log(d+"%","even")
// console.log(l+"%","odd")





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