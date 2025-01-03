async function optimizePerformance(arr, n) {
    let executing = []
    let result = []
    for(let promise of arr) {
        const p = promise.then(res => {
            result.push(res);
        })
        .catch(err => {
            result.push(err);
        }) 
        executing.push(p);
        if(executing.length > n) {
            const sloved = await Promise.race(executing);
            executing.splice(executing.findIndex(p => p === sloved), 1);
        }
    }
    await Promise.all(executing);
    return result;
}

const promise1 = new Promise((reslove,reject) => reslove(2));
const promise2 = new Promise((reslove,reject) => reslove(32));
const promise3 = new Promise((reslove,reject) => reslove(12));
const promise4 = new Promise((reslove,reject) => setTimeout(() => reslove(43),20000));
const promise5 = new Promise((reslove,reject) => setTimeout(() => reslove(44),10000));
const promise6 = new Promise((reslove,reject) => setTimeout(() => reslove(45),400));
const data = await optimizePerformance([promise4,promise5,promise6],2)
console.log(data);