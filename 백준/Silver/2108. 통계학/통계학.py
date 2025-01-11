import sys
from collections import Counter

input = sys.stdin.read

data = input().split()
N = int(data[0])
numbers = list(map(int, data[1:]))

mean = round(sum(numbers) / N)

sorted_numbers = sorted(numbers)
median = sorted_numbers[N // 2]

counter = Counter(numbers)
most_common = counter.most_common()
most_common.sort(key=lambda x: (-x[1], x[0]))
if len(most_common) > 1 and most_common[0][1] == most_common[1][1]:
    mode = most_common[1][0]
else:
    mode = most_common[0][0]

range_value = max(numbers) - min(numbers)

print(mean)
print(median)
print(mode)
print(range_value)