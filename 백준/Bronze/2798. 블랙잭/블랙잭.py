from itertools import combinations

N, M = map(int, input().split())
cards = list(map(int, input().split()))

cases = list(combinations(cards, 3))
answer = 0

for case in cases:
    if sum(case) > M:
        continue
    else:
        answer = max(answer, sum(case))

print(answer)