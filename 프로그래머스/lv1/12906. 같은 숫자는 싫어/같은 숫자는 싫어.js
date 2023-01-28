function solution(arr)
{
    
    if (arr.length === 1) return arr;
    
    let answer = [arr[0]];
    let previous = arr[0]; // 이전 숫자로 0번 인덱스로 초기화
    let i = 0;
    
    while (i < arr.length) {
        if (previous !== arr[i]) { // 이전 숫자가 현재 숫자와 같지 않으면
            answer.push(arr[i]); // 현재 숫자를 새로운 배열에 추가
        }
        previous = arr[i]; // 이전 숫자를 현재 숫자로 변경하면서 배열의 원소 순서대로 진행
        i++;
    }
    
    return answer;
}