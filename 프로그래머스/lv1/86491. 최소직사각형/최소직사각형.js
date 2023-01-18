function solution(sizes) {
    let maxValue = 0;
    let minValue = 0;
    
    for (let size of sizes) {
        let weight = size[0];
        let height = size[1];
        
        if (weight > height) {
            if (weight > maxValue) {
                maxValue = weight
            }
            if (height > minValue) {
                minValue = height
            }
        } else {
            if (height > maxValue) {
                maxValue = height
            }
            if (weight > minValue) {
                minValue = weight
            }
        }
    }
    return maxValue * minValue;
}