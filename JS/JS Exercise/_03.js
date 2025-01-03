function targetsum(arr, target) {
    let ans ={};
    const set = new Set();

    arr.map(element => set.add(element));

    for(let num of arr) {
        let remain = target - num;
        if(set.has(remain)) {
            const key = `${num}+${remain}`;
            const value = [[num,remain]];
            if(!ans[key.split('').reverse().join('')]) {
                ans[key] = value;
            }
        }
    }
    return ans;
}

let arr = [1,2,3,4,5,6];
console.log(targetsum(arr, 7));
