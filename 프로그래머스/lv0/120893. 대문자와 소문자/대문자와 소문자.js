function solution(my_string) {
    let answer = '';
    
    const arr = my_string.split('');
    for (const a of arr) {
        if (a.toUpperCase() === a) {
            answer += a.toLowerCase();
        } else {
            answer += a.toUpperCase();
        }
    }

    return answer;
}