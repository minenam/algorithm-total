function solution(my_string) {
    let answer = 0;
    
    for (const s of my_string) {
        if (Number(s)) answer += Number(s);
    }
   
    return answer;
}