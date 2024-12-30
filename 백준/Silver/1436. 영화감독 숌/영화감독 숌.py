N = int(input())

answer = 1
num = 666
count = 0

while True:
    if '666' in str(num):
        count += 1
    if count == N:
        answer = num
        break
    num += 1
    
print(answer)