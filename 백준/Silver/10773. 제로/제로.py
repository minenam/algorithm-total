import sys

input = sys.stdin.read
data = input().split()

N = int(data[0])
answers = []

for i in range(1, N+1):
    input_num = int(data[i])
    if input_num == 0:
        if answers:
            answers.pop()
    else:
        answers.append(input_num)
        
print(sum(answers))