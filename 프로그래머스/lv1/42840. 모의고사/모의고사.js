function solution(answers) {
    let answer = [];
    
    // 1번, 2번, 3번 수포자 규칙
    const ONE = [1, 2, 3, 4, 5];
    const TWO = [2, 1, 2, 3, 2, 4, 2, 5];
    const THREE = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
    
    let oneScore = 0;
    let twoScore = 0;
    let threeScore = 0;
    
    // 정답 배열을 차례대로 확인하여 1~3번 수포자 점수 구하기
    for (let i = 0; i < answers.length; i++) {
        let oneIdx = i % ONE.length;
        let twoIdx = i % TWO.length;
        let threeIdx = i % THREE.length;
        
        if (ONE[oneIdx] == answers[i]) oneScore++;
        if (TWO[twoIdx] == answers[i]) twoScore++;
        if (THREE[threeIdx] == answers[i]) threeScore++;
    }
    
    let scoreArray = [oneScore, twoScore, threeScore];
    let maxScore = Math.max(...scoreArray);
    
    // 가장 높은 점수 받은 사람 구하기
    for (let i = 0; i < scoreArray.length; i++) {
        if (scoreArray[i] === maxScore) {
            answer.push(i+1);
        }
    }

    return answer;
}