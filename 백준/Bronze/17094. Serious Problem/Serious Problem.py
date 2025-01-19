length = int(input())
string = input()

number_count = 0 # 2
string_count = 0 # e

for i in range(length):
    if string[i] == '2':
        number_count += 1
    elif string[i] == 'e':
        string_count += 1
    else:
        continue

print('yee' if number_count == string_count else '2' if number_count > string_count else 'e')