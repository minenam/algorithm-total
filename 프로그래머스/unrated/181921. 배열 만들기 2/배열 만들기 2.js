function solution(l, r) {
    let answer = [];
    
    for (let i = l; i < r+1; i++) {
        if (String(i).match(/^(5+(0|5)*)$/g)) {
            answer.push(i);
        }
    }
    if (!answer.length) return [-1];
    return answer;
    
    
}