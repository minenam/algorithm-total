function solution(my_string) {
    const answer = new Set();

    // 문자열을 배열로 만들기
    const strArr = my_string.split('');
    
    // Set으로 중복값 제거
    for (const str of strArr) {
        answer.add(str);
    }
    
    // 문자열로 변환
    return [...answer].join('');
}