def solution(numbers):
    number_dict = {
        "zero": 0, "one":1, "two":2, "three":3, "four":4, 
        "five":5, "six":6, "seven":7, "eight":8, "nine":9
    }
    
    for key, value in number_dict.items():
        numbers = numbers.replace(key, f'{value}')
        
    return int(numbers)