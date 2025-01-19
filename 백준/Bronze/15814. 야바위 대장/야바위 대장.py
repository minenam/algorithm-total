
S = input()
T = int(input())

strings = list(S)

for _ in range(T):
    A, B = map(int, input().split())
    strings[A], strings[B] = strings[B], strings[A]

print(''.join(strings))