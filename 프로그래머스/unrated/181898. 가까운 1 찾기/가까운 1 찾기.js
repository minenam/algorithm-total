function solution(arr, idx) {
    let answer = 0;
    let oneFlag = false;
    
    for (let i = 0; i < arr.length; i++) {
        if (i >= idx & arr[i] === 1) {
            answer = i;
            oneFlag = true;
            break;
        }
    }
    
    return oneFlag ? answer : -1;
}