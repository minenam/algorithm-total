T = int(input())

answers = []

for i in range(T):
    H, W, N = map(int, input().split())
    
    floor = N % H
    number = N // H + 1
    
    if floor == 0:
        floor = H
        number -= 1
    
    room = floor * 100 + number
    answers.append(room)
    
for answer in answers:
    print(answer)