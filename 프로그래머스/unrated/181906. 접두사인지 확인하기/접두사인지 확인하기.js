function solution(my_string, is_prefix) {
    let words = [];
    
    for (let i = 1; i < my_string.length + 1; i++) {
        words.push(my_string.slice(0, i));
    }
    return words.includes(is_prefix) ? 1 : 0;
}