function solution(new_id) {
    let answer = '';
    
    // 1단계 일괄 소문자
    let temp = new_id.toLowerCase(); 
    
    // 2단계 특수 문자 제거
    temp = temp.replace(/([^a-z0-9-_.])/gi, '');
    // 3단계 연속 마침표 치환
    temp = temp.replace(/([\.]{2,})/gi, '.')
    // 4단계 맨 처음, 마지막 마침표 제거
    temp = temp.replace(/^\.|\.$/gi, '');
    
    // 5단계 길이 0이면 "a" 대입
    if (temp.length === 0) { 
        temp = "a";
    }
    // 6단계 길이 16 이상이면, 첫 15개만 남기고 마침표 제거
    if (temp.length >= 16) {
        temp = temp.slice(0, 15);
    }
    
    // 7단계 길이 2 이하면 마지막 문자 길이 3까지 반복
    if (temp.length <= 2) {
        let len = temp.length;
        temp += temp[len-1].repeat(3-len); 
    }  
    answer = temp.replace(/\.$/gi, '');
    
    return answer;
}