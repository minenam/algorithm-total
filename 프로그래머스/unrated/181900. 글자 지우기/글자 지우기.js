function solution(my_string, indices) {
    // Solution 1.
    let answer = '';
    
    for (let i = 0; i < my_string.length; i++) {
        if (!indices.includes(i)) {
            answer += my_string[i]
        }
    }
    
    // Solution 2.
    // const answer = my_string.split('').filter((_, i) => !indices.includes(i)).join('')
    
    return answer;
}