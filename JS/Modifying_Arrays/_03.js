function removeProperty(arr, property) {
    arr.forEach(element => {
        if(typeof element === 'object' && element !== null) {
            for(let key in element) {
                if(typeof element[key] === 'object') {
                    delete element[key][property]
                }
            }
        }
    });
    return arr
}

let nestedArray = [
    [
    { name: "John", age: 25, gender: "male" },
    { name: "Jane", age: 30, gender: "female" }
    ],
    [
    { name: "Bob", age: 20, gender: "male" },
    { name: "Samantha", age: 35, gender: "female" }
    ]
];

console.log(removeProperty(nestedArray,'age'));