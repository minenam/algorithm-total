function solution(s, n) {
    // 문자열 공백을 기준으로 쪼개 배열로 만들기
    let charArray = s.split('');
    let answer = [];
    
    // 배열 전체를 돌면서 charCode에 n을 더하기
    // 'Z'.charCode() = 90, 'z'.charCode() = 122
    charArray.map((v, i) => {
        let code = v.charCodeAt();
        if (v === ' ') { 
            answer.push(' ');
        }
        // 만약 z이면 a부터 시작
        else if (code <= 90 && code + n > 90 || code + n > 122) {
            answer.push(String.fromCharCode(code-26+n));
        } else {
            // 1만큼 charCode를 증가시켜 문자로 치환
            answer.push(String.fromCharCode(code+n));
        }
    });
   
    return answer.join('');
}