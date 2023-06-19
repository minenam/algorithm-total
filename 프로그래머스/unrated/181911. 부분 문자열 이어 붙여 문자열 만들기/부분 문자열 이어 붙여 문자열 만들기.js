function solution(my_strings, parts) {
    let answer = '';
    let s; let e;
    my_strings.forEach((str, idx)=> {
        s = Number(parts[idx][0]);
        e = Number(parts[idx][1])+1; 
        answer += str.slice(s, e);
    })
    return answer;
}