const getdata = async(arr) => {
    const promises = arr.map(async (link) => {
        try {
            const res = await fetch(link);
            console.log(res);
            
            if (res.ok) {
                const data = await res.json();
                return { data };
            } else {
                return {};
            }
        } catch (err) {
            return {};
        }
    });
    const data = Promise.all(promises);
    return data;
}

const data = await getdata(["https://jsonplaceholder.typicode.com/todos/1","https://example2.com"]);
console.log(data);
