function solution(n)
{
    let answer = 0;
    let i = String(n).length - 1;
    
    while (n > 0) {
        // 자리수 = 10의 제곱수로 나눈 정수 몫
        let num = Math.floor(n / 10 ** i);
        // 구한 자리수를 더하기
        answer += num;
        // 구한 자리수 * 10의 제곱수를 원래 n에서 빼기
        n = n - (num * 10 ** i);
        i--;
    }
    return answer;
}