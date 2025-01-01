import sys
input = sys.stdin.readline

n = int(input().strip())
numbers = [int(input().strip()) for _ in range(n)]

count = [0] * 2000001  
offset = 1000000       

for num in numbers:
    count[num + offset] += 1

for i in range(len(count)):
    while count[i] > 0:
        print(i - offset)
        count[i] -= 1