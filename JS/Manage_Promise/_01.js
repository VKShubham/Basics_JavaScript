async function slove(arr) {
    const safeArr = arr.map(p => p.catch(err => err));
    console.log(safeArr);
    
    const result = Promise.race([Promise.all(safeArr), time()])
        .then(res => res)
        .catch(err => err);
    return result;
}

async function time() {
   return new Promise((_,reject) => {
        setTimeout(() => {
            reject("Time Exceeded")
        },10000)
   })
}

const arr = [
    new Promise((resolve,rejects) => resolve(9)),
    new Promise((resolve,rejects) => resolve(12)),
    new Promise((resolve,rejects) => {
        setTimeout(() => {
            resolve(13)
        },11000)
    }),
]
const arr1 = [
    new Promise((resolve,rejects) => resolve(9)),
    new Promise((resolve,rejects) => resolve(12)),
    new Promise((resolve,rejects) => resolve(13)),
]
const arr2 = [
    new Promise((resolve,rejects) => resolve(9)),
    new Promise((resolve,rejects) => resolve(12)),
    new Promise((resolve,rejects) => rejects("Rejected")),
]

try {
    const data = await slove(arr2);
    console.log(data);
}
catch(error) {
    console.log("Error :- ",error);
}

