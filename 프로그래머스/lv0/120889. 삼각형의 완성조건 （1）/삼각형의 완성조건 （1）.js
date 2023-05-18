function solution(sides) {
    const [x, y, z] = sides.sort((a, b) => a - b);
  
    if (z < (x+y)) return 1;
    return 2;
}