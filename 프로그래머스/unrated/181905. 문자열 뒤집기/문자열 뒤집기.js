function solution(my_string, s, e) {
    if (s === e) return my_string;
    
    const first = my_string.slice(0, s);
    const center = my_string.slice(s, e+1);
    const reversedCenter = center.split('').reverse().join('');
    const last =  my_string.slice(e+1, my_string.length);
    
    return first + reversedCenter + last;
}