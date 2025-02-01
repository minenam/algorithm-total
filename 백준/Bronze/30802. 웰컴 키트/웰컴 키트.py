
N = int(input())
shirts = map(int, input().split())
T, P = map(int, input().split())

t_answer = 0

for shirt in shirts:
    if shirt % T == 0:
        t_answer += shirt // T
    else:
        t_answer += (shirt // T) + 1

print(t_answer)
print(N // P, N % P)
