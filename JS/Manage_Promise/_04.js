const cache = new Map();

async function optimizecall(arr) {
    let result = [];
    for(let url of arr) {
        if(cache.has(url[0])) {
            result.push(cache.get(url[0]));
        }
        else {
            try {
                if(apimap.get(url[0]) > 0) {
                    const startTime = Date.now();
                    const res = await fetch(url[0]);
                    apimap.set(url[0],apimap.get(url[0]) - 1);
                    const endTime = Date.now();
                    if(res.ok) {
                        const data = await res.json();
                        result.push({...data,time: endTime - startTime, });
                        cache.set(url[0],data);
                    }
                    else {
                        console.log("Some Error Occured");
                    }
                }
                else {
                    result.push(`for ${url[0]} Try After Some Time`);
                }
            }
            catch(error) {
                console.log("Error :- ",error);
            } 
        }
    }
    return result;
}

const apis = [
    ["https://jsonplaceholder.typicode.com/users/2",1],
    ["https://jsonplaceholder.typicode.com/users/3",1],
    ["https://jsonplaceholder.typicode.com/users/4",1],
    ["https://jsonplaceholder.typicode.com/users",1],
    ["https://jsonplaceholder.typicode.com/users/2",1]
]
const apimap = new Map();
apis.map(api => {
    apimap.set(api[0],api[1])
});
console.log(apimap);
const arr = await optimizecall(apis);
console.log(apimap);
console.log(arr);
