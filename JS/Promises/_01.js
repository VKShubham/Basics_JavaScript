const callapis = async (arr) => {
    let promises = arr.map(async (link) => {
    const starttime = Date.now();
    try {
        const data = await fetch(link);
    }
    catch {
        return -1;
    }
    const endtime = Date.now();
    return endtime - starttime
    });
    return Promise.all(promises);
};

const data = await callapis( ["https://example.com","https://example2.com"]);
console.log(data);
