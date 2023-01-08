# 입력 
strings = input()

# 다른 사람 풀이
def solution(strings):
    croatia_list = ["c=", "c-", "dz=", "d-", "lj", "nj", "s=", "z="] # 변경된 크로아티아 알파벳
    count_croa = 0

    for croatia in croatia_list:
        if croatia in strings:
            count_croa += strings.count(croatia)
    answer = len(strings) - count_croa
    return answer

print(solution(strings))