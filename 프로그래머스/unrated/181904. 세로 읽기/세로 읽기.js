function solution(my_string, m, c) {
    let answer = '';
    let strArr = [my_string[0]];
    
    if (m === 1) return my_string;
    
    for (let i = 1; i <= my_string.length; i++) {
        if (strArr.length === m) {
            answer += strArr[c-1];
            strArr = [];
        }
        strArr.push(my_string[i]);
    }
    return answer;
}









/*


for (let i = 0; i < my_string.length; i++) {      
        if (m === c) {
            return my_string;
        }
        else if ((i+1) % m === c) {
            answer += my_string[i];
        }
    }
    

*/