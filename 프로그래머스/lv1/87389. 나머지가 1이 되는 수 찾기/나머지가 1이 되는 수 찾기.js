function solution(n) {
    let answer = 0;
    let min = [];
    
    let i = n;
    // n 이하의 자연수 중 나머지가 1이 되는 수
    while (i > 0){
        if (n % i === 1) {
            min.push(i)
        };
        i--;
    }
    
    // 가장 작은 자연수
    answer = Math.min(...min);
    
    return answer;
}