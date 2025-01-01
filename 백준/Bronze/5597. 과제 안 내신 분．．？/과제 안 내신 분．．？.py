answer = [i+1 for i in range(30)]

for _ in range(28):
    n = int(input())
    if n in answer:
        answer.remove(n)

print(answer[0], answer[1], sep='\n')