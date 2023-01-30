function solution(strings, n) {
    /*
    - 반복문으로 n 인덱스 글자를 찾아 {n번째 글자: 해당 글자 인덱스} 해시테이블 만들기
    - 해시테이블의 키를 배열로 만들고 정렬하기
    - 반복문으로 원래 단어 배열에 해당하는 인덱스와, 해시테이블의 인덱스 값을 비교하여 새로운 배열 반환
    */
    let answer = [...strings];
    
    answer.sort((a, b) => {
        console.log(a[n], b[n]);
        
        // 문자열 n번째 인덱스 글자를 기준으로 오름차순 정렬
        if (a[n] > b[n]) return 1;
        if (a[n] < b[n]) return -1;
        
        // 동일한 인덱스 글자를 가진 단어들끼리 사전순 정렬
        if (a > b) return 1;
        if (a < b) return -1;
    });
    
    return answer;
}