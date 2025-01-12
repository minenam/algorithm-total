import sys

K, N = map(int, sys.stdin.readline().rstrip().split())
lines = [int(sys.stdin.readline().rstrip()) for _ in range(K)]

high = max(lines)
low = 1

answer = 0

while low <= high:
    mid = (low + high) // 2
    total = 0  
    for line in lines:
        total += line // mid
    
    if total >= N:
        answer = mid
        low = mid + 1
    else:
        high = mid - 1

print(answer)