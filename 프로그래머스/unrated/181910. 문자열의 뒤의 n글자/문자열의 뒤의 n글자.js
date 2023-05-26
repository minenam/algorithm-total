function solution(my_string, n) {
    let answer = '';
    const len = my_string.length;
    
    for (const s in my_string) {
        if (s >= len - n) {
            answer += my_string[s]
        }
    }
    
    return answer;
}