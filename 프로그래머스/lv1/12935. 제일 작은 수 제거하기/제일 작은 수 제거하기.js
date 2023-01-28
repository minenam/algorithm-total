function solution(arr) {
    // 배열 길이가 1인 경우 [-1] 반환
    if (arr.length === 1) {
        return [-1]
    }
    let softed = [...arr];
    // 내림차순 정렬로 최솟값 찾기
    let min = softed.sort((a, b) => b - a).pop();
    // 최솟값 제외하고 새로운 배열에 넣기
    let answer = arr.filter(v => v !== min);
    
    return answer;
}