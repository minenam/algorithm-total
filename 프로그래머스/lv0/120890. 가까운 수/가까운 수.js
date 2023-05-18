function solution(array, n) {
    // 가장 가까운 수 -> 차이를 비교해보기
    
    let answer = n+100;
    array = array.sort();
    
    for (const a of array) {
        if (Math.abs(n-answer) > Math.abs(n-a)) {
            answer = a;
        } else if (Math.abs(n-answer) === Math.abs(n-a)) { 
            // 가장 가까운 수가 여러 개일 경우 더 작은 수를 return
            if (answer > a) {
                answer = a;
            }
        } else {
            continue;
        }
    }
    
    return answer;
}