function solution(a, b, c, d) {
    const dices = [a, b, c, d];
    const counting = {}; // 고유한 숫자 {값 : 개수} 
    
    let answer = 0; // 점수
    const duplicateSet = new Set(); // 중복된 숫자 set
    let p;let q;let r;
    
    // {값 : 개수} 형태의 hash 생성
    for (const dice of dices) {
        if (!counting[dice]) {
            counting[dice] = 1;
        } else {
            duplicateSet.add(dice);
            counting[dice] += 1;
        }
    }
    
    const countKeys = Object.keys(counting); // 고유한 숫자 개수
    
    // 모두 같은 경우
    if (countKeys.length === 1) {
        answer = 1111 * a;
    } 
    // 모두 다른 경우 
    else if (countKeys.length === 4) {
        answer = Math.min(a, b, c, d);
    } 
    // 같은 값이 두 개씩인 경우 
    else if (countKeys.length === 2 && duplicateSet.size === 2) {
        [p, q] = countKeys;
        answer = (Number(p) + Number(q)) * Math.abs((Number(p) - Number(q)));
    } 
    // 두 개가 같고 나머지는 각각 다른 경우
    else if (countKeys.length === 3 && duplicateSet.size === 1) {
        let otherArr = Object.entries(counting).filter((arr, i) => arr[1] === 1);
        [q, r] = otherArr.map((arr)=> Number(arr[0]));
        answer = q * r;
    } 
    // 세 개만 같은 경우
    else {
        for (const key of countKeys) {
            if (duplicateSet.has(Number(key))) p = Number(key);
            else q = Number(key);
        }
        answer = (10 * p + q)**2;
    }
    
    return answer;
}