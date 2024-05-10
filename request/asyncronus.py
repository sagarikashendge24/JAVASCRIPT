list1 =[9,8,5,7,3,1,2,4]
# # o/p=[1,8,3,5,7,9,2,4,]
# # list =[9,8,5,7,3,1,2,4]
i=0
b=[]
while i <(len(list1)):
    if list1[i]%2!=0:
        b.append(list1[i])
    i=i+1
b.sort()  
# print(b)
i=0
c=[]
while i <len(list1):
    if list1[i]%2==0:
        c.append(list1[i])
    else:
        c.append(b[i])
    i=i+1        
print(c)


