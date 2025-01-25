T = int(input())

answers = []

for _ in range(T):
    string = input()
    chars = string[0] + string[-1]
    answers.append(chars)
    
print('\n'.join(answers))