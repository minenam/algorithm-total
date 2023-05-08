function solution(numbers) {
    
    // 정렬
    const sortedNums = numbers.sort((a, b) => a - b);
    
    // 가장 큰 수와 두 번째로 큰 수를 곱하기
    const max = Math.max(...sortedNums);
    sortedNums.pop(max);
    const secondMax = Math.max(...sortedNums);
    
    return max * secondMax;
}