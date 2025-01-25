
class Queue:
    def __init__(self):
        self.queue = []
    
    def push(self, value: int): 
        self.queue.append(value)
        return value
            
    def pop(self):
        if self.queue:
            return self.queue.pop(0)
        else:
            return -1
        
    def size(self):
        return len(self.queue)
            
    def empty(self):
        return 0 if len(self.queue) else 1
    
    def front(self):
        if self.queue:
            return self.queue[0]
        else:
            return -1
    
    def back(self):
        if self.queue:
            return self.queue[-1]
        else:
            return -1

import sys

input = sys.stdin.read
data = input().split()
N = int(data[0])
lines = data[1:]

answer = []
q = Queue()

for i in range(len(lines)):
    cmd = lines[i]
    if cmd == 'push':
        value = int(lines[i + 1])
        q.push(value)
    elif cmd == 'front':
        answer.append(q.front())
    elif cmd == 'back':
        answer.append(q.back())
    elif cmd == 'size':
        answer.append(q.size())
    elif cmd == 'empty':
        answer.append(q.empty())
    elif cmd == 'pop':
        answer.append(q.pop())

print(*answer, sep='\n')