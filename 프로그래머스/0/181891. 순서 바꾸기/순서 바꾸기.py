def solution(num_list, n):
    answer = []
    
    n_after_list = num_list[n:]
    n_list = num_list[0:n]

    return [*n_after_list, *n_list]