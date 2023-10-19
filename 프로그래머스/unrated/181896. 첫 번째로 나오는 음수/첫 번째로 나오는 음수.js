function solution(num_list) {
    const result = [];
    num_list.forEach((value, index) => { 
        if (value < 0) {
            result.push(index);
        }});
    return result.length ? result[0] : -1;
}