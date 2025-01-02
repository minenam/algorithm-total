n = int(input())

S = input()

for i in range(n):
    S = S.replace('I','i')
    S = S.replace('l','L')

print(S)