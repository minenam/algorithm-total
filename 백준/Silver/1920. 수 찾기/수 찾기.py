N = int(input())
A_set = set(map(int, input().split()))
M = int(input())
M_list = list(map(int, input().split()))

answer = []
length = len(A_set)

for m in M_list:
    A_set.add(m)
    if len(A_set) > length:
        answer.append('0')
        A_set.remove(m)
    else:
        answer.append('1')

print('\n'.join(answer))