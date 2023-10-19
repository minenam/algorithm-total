function solution(arr) {
    if (!arr.includes(2)) {
        return [-1];
    } else {
        const indexArray = [];
        arr.filter((value, index) => {
            if (value === 2) indexArray.push(index)
        });
        const firstIndex = indexArray[0];
        const lastIndex = indexArray[indexArray.length - 1];
        return arr.slice(firstIndex, lastIndex + 1);
    }
}