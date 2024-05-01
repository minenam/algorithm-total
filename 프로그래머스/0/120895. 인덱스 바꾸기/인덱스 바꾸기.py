def solution(my_string, num1, num2):
    answer = ''
    
    str1 = my_string[num1]
    str2 = my_string[num2]

    answer = my_string[:num1] + str2 + my_string[num1+1:num2] + str1 + my_string[num2+1:]
    return answer