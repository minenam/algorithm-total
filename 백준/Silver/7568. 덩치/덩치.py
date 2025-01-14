import sys

N = int(input())

weights = []
heights = []

answers = []

for _ in range(N):
    x, y = map(int, sys.stdin.readline().split())
    weights.append(x)
    heights.append(y)

for i in range(N):
    count = 0
    for j in range(N):
        if heights[i] < heights[j] and weights[i] < weights[j]:
            count += 1
    answers.append(count + 1)

print(' '.join(map(str, answers)))