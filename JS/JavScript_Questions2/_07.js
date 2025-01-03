function deppestValue(obj) {
    let max = 0;
    let ans = '';

    function deppest(obj, depth) {
        for(let key in obj) {
            if(typeof obj[key] === 'object' && obj[key] !== null) {
                deppest(obj[key],depth+1);
            }
            else {
                if(max < depth) {
                    max = depth;
                    ans = obj[key];
                }
            }
        }
    }
    deppest(obj, 0);
    return ans;

}

const obj = {
    "a": {
        "b": {
            "c": {
                "d": "hello"
                }
            }
        }
}
console.log(deppestValue(obj));