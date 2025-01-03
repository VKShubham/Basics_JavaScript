function median(numbers) {
    if(numbers.length % 2 == 0) {
        return (numbers[numbers.length / 2] + numbers[(numbers.length / 2) - 1]) / 2;
    }
        return numbers[Math.floor(numbers.length / 2)];
}

arr = [1,2,3,4,5,6]
console.log("Median is :- ",median(arr));


