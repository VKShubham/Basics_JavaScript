async function HTTP(arr) {
    const calls = arr.map(async(url) => {
        try {
            const res = await fetch(url);
            if(res.ok) {
                const data = await res.json();
                return data;
            }
            else {
                return {};
            }
        }
        catch (error) {
            return {error : `Error :- ${error.message}`};
        } 
    })
    const data = Promise.all(calls);
    return data;
}

const data = await HTTP(["https://jsonplaceholder.typicode.com/todos/1","https://example2.com"]);
console.log(data);