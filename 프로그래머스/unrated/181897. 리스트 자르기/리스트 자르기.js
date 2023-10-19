function solution(n, slicer, num_list) {
    let answer = [];
    const [a, b, c] = slicer;

    switch (n) {
        case 1:
            return num_list.slice(0, b+1);
        case 2:
            return num_list.slice(a);
        case 3:
            return num_list.slice(a, b+1);
        case 4:
            answer = num_list.slice(a, b+1);
            return answer.filter((value, index) => index % c === 0);
    }
    return;
}