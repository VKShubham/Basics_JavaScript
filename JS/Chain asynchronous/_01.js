const arr = [
    "https://jsonplaceholder.typicode.com/todos/1",
    "https://jsonplaceholder.typicode.com/albums/10",
    "https://jsonplaceholder.typicode.com/users/2"
];

for (let url of arr) {
    try {
        const res = await fetch(url);
        if(res.ok) {
            const data = await res.json();
            console.log(data);
        }
        else {
            console.log("Some Error Occured");
        }
    }
    catch(error) {
        console.log("Error :- ",error.message);
    }
}