result = []

while True:
    num = int(input())
    if num == 0:
        break
    
    length = len(str(num)) - 1
    flag = True
    for i in range(0, length // 2 + 1):
        if str(num)[i] != str(num)[length-i]:
            flag = False
        
    if flag:
        result.append('yes')
    else:
        result.append('no')

print('\n'.join(result))