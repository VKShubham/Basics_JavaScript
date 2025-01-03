const arr = [
    ["https://jsonplaceholder.typicode.com/todos/1", 1],
    ["https://example2.com", 3],
    ["https://jsonplaceholder.typicode.com/users/2", 1]
];

try {
    for(let link of arr) {
        console.log(`\nCall :- ${link[0]}`);
        let tries = 1;
        try {
            const res = await fetch(link[0]);
            if(res.ok) {
                const data = await res.json();
                console.log(`called succesfully in ${tries} time`);
                console.log(data);
            }
            else {
                while(tries <= link[1]) {
                    console.log('Retrying....');
                    const res = await fetch(link[0]);
                    if(res.ok) {
                        const data = await res.json();
                        console.log(`called succesfully in ${tries} time`);
                        console.log(data);
                    }
                    else {
                        tries += 1;
                    }       
                }
            }
        } catch (error) {
            console.log("Error :- ",error.message);
        }
    }
} catch (error) {
    console.log("Error :- ",error.message);
    
}