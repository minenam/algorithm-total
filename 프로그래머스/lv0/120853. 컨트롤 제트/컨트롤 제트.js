function solution(s) {
    const sArray = [...s.split(' ')];
    
    let answer = 0;
    let i = 0;
    
    while (i < sArray.length) {
        if (sArray[i] !== 'Z') {
            answer += Number(sArray[i]);
        } else {
            answer -= Number(sArray[i-1]);
        }
        i++;
    }
    
    return answer;
}