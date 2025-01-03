function merge(arr1,arr2) {
    const flattend1 = arr1.flat();
    const flattend2 = arr2.flat();

    let result = [];

    for(let obj of flattend1) {
        const id = obj.hasOwnProperty('id') && obj['id'];

        for(let obj1 of flattend2) {
            const newid = obj.hasOwnProperty('id') && obj1['id'];

            if(id === newid) {
                const ansobj = {...obj,...obj1};
                result.push(ansobj);
            }
        }
    }

    for(let obj of flattend1) {
        let flag = false;
        for(let obj1 of result) {
            if(obj.id === obj1.id) flag = true;
        }
        if(!flag) {
            result.push(obj);
        }
    }

    for(let obj of flattend2) {
        let flag = false;
        for(let obj1 of result) {
            if(obj.id === obj1.id) flag = true;
        }
        if(!flag) {
            result.push(obj);
        }
    }
    return result;
}


let array1 = [
[{ id: 1, name: "John" }, { id: 2, name: "Jane" }],
[{ id: 3, name: "Bob" }]
];
let array2 = [
[{ id: 2, city: "London" }, { id: 4, city: "Paris" }],
[{ id: 3, city: "New York" }]
];
console.log(merge(array1,array2));
