function solution(numbers, k) {
    // k > numbers.length 인 경우, numbers를 여러번 돌아야 함
    // 입력값 numbers[] 를 k만큼 반복해서 늘리기
    const dodubledIdx = 2 * (k-1);
    
    // numbers 길이에 해당하는 인덱스 반환
    const idx = dodubledIdx % numbers.length;
    const answer = numbers[idx];
    
    return answer;
    
}