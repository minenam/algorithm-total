T = int(input())
answer = []

def apartment_count(k: int, n: int):
    dp = [[0] * (n + 1) for _ in range(k + 1)]
    
    for j in range(1, n + 1):
        dp[0][j] = j
    
    for i in range(1, k + 1):
        for j in range(1, n + 1):
            dp[i][j] = dp[i][j - 1] + dp[i - 1][j]
    
    return dp[k][n]

for _ in range(T):
    k = int(input())
    n = int(input())
    answer.append(apartment_count(k,n))

print(*answer, sep='\n')