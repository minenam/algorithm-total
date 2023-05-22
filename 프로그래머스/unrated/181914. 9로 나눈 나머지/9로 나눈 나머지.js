function solution(number) {
    let answer = 0;
    let sum = 0;

    for (const num of number) {
        sum += Number(num);
    }
    
    answer = sum % 9;
    
    return answer;
}