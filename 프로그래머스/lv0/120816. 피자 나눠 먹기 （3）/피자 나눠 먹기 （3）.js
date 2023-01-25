function solution(slice, n) {
    let answer = 1;
    
    // slice로 나머지가 남는 경우
    if ((n % slice) <= slice) {
        return Math.ceil(n / slice);
    } 
    
    // slice로 나눠떨어지는 경우
    while (true) {
        if ((slice * answer) % n === 0) {
            break
        } else {
            answer += 1;
        }
    }
    return answer;
}