function solution(s) {
    let answer = s.split('') // 각 문자를 쪼갠 배열로 변환
                  .sort((a, b) => {
                      if (a > b) return -1  // 내림차순 정렬
                  });
    return answer.join(''); // 배열을 문자열로 바꾸기
}