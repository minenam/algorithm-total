function solution(my_string) {
    let strings = [];
    for (let i = 0; i < my_string.length; i++) {
        strings.push(my_string.slice(i,my_string.length));
    }
    return strings.sort();
}