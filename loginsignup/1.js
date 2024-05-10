
var a=[1,2,3,4,5,6,7,8]
// var a=[2,6,4,8]
var i=0
var l=a.length-1
var c=[]
var k=0
while (i<l){
    k=a[i+1]-a[i]
    if (k<0){
        p=k*-1
        c.push(p)
    }
    else{
       c.push(k)
    }
    i++
}
console.log(c)
