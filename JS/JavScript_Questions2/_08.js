function moveRange(arr, startrange, endrange, target) {
    let temp = []

    if(startrange[0] === endrange[0]) {
        for(let i=startrange[1]; i<=endrange[1]; i++) {
            temp.push(arr[startrange[0]][i]);
            console.log(arr[startrange[0]][i]);
            arr[startrange[0]].splice(startrange[1], endrange[1] - startrange[1]);
        }
    }
    else {
        temp.push(arr[startrange[0]][startrange[1]])
        arr[startrange[0]].splice(startrange[1],1);
        temp.push(arr[endrange[0]][endrange[1]])
        arr[endrange[0]].splice(endrange[1],1);
    }

    

    if(temp.length > 0) {
        for(obj of temp) {
            arr[target[0]]. splice(target[1],0,obj)
        }
    }

    return arr;
}


const nestedArray = [
    [
    { name: "Bob", age: 20 },
    { name: "Samantha", age: 35 },
    { name: "Jane", age: 30 }
    ],
    [
    { name: "John", age: 25 },
    { name: "David", age: 40 },
    { name: "Emily", age: 25 }
    ]
]
console.log(moveRange(nestedArray, [0, 0], [0, 1], [1, 1]));