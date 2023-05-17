function solution(numLog) {
    const op = new Map();
    op.set(1, 'w');
    op.set(-1, 's');
    op.set(10, 'd');
    op.set(-10, 'a');
    
    let answer = '';
    
    for (let i = 1; i < numLog.length; i++) {
        const diff = numLog[i] - numLog[i-1];
        answer += op.get(diff);
    }
    
    return answer;
}