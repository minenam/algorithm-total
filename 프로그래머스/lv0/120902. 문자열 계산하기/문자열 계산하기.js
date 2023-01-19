function solution(my_string) {
    
    let stringList = my_string.split(' ');
    
    let total = Number(stringList[0]);
    
    for (let i=0; i < stringList.length; i++) {

        if (stringList[i] === "+") {
           total += Number(stringList[i+1]);
        } 
        if (stringList[i] === "-") {
            total -= Number(stringList[i+1]);
        } 
    }
    
    return total;
}