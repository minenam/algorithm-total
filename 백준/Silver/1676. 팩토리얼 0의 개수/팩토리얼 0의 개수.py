N = int(input())

answer = 0
factorial = set()
ten = 1

for i in range(N, 0, -1):
    if i % 10 == 0 or i % 5 == 0 or i % 2 == 0:
        ten *= i
        if ten % 10 == 0:
            answer += 1
            ten //= 10 
    
print(answer)