import math

n = int(input())

c_list = list(map(float, input().split()))

total = 0

for i in range(len(c_list)):
    total += c_list[i]**3

print(total ** (1/3))