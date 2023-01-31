function solution(hp) {
    let answer = 0;
    
    // 공격력이 큰 개미들 위주로 먼저 구성하기
    let warlordCount = parseInt(hp / 5); // 장군개미 수
    hp = hp - (5 * warlordCount);
    let soldierCount = parseInt(hp/ 3); // 병정개미 수
    hp = hp - (3 * soldierCount);
    let ergateCount = parseInt(hp); // 일개미 수
    
    answer = warlordCount + soldierCount + ergateCount;
    
    return answer;
}