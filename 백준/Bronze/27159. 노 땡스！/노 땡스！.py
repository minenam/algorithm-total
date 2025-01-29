N = int(input())

cards = list(map(int, input().split()))

answer = cards[0]

for i in range(1, N):
    if cards[i] - cards[i-1] > 1:
        answer += cards[i]
print(answer)