async function counts(arr) {
    let results = []
    let error = []

    for(let promise of arr) {
        await promise.then(res => {
            results.push(res);
        })     
        .catch(err => {
            error.push(err)
        });
    }
    const ans = {};
    ans['resolved'] = results;
    ans['rejected'] = error;
    return ans;
}

const data = await counts([Promise.resolve('response 1'), Promise.reject('error1'), Promise.reject('error 2')]);
console.log(data);
