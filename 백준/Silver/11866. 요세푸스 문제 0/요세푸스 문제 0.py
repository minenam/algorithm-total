K, V = map(int, input().split())

init = list(range(1, K+1))
answer = []

index = 0

while len(init) > 0:
    index = (index + V - 1) % len(init)  
    answer.append(init.pop(index))

print(f'<{", ".join(map(str, answer))}>')