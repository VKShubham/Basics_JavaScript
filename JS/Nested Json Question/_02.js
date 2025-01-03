function findValueByKey(object,key) {
    
    for(let currentkey in object) {

        if(currentkey === key) {
            return object[currentkey]
        }

        if(typeof object[currentkey] === 'object' && object[currentkey] !== null) {
            let result = findValueByKey(object[currentkey], key);
            if(result !== undefined) {
                return result
            }
        }
    }
    return undefined;
}

const nestedJson = {
    name: "John",
    age: 25,
    isStudent: true,
    courses: [
        { name: "Math", grade: "A" },
        { name: "Science", grade: "B" },
        { name: "English", grade: "C" }
    ],
    friends: [
        { name: "Jane", age: 22 },
        { name: "Bob", age: 30 }
    ]
};

console.log(findValueByKey(nestedJson, "grade"));
