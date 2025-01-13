import sys

input = sys.stdin.read
data = input().split()

k = int(data[0])
stack = []

for i in range(1, k + 1):
    num = int(data[i])
    if num == 0:
        stack.pop() 
    else:
        stack.append(num) 

print(sum(stack))  