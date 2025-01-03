const arr = [
    ["https://jsonplaceholder.typicode.com/todos/1", 10000],
    ["https://jsonplaceholder.typicode.com/albums", 1],
    ["https://jsonplaceholder.typicode.com/users/2", 10000]
];

try {
    for (let link of arr) {
        try {
            const data = await Promise.race([fetchapi(link[0]), timeout(link[1])]);
            console.log(data);
        }
        catch(error) {
            console.log("Error :- ",error.message);
        }
    }
} catch (error) {
    console.log("Error :- ", error.message);
}

async function fetchapi(url) {
    try {
        const res = await fetch(url);
        if (res.ok) {
            const data = await res.json();
            clearTimeout();
            return Promise.resolve(data);
        } else {
            throw new Error("Some Error Occurred");
        }
    } catch (error) {
        console.log("Error :- ", error.message);
        throw error;
    }
}

function timeout(ms) {
    return new Promise((_, reject) => setTimeout(() => reject(new Error("Time Exceeded")), ms));
}
