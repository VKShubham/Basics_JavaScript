function findoccurance(str) {
    str = str.split(' ').join('');
    const map = new Map();
    for(character of str){
        if(map.has(character)) {
            map.set(character,map.get(character)+1)
        }
        else{
            map.set(character,1);
        }
    }
    let ans = []
    map.forEach((value,key) => {
        ans.push(`${key} => ${value}`);
    })
    return ans;
}

const str = "apple banana cherry"
console.log(findoccurance(str));
