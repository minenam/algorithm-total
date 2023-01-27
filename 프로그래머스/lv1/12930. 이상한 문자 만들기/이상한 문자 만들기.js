function solution(s) {
    let answer = [];
    // 공백을 기준으로 단어 쪼개기
    let stringArray = s.split(' ');

    for (let i = 0; i < stringArray.length; i++) {
        let newWord = '';
        // 각 단어의 인덱스로 짝수 홀수 구분하여 문자 스타일 바꾸기
        for (let j = 0; j < stringArray[i].length; j++) {
            if (j % 2 == 0) {
                newWord += stringArray[i][j].toUpperCase();
            } else {
                newWord += stringArray[i][j].toLowerCase();
            }
        }
        // 새로운 배열에 추가
        answer.push(newWord);
    }
    return answer.join(' '); // 배열을 문자열로 반환
}