results = []

while True:
    left_parentheses = []
    strings = input().rstrip()
    
    if strings == '.':
        break

    result = 'yes'
    for string in strings:
        if string == '(' or string == '[':
            left_parentheses.append(string)
        elif string == ')':
            if len(left_parentheses) == 0 or left_parentheses[-1] != '(':
                result = 'no'
                break
            left_parentheses.pop()
        elif string == ']':
            if len(left_parentheses) == 0 or left_parentheses[-1] != '[':
                result = 'no'
                break
            left_parentheses.pop()

    if len(left_parentheses) != 0:
        result = 'no'

    results.append(result)

print('\n'.join(results))