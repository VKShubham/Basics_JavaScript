function merge(obj1, obj2) {
    const result = {};

    for (let key in obj1) {
        if (obj1.hasOwnProperty(key)) {
            if (obj2.hasOwnProperty(key) && typeof obj1[key] === 'object' && typeof obj2[key] === 'object') {
                result[key] = merge(obj1[key], obj2[key]);
                console.log(result[key]);
            } else {
                
                result[key] = obj1[key];
            }
        }
    }

    for (let key in obj2) {
        if (obj2.hasOwnProperty(key) && !result.hasOwnProperty(key)) {
            console.log(obj2[key])
            result[key] = obj2[key];
        }
    }

    return result;
}

console.log(merge({ a: { b: { c: 1 } } }, { a: { b: { d: 2 } }, e: 3 }));
