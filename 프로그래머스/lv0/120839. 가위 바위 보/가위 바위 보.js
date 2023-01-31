function solution(rsp) {
    const win = { '2': '0', '0': '5', '5': '2'}; // {'입력': '이기는 경우'}
    let answer = '';
    
    // rsp 문자열을 차례대로 확인하여 이기는 경우 출력
    for (let value of rsp) {
        answer += win[value];
    }
    
    return answer;
}