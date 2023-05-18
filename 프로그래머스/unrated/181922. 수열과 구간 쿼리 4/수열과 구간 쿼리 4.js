function solution(arr, queries) {
    
    for (const query of queries) {
        const [s, e, k] = query;
        const range = arr.slice(s, e+1);
        
        for (let i = s; i < e + 1; i++) {
           if (i % k === 0) {
                arr[i] += 1;
            } 
        }
    }
    return arr;
}