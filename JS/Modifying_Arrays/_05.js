function changestructure(arr) {
    const flatted = arr.flat();
    let result = {};
    console.log(flatted);
    
    const minAge = flatted.reduce((acc,current) => current.age < acc.age ? current : acc
    ,{age: Number.MAX_VALUE});

    const maxAge = flatted.reduce((acc,current) => current.age > acc.age ? current : acc
    ,{age: Number.MIN_VALUE});

    const stepSize = 10;

    let ranges = [];
    let currentAge = minAge.age;
    while(currentAge  <= maxAge.age) {
        ranges.push(currentAge);
        currentAge += stepSize;
    }

    if (ranges[ranges.length - 1] < maxAge.age+1) {
        ranges.push(maxAge.age+1);
    }

    if(ranges.length % 2 == 0) {
        ranges.push(minAge.age);
    }

    console.log(ranges);
    
    for(i=0; i<ranges.length-1; i++) {
        const rangeData = flatted.filter(obj => obj.age >= ranges[i] && obj.age < ranges[i+1]) 
        result[`${ranges[i]}-${ranges[i+1]-1}`] = rangeData
    }

    return result;
}

let nestedArray = [
    [{ name: "John", age: 25 }, { name: "Jane", age: 30 }],
    [{ name: "Bob", age: 20 }, { name: "Samantha", age: 35 }]
];
console.log(changestructure(nestedArray))