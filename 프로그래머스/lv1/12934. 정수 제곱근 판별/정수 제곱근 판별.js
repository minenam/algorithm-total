function solution(n) {
    let square = Math.sqrt(n);
     // 제곱근이 정수 인지 확인
    if (Number.isInteger(square)) {
        return Math.pow((square+1), 2);
    } else {
        return -1;
    }
}