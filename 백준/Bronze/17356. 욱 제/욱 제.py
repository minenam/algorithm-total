A, B = map(int, input().split())

M = (B - A) / 400
answer = 1 / (1 + 10**M)

print(answer)
