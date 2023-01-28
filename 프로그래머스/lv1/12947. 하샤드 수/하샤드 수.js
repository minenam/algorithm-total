function solution(x) {
    let anwser = false; // 하샤드 수 여부
    let sum = 0; // 자릿수 합
    let originX = x; // 처음 양의 정수

    while (x >= 1) {
        let remainder = x % 10;
        sum += remainder;
        x = Math.floor(x / 10);
    }
    
    if (originX % sum == 0) {
        anwser = true
    } 
    
    return anwser;
}