const arr = [
    "https://jsonplaceholder.typicode.com/todos/1",
    "https://jsonplaceholder.typicode.com/albums/10",
    "https://example2.com",
    "https://jsonplaceholder.typicode.com/users/2"
];

try {
    for(let link of arr) {
        const res = await fetch(link);
        if(res.ok) {
            const data = await res.json();
            console.log(data);
        }
        else {
            console.log("Some Error Occured");
            break;
        }
    } 
}
catch(error) {
    console.log("Error :- ",error.message);
}