function solution(sizes) {
    let i = 0;
    
    // 한 명함 내에서 길이
    let smallerSize = 0;
    let largerSize = 0;
    
    // 전체 명함의 길이
    let lastSmallest = 0;
    let lastLargest = 0;
    
    while (i < sizes.length) {
        // 한 명함의 길이 (가로, 세로)
        let weight = sizes[i][0];
        let height = sizes[i][1];
        
        // 가로가 더 길 때
        if (weight > height) {
            largerSize = weight;
            smallerSize = height;
            // 이전까지의 누적 큰 값과 비교하기
            if (weight > lastLargest) {
                lastLargest = weight;
            }
            // 이전까지의 누적 작은 값과 비교하기
            if (height > lastSmallest) {
                lastSmallest = height;
            }
        // 세로가 더 길 때
        } else {
            largerSize = height;
            smallerSize = weight;
            // 이전까지의 누적 큰 값과 비교하기
            if (height > lastLargest) {
                lastLargest = height;
            }
            // 이전까지의 누적 작은 값과 비교하기
            if (weight > lastSmallest) {
                lastSmallest = weight;
            }
        }
        i++;
    }

    return lastLargest * lastSmallest; // 최종 길이끼리 곲
}