def solution(array):
    big_num = max(array)
    return [big_num, array.index(big_num)]