function solution(a, b) {
    const daysList = ['SUN','MON','TUE','WED','THU','FRI','SAT'];
    const d = new Date(`${a}/${b}/2016`);
    const day = daysList[d.getDay()];
    return day;
}