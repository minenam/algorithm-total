N = int(input())
answer = 0

for i in range(1, N + 1):
    sum_num = sum(map(int, str(i)))
    if sum_num + i == N:
        answer = i
        break
    else:
        answer = 0

print(answer)

