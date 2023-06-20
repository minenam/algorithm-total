function solution(my_string, is_suffix) {
    let words = [];
    
    for (let i = 0; i < my_string.length; i++) {
        words.push(my_string.slice(i, my_string.length));
    }
    return words.includes(is_suffix) ? 1 : 0;
}