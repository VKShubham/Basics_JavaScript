function findMissingAndDuplicate(arr) {
    const n = arr.length;
    const sum = (n * (n + 1))/2;

    const arraysum = arr.reduce((acc, current) => current + acc, 0);

    arr = arr.sort((a,b) => (a - b));
    let duplicate = 0;
    for(let i=0; i<arr.length-1; i++) {
        if(arr[i] == arr[i+1]) {
            duplicate = arr[i];
            break;
        }
    }
    return [(sum - arraysum + duplicate),duplicate];
}

const arr = [4, 3, 2, 7, 8, 2, 6, 1];
console.log("Missing Number :- ",findMissingAndDuplicate(arr)[0]);
console.log("Duplicate Number :- ",findMissingAndDuplicate(arr)[1]);
