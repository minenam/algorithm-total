answers = []

while True:
    a, b, c = sorted(list(map(int, input().split())))
    if a == 0 and b == 0 and c == 0:
        break
    if a ** 2 + b ** 2 == c ** 2:
        answers.append("right")
    else:
        answers.append("wrong")

print("\n".join(answers))
