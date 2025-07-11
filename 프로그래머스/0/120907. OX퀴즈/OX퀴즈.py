def solution(quiz):
    answer = []
    
    for i in range(len(quiz)):
        split_quiz = quiz[i].split(' ')
        [x, acc, y, equal, z] = split_quiz
        
        if acc == '-':
            result = int(x) - int(y) 
        elif acc == '+':
            result = int(x) + int(y) 
            
        if result != int(z):
            answer.append("X")
        else:
            answer.append("O")
    
    return answer