function solution(s) {
    const RULE = {
        'zero': 0,
        'one': 1,
        'two': 2,
        'three': 3,
        'four': 4,
        'five': 5,
        'six': 6,
        'seven': 7,
        'eight': 8,
        'nine': 9,
    };
    
    let answer = '';
    let temp = '';
    
    for (let i = 0; i < s.length; i++) {
        // 숫자인 경우
        if (!isNaN(s[i])) {
            answer += s[i];
        } else {
            // 문자인 경우
            temp += s[i];
            if (Object.keys(RULE).includes(temp)) {
                answer += RULE[temp];
                temp = '';
            }
        }   
    }
    return parseInt(answer);
}