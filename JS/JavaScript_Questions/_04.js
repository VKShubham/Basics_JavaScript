function avarage(arr) {
    total = 0;
    nos = 0;

    for(num of arr) {
        if(num % 3 == 0) {
            total += num;
            nos += 1;
        }
    }
    return total / nos;
}

arr = [15, 20, 30, 45, 50, 60, 75];
console.log("Avarage is :- ",avarage(arr));
