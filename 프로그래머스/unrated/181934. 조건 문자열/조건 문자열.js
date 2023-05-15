function solution(ineq, eq, n, m) {
    let answer = 1;
    
    if (n < m) {
        if (ineq === ">" && eq === "=") answer = 0;
        if (ineq === ">" && eq === "!") answer = 0;
    } else if (n > m) {
        if (ineq === "<" && eq === "=") answer = 0;
        if (ineq === "<" && eq === "!") answer = 0;
    } else {
        if (eq === "!") answer = 0;
    }
    
    return answer;
}