function solution(lottos, win_nums) {
    const LOTTOSRESULT = {6: 1, 5: 2, 4:3, 3:4, 2:5, 1:6, 0:6 };
    
    let i = 0;
    let lowResult = 0;
    let zeroCount = 0;
    
    // 0이 다 틀린다는 가정 (최저 순위)
    while (i < lottos.length) {
        if (win_nums.includes(lottos[i])){
            lowResult ++;
        }
        // 0의 개수 세기
        if (lottos[i] === 0) zeroCount ++;
        i++;
    }
    
    // 0이 다 맞는 다는 가정 (최고 순위)
    let highResult = lowResult + zeroCount;
    
    let answer = [LOTTOSRESULT[highResult], LOTTOSRESULT[lowResult]];
    return answer;
    
}