function solution(my_string) {
    const answer = new Array(52).fill(0); // 52 length array filled 0
    
    // A-Z : 65-90 , a-z: 97-122
    for (let i = 0; i < my_string.length; i++) {
        const code = my_string.charCodeAt(i); // change char to code
        
        if (code <= 90) { // upper case
            answer[code-65] += 1;
        } else { // lower case
            answer[code-97+26] += 1;
        }
    }
    
    return answer;
}