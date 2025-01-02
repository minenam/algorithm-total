N = int(input())

nums = list(map(int, input().split()))

answer = 0

def is_prime(num):
    if num == 1:
        return False
    divisor = 2
    while divisor < num:
        if num % divisor == 0:
            return False
        divisor += 1
    return True

for num in nums:
    if is_prime(num):
        answer += 1
    
print(answer)