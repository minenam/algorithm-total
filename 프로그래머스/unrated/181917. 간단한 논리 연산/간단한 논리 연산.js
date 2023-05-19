function solution(x1, x2, x3, x4) {
    // v : 합, ㅅ : 교
    // (x1 ∨ x2) ∧ (x3 ∨ x4)
    
    // (x1 ∨ x2)
    const left = [x1, x2].some((v) => v === true);
    // (x3 ∨ x4)
    const right = [x3, x4].some((v) => v === true);
    
    const answer = [left, right].every((v) => v === true);
    return answer;
}