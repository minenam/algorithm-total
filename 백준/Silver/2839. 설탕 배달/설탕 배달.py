N = int(input())

def deliver_sugar(N):
    dividend = N
    bag_cases = []
    bag_count = 0
    
    divisor_by_three = [i for i in range(N // 3, -1, -1)]
    divisor_by_five = [i for i in range(N // 5, -1, -1)] 
    
    for i in divisor_by_three:
        for j in divisor_by_five:
            if 3 * i + 5 * j == N:
                bag_count = i + j
                bag_cases.append(bag_count)

    return min(bag_cases) if bag_cases else -1


print(deliver_sugar(N))