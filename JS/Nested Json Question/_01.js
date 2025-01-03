function flattend(obj) {
    const ans = {};
    for (let key in obj) {
        let value = obj[key];

        if (typeof value !== 'object' && value !== null) {
            ans[key] = value;
        } 

        else if (Array.isArray(value)) {
            value.forEach((item, index) => {
                if (typeof item === 'object' && item !== null) {
                    for (let itemKey in item) {
                        let newKey = `${key}.${index}.${itemKey}`;
                        ans[newKey] = item[itemKey];
                    }
                }
            });
        } 
        else if (typeof value === 'object' && value !== null) {
            for (let nestedKey in value) {
                let newKey = `${key}.${nestedKey}`;
                ans[newKey] = value[nestedKey];
            }
        }
    }

    return ans;
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

console.log(flattend(nestedJson));
