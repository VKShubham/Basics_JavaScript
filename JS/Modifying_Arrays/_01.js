function removeDuplicates(arr, key) {
    const map = new Map();

    for(let obj of arr) {
        map.set(obj[key],1);
        }
    
    let ans = []
    for(let obj of arr) {
        if(map.get(obj[key]) === 1) {
            ans.push(obj);
            map.set(obj[key],0);
        }
    }
    return ans;
}

const arr = [{id:1, name:'John'}, 
            {id:1, name:'Jane'},
            {id:2, name:'John'}
        ]
console.log(removeDuplicates(arr, 'id'));
    