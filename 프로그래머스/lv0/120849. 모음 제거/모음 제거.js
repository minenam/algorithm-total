function solution(my_string) {
    const vowel = ['a', 'e', 'i', 'o', 'u'];
    const regex = /a|e|i|o|u/ig;
    const newString = my_string.replaceAll(regex, '');
    return newString;
}