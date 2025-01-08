N = int(input())
answer = 0

for i in range(1, N + 1):
    sums = sum(map(int, str(i)))
    if i + sums == N:
        answer = i
        break
    if i == N:
        answer = 0

print(answer)