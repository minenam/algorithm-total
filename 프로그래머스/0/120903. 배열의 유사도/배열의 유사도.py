def solution(s1, s2):
    answer = 0
    
    for i in range(len(s1)):
        if s2.count(s1[i]) > 0:
            answer += 1
    return answer