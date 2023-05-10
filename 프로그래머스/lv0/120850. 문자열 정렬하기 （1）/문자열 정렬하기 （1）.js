function solution(my_string) {
    const stringArray = [...my_string.match(/\d/g)];  // 숫자만 추출
    const numbers = stringArray.map((s) => Number(s));  // 문자 -> 숫자 형변환
    const answer = numbers.sort((a, b) => a - b); // 오름차순
    
    return answer;
}