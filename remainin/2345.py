# a=[[1,2,3,4],[88,99,77],[12,45,67,78,98]]
# i=0
# n=len(a)
# while i <n:
#     j=0 
#     while j<len(a[i]):
#         print(a[i][j])
#         j=j+1
#     i=i+1    



# i=0
# c=[]
# while i<len(n):
#     j=i
#     while j<len(n):
#         c.append(j)
#         # print(n[j])
#         j=j+1
#     i=i+1
# print(c)        


# user=int(input("enter the number"))
# i=1
# z=0
# while i <=user:
#     z=i+z
#     print(z)
#     i=i+1




# nterms = int(input("How many terms? "))

# # first two terms
# n1, n2 = 0, 1
# count = 0

# # check if the number of terms is valid
# if nterms <= 0:
#    print("Please enter a positive integer")
# # if there is only one term, return n1
# elif nterms == 1:
#    print("Fibonacci sequence upto",nterms,":")
#    print(n1)
# # generate fibonacci sequence
# else:
#    print("Fibonacci sequence:")
#    while count < nterms:
#        print(n1)
#        nth = n1 + n2
#        # update values
#        n1 = n2
#        n2 = nth
#        count += 1


# a=[1,2,3,4,5,1,2,3,4,5,1,2,2,3,4,3,4,5,5,1,1,2]
# i=0 
# d=[]
# s=[]
# # y=[]
# while i<len(a):
#     j=0
#     c=0
#     while j<len(a):
#         if a[i]==a[j]:
#             s.append(a[i])
#             c+=1
#         j+=1
#     k=0
#     while k<1:
#         if a[i] not in d:
#             d.append(a[i])
#             print(a[i],"times",c)
#             # y.append([a[i],"=",c])
#         k+=1
#     i+=1
# print(y)



# u=int(input("how many times"))
# i=0
# l=[]
# s=[]
# while i<u:
#     name=input("enter the name")
#     age=int(input("enter the age"))
#     s.append([name,age])
#     i=i+1
# print(s)    



# a=[1,2,3,4,5,1,2,3,4,5,1,2,2,3,4,3,4,5,5,1,1,2]
# i=0 
# d=[]
# s=[]
# while i<len(a):
#     j=0
#     c=0
#     t=[]
#     while j<len(a):
#         if a[i]==a[j]:
#             s.append(a[i])          
#             c+=1
#         j+=1          
#     k=0
#     while k<1:
#         if a[i] not in d:
#             d.append(a[i])
#             print(a[i],"times",c)
#             z=a[i]**c
#             print(z)
#         k+=1
#     i+=1
    

# user=input("enter the number : ")
# j=len(user)-1
# for i in range (0,len(user)):
#     a=(int(user[i]))*10**j
#     print(str(a),end=" ")
#     if i<len(user)-1:
#         print(" + ",end ="")
#     j=j-1
# print("\n")




    
# user=input("enter the number : ")
# j=len(user)-1
# i=0
# while i<len(user):
#     a=(int(user[i]))*10**j
#     print(str(a),end=" ")
#     if i<len(user)-1:
#         print(" + ",end ="")
#     j=j-1
#     i=i+1
# print("\n")




# for i in range (0,len(user)):
#     a=(int(user[i]))*10**j
#     print(str(a),end=" ")
#     if i<len(user)-1:
#         print(" + ",end ="")
#     j=j-1
# print("\n")


# a = [1,1,2,3,4,4,5,6]
# i = 0
# n = []
# while i<len(a):
#     if a[i] == a[i+1]:
#         n.append([2,a[i]])
#     else:
#         n.append(a[i])
#         n.append(a[i+1])
#     i+=2
# print(n)

