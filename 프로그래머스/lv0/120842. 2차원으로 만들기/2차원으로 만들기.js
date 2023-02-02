function solution(num_list, n) {
    let answer = [];
    
    let num = [];
    for (let i = 0; i < num_list.length; i++) {
            num.push(num_list[i]);
            if (num.length === n) {
                answer.push(num);
                num = [];
        }
    };
    
    return answer;
}