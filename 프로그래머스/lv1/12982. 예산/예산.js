function solution(d, budget) {
    let count = 0;
    let temp = budget;
    
    const sortedD = d.sort((a, b) => a - b);
    
    while (sortedD.length > 0) {
        const price = sortedD.shift();
        temp -= price;
        if (temp < 0) break
        count += 1;
    }
    
    return count;
}