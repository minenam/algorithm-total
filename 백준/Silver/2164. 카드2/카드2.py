from collections import deque

def last_card(n):
    queue = deque(range(1, n + 1))
    
    while len(queue) > 1:
        queue.popleft()
        queue.append(queue.popleft())
    
    return queue[0]


n = int(input())
print(last_card(n))