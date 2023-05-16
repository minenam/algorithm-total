function solution(a, d, included) {
    let answer = 0;
    let value = 0; // 항
    
    for (let i = 0; i < included.length; i++) {
        // 배열 included에서 true 인 인덱스 i 구하기
        if (included[i] === true) {
                // 첫째항: a, 공차: d인 등차수열
                // a_n = d * n + a - d
                value = d * (i+1) + a - d;

                // i + 1항의 값 모두 더하기
                answer += value;
            }
        }
    
    return answer;
}