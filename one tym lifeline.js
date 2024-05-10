const s = require("readline-sync")
function question(){
    quelist= ["🔹Q1.How many continents are there❓",
     "🔹Q2.What is the capital of India❓",
     "🔹Q3.NG mei kaun se course padhaya jaata hai❓"]
    return quelist;
};
que=question();    

function option(){
    opplist=[["1.Four", "2.Nine", "3.Seven", "4.Eight"],
    ["1.Chandigarh", "2.Bhopal", "3.Chennai", "4.Delhi"],
    ["1.Software Engineering", "2.Counseling", "3.Tourism", "4.Agriculture"]]
    return opplist
};
opt = option();

function lifelinelst(){
    hintlst=[["3.Seven","4.Eight"],["3.Chennai","4.Delhi"],["1.Software Engineer","2.Counseling"]]
    return (hintlst);
};
lifeline = lifelinelst();

function answer(){
    anslist=[3, 4, 1]
    return (anslist);
};
ans=answer();

console.log("🙏🏻  WELCOME TO KBC🙏🏻 ")
console.log("🏆⚡KON BANEGA CODEPATI⚡🏆")
var i=0;
var count=1; 
var amount=1000;
while (i<que.length){
    console.log (que[i])
    var j=0;
    var k=1;
    while (j<opt[i].length){
        console.log(opt[i][j])
        j++}
    
    if (count<=1){
        var life=s.question("DO YOU WANT LIFELINE❤\n") ; 
        if (life=="yes"){
            console.log("5️⃣ 0️⃣ 5️⃣ 0️⃣")
            var k=0;
            while (k<lifeline[i].length){
                console.log("❤️",lifeline[i][k])
                k++}
            var num=s.questionInt("ENTER THE ANSWER\n");
            if (num ==ans[i]) {
                console.log("YOUR ANSWER IS RIGHT✔️    ")
                console.log("YOU WON",amount,"$")}   
            else{
                console.log("YOUR ANSWER IS WRONG❌    ")  
                console.log("YOU LOOSE THE GAME😕😔    ")
                break}   
                count++ 
            }         
        
        else{
            // console.log("YOU HAD ALREADY USED LIFELINE")
            var e=s.questionInt("ENTER THE ANSWER\n");
            if (e==ans[i]){
                amount=amount+20000
                console.log("YOUR ANSWER IS RIGHT✔️")
                console.log("YOU WON",amount,"$")}
            else{
                console.log("YOUR ANSWER IS WRONG❌    ")
                console.log("YOU LOOSE THE GAME😕😔    ")
                break} 
            }
        i++
                }    
    else{
        var f=s.questionInt("ENTER THE ANSWER\n");
        if (f == ans[i]){
            amount=amount+20000
            console.log("YOUR ANSWER IS RIGHT✔️    ")
            console.log("YOU WON",amount,"$")}
        else{
            console.log("YOUR ANSWER IS WRONG❌     ")
            console.log("YOU LOOSE THE GAME😕😔    ")
            break  
        }                  

                    
    i++
    }
    }
        