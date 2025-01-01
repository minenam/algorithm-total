N, M = map(int, input().split())

matrix_A = [list(map(int, input().split())) for _ in range(N)]
matrix_B = [list(map(int, input().split())) for _ in range(N)]

for i in range(N):
    for j in range(M):
        print(matrix_A[i][j] + matrix_B[i][j], end=' ')
    print()