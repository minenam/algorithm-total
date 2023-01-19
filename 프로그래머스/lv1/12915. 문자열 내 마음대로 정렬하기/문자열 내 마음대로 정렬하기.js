function solution(strings, n) {
    let answer = [];
    let newStrings = []; // [ "a", "e", "u"];
    
    for (let i = 0; i < strings.length; i++) {
        let nIndex = strings[i][n];
        strings[i] = nIndex+strings[i];
    }
    strings.sort();
    
    for (let i = 0; i < strings.length; i++) {
        answer.push(strings[i].slice(1,))
    }
    
    return answer;
}