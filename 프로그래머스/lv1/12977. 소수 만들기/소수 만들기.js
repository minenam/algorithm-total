function solution(nums) {
    let answer = 0;
    let sum = [];
    
    // 소수 체크
    const isPrimeNumber = (number) => {
      for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i == 0) {
          return false;
        }
      }
      return true;
    };

    
    // 합 모든 경우의 수
    for (let i = 0; i < nums.length-2; i++) {
        for (let j = i+1; j < nums.length-1; j++) {
            for (let k = j+1; k < nums.length; k++) {
                let total = nums[i]+nums[j]+nums[k];
                if (isPrimeNumber(total)) {
                    sum.push(total);
                }
            }
        }
    };
    
    answer = sum.length;
    return answer;
}