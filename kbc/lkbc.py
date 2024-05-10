def question():
    quelist= ["🔹Q1.How many continents are there❓",
     "🔹Q2.What is the capital of India❓",
     "🔹Q3.NG mei kaun se course padhaya jaata hai❓"]
    return quelist 
que=question()    

def option():
    opplist=[["1.Four", "2.Nine", "3.Seven", "4.Eight"],
    ["1.Chandigarh", "2.Bhopal", "3.Chennai", "4.Delhi"],
    ["1.Software Engineering", "2.Counseling", "3.Tourism", "4.Agriculture"]]
    return opplist
opt = option()

def lifelinelst():
    hintlst=[["3.Seven","4.Eight"],["3.Chennai","4.Delhi"],["1.Software Engineer","2.Counseling"]]
    return (hintlst)
lifeline = lifelinelst()

def answer():
    anslist=[3, 4, 1]
    return (anslist)
ans=answer()

print("🙏🏻  WELCOME TO KBC🙏🏻 ")
print("🏆⚡KON BANEGA CODEPATI⚡🏆")
print()
i=0
count=1 
amount=1000
while i<len(que):
    print (que[i])
    j=0
    k=1
    while j<len(opt[i]):
        print(opt[i][j])
        j=j+1
      
    if count<=1:    
        life=input("DO YOU WANT LIFELINE❤ ")   
        if life=="YES" :
            print("5️⃣ 0️⃣ 5️⃣ 0️⃣")
            k=0
            while k<len(lifeline[i]):
                print("❤️",lifeline[i][k])
                k=k+1
            num=int(input("ENTER THE ANSWER"))
            if num ==ans[i]:
                print("YOUR ANSWER IS RIGHT✔️")
                print("YOU WON",amount,"$")
            else:
                print("YOUR ANSWER IS WRONG❌")  
                print("YOU LOOSE THE GAME😕😔")
                break  
            print()
            count=count+1                
            
        else :
            e=int(input("ENTER THE ANSWER"))
            if e==ans[i]:
                amount=amount+20000
                print("YOUR ANSWER IS RIGHT✔️")
                print("YOU WON",amount,"$")
            else:
                print("YOUR ANSWER IS WRONG❌")
                print("YOU LOOSE THE GAME😕😔")
                break

                print()
    else :
        f=int(input("ENTER THE ANSWER"))
        if f == ans[i]:
            amount=amount+20000
            print("YOUR ANSWER IS RIGHT✔️")
            print("YOU WON",amount,"$")
        else:
            print("YOUR ANSWER IS WRONG❌ ")
            print("YOU LOOSE THE GAME😕😔")
            break
        print()    
                   
    i=i+1
                 