// user =input("enter")
// j=user
// d=dict()
// for c in j:
//     if c not in d:
//         d[c]=1
//     else:
//         d[c]=d[c]+1
// print(d)      
const s = require("readline-sync")

var user =s.question("enter")
var j=user
var d = dict()
for (c in j){
    if (~(c in d)){
        d[c]=1}
    else{
        d[c]=d[c]+1}
}    
console.log(d)      