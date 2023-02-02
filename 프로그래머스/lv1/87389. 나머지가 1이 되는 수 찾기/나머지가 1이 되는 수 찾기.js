function solution(n) {
    let answer = 0;
    let min = [];
    
    let i = 1;
    // n 이하의 자연수 중 나머지가 1이 되는 수
    while (i <= n){
        if (n % i === 1) {
            return i
        };
        i++;
    }
}