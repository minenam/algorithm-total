function solution(num_list) {
    const result = num_list.findIndex(value => value < 0 );
    return result ?? -1;
}