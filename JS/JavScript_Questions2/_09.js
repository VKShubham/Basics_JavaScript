function convertinArray(obj) {
    for(let key in obj) {
        const value = obj[key];
        console.log(value,'\n');
       if(typeof value === 'object') {
        obj[key] = convertinArray(value);
        obj[key] = [value]
       }
       else {       
        obj[key] = [value];
       }
        
    }
    return obj;
}

const obj = {
    "a": {
    "b": {
    "c": {
    "d": "hello",
    "e": "world"
    },
    "f": "foo"
    },
    "g": "bar"
    }
}

console.log(JSON.stringify(convertinArray(obj), null, 2));