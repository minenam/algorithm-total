function solution(arr, divisor) {
    // 새로운 배열 생성
    let answerArray = [];

    // 나머지가 0인 경우만 새로운 배열에 추가
    arr.map(v => {
        if (v % divisor === 0) {
            answerArray.push(v);
        }
    })

    // 나머지가 0인 수가 없으면 [-1] 반환
    if (!answerArray.length) {
        return [-1]
    }
    // 오름차순
    return answerArray.sort((a, b) => a - b);
}
