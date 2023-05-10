function solution(my_string, overwrite_string, s) {
    let answer = '';
    
    const my_len = my_string.length;
    const over_len = overwrite_string.length;
    const first = my_string.substring(0, s);
    const last = my_string.substring(s+over_len, my_len);
    answer = first + overwrite_string + last;
    
    return answer;
}