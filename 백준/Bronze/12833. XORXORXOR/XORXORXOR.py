A, B, C = map(int, input().split())

if C % 2 == 0:
    print(A)
else:
    print(A ^ B)
