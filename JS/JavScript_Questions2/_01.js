function keyValuepair(arr,pair) {
    let [key,value] = pair.substring(1,pair.length - 1).split(':')
    value = Number(value);
    for(obj of arr) {
        if(obj.hasOwnProperty(key)) {
            if(obj[key] === value) {
                return obj;
            }
        }
    }
    return "Not Exist"
}

arr = [{name: "Alice", age: 30},
        {name: "Bob", age: 40},
        {name: "Eve", age: 35}];
console.log(keyValuepair(arr,'{age:40}'));

