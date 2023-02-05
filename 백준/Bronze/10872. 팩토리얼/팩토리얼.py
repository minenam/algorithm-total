N = int(input())

def solution(self):
    answer = 1
    if N == 0:
        return answer
    else:
        for i in range(N,0, -1):
            answer *= i
        return answer
    
print(solution(N))