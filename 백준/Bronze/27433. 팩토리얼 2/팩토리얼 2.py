N = int(input())

answer = 1

if N == 0:
    print(1)
else:
    for i in range(N, 0, -1):
        answer *= i
    print(answer)