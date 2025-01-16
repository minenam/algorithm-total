import sys

answers = []
stack = []

input = sys.stdin.read
data = input().splitlines()

N = int(data[0])
cmds = data[1:]

for cmd in cmds:
    if 'push' in cmd:
        _, x = cmd.split()
        stack.append(x)
    elif cmd == 'pop':
        if stack:
            answers.append(stack.pop())
        else:
            answers.append('-1')
    elif cmd == 'size':
        answers.append(str(len(stack)))
    elif cmd == 'empty':
        if stack:
            answers.append('0')
        else:
            answers.append('1')
    elif cmd == 'top':
        if not stack:
            answers.append('-1')
        else:
            answers.append(stack[-1])

print('\n'.join(answers))