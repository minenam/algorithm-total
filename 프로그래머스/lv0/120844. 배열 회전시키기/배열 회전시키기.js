function solution(numbers, direction) {
    let answer = [...numbers];
    
    if (direction === "right") {
        answer.pop();
        answer.unshift(numbers[numbers.length-1]);
    } else if (direction === "left") {
        answer.shift();
        answer.push(numbers[0]);
        }
    return answer;
}