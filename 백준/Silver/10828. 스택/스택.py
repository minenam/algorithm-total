import sys

input = sys.stdin.read
data = input().splitlines()

N = int(data[0])
commands = data[1:]

stack = []
results = []

for command in commands:
    if command.startswith("push"):
        _, value = command.split()
        stack.append(value)
    elif command == "pop":
        if stack:
            results.append(stack.pop())
        else:
            results.append("-1")
    elif command == "size":
        results.append(str(len(stack)))
    elif command == "empty":
        results.append("1" if not stack else "0")
    elif command == "top":
        if stack:
            results.append(stack[-1])
        else:
            results.append("-1")

print("\n".join(results))