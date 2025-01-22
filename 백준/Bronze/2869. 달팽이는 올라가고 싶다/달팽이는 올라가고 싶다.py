A, B, V = map(int, input().split())

answer = (V - B - 1) // (A - B) + 1

print(answer)
