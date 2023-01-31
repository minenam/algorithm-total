function solution(s) {
    const RULE = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];

    let answer = s;
    
    // 정규표현식 적용
    for (let i = 0; i < RULE.length; i++) {
        let regex = new RegExp(RULE[i], 'g');
        answer = answer.replace(regex, i);
    }
    
    return parseInt(answer);
}