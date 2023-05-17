function solution(arr, queries) {
    let answer = arr;
    let tempI = 0;
    let tempJ = 0;
    
    for (const query of queries) {
        const [i, j] = query;
        tempI = arr[i];
        tempJ = arr[j];
        
        arr[j] = tempI;
        arr[i] = tempJ;
    }
    return answer;
}