asc = [1,2,3,4,5,6,7,8]
desc = [8,7,6,5,4,3,2,1]

inputs = list(map(int,input().split()))

if inputs == asc:
    print("ascending")
elif inputs == desc:
    print("descending")
else: 
    print("mixed")