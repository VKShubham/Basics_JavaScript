fetch('https://jsonplaceholder.typicode.com/todos/1')
.then( (respone) => {
    return respone.json()
})
.then( (data) => {
    console.log(data);
})
.catch( (error) => {
    console.log(error);
})

// second way

async function getdata(){
    const respone = await fetch('https://jsonplaceholder.typicode.com/todos/1')
    const data = await respone.json() // we need to put the await here because when parse any document into a JSON it takes time so we need to provide asyncroanus enviorment.
    console.log(data);
}
getdata()