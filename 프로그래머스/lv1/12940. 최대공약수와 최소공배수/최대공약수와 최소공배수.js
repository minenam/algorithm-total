function solution(n, m) {
    // 최대 공약수
    const HCF = (num1, num2) => {
    let hcf;
       for (let i = 1; i <= num1 && i <= num2; i++) {
        if (num1 % i == 0 && num2 % i == 0) {
                hcf = i;
            }
        }
    return hcf;
   }

    // 최소 공배수
    const LCM = (num1, num2) => {
        let min = (num1 > num2) ? num1 : num2;

        while (true) {
            if (min % num1 == 0 && min % num2 == 0) {
                break;
            }
        min++;
        }
        return min;
    }
    
    let answer = [HCF(n,m), LCM(n,m)];
    
    return answer;

}