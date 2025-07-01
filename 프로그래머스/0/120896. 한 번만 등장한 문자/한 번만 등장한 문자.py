def solution(s):
    answer = ''
    dic = dict()
    
    for char in s:
        if char in dic:
            dic[char] += 1
        else:
            dic[char] = 1
            
    for key, value in dic.items():
        if value == 1:
            answer += key

    return ''.join(sorted(answer))