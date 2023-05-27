function solution(my_string, queries) {
    let answer = my_string;
    
    for (const query of queries) {
        const [s, e] = query;
        let start = answer.substring(0, s);
        let temp = answer.substring(s, e+1);
        let last = answer.substring(e+1, my_string.length);
        let reverseTemp = temp.split('').reverse().join('');
        answer = start+reverseTemp+last;
    }
    return answer;
}