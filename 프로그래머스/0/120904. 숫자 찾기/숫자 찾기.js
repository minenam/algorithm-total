function solution(num, k) {
    let answer = 0;
    
    const charNumArr = num.toString().split('');
    
    answer = charNumArr.indexOf(k.toString());
    
    return answer === -1 ? -1 : answer + 1;
}