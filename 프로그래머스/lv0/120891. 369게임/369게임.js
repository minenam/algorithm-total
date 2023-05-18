function solution(order) {
    let answer = 0;
    
    const arr = String(order).split('');
    
    for (const a of arr) {
        if (a.match(/3|6|9/g)) answer += 1;
    }

    return answer;
}