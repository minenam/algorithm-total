function solution(arr, intervals) {
    const [[a1 , b1], [a2, b2]] = intervals;
    const firstRange = arr.slice(a1, b1 + 1);
    const secondRange = arr.slice(a2, b2 + 1);
    return [...firstRange, ...secondRange];
}