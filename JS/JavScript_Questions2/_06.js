function groupby(arr, groupkey, subgroupkey) {
    const result = {};

    arr.forEach(obj => {
        const mainGroup = obj[groupkey];
        const subGroup = obj[subgroupkey];

        if (!result[mainGroup]) {
            result[mainGroup] = {};
        }
    
        if (!result[mainGroup][subGroup]) {
            result[mainGroup][subGroup] = [];
        }

        result[mainGroup][subGroup].push({ [groupkey]: mainGroup, [subgroupkey]: subGroup, ...obj });
    });

    return result;
}

const arr = [ 
    { "name": "John", "age": 25, "gender": "male" }, 
    { "name": "Mary", "age": 32, "gender": "female" }, 
    { "name": "Bob", "age": 25, "gender":"male" }, 
    { "name": "Jessica", "age": 32, "gender": "female" }
]

console.log(groupby(arr, 'name', 'age'));
