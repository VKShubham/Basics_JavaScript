function getobj(arr) {

    //finding minimum number
    let min = arr[0];

    for(num of arr) {
        if(num < min) {
            min = num;
        }
    }

    // finding maximum number
    let max = arr[0];

    for(num of arr) {
        if(num > min) {
            max = num;
        }
    }

    //finding an avarage
    const total = arr.reduce((acc,current) => acc + current, 0);
    const avg = total / arr.length;

    return {
        "min" : min,
        "max" : max,
        "avg" : avg
    }
}

arr = [15, 20, 30, 45, 50, 60, 75];
const obj = getobj(arr);
console.log("min of an array :- ",obj.min);
console.log("max of an array :- ",obj.max);
console.log("avg of an array :- ",obj.avg);

