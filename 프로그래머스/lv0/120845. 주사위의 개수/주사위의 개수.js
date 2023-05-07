function solution(box, n) {
    // 직육면체 상자에 들어갈 정육면체 주사위 최대 개수 구하기
    // 가로 x 세로 x 높이
    // 각 길이의 최소 공배수 구하기
    
    let answer = 0;
    const [width, length, height] = box;
    
    const widthDiv = parseInt(width / n);
    const lenDiv = parseInt(length / n);
    const heightDiv = parseInt(height/ n);
    
    answer = widthDiv * lenDiv * heightDiv;
    return answer;
}