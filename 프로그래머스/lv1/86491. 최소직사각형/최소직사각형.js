function solution(sizes) {
    let maxSideValue = 0;
    let minSideValue = 0;
    let biggerValue = 0;
    let smallerValue = 0;
    
    for(let i=0; i<sizes.length; i++) {
        let w = sizes[i][0];
        let h = sizes[i][1];
        
        biggerValue = Math.max(w, h);
        smallerValue = Math.min(w, h);
        maxSideValue = Math.max(biggerValue, maxSideValue);
        minSideValue = Math.max(smallerValue, minSideValue);
    }
    return maxSideValue * minSideValue;
}