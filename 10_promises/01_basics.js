const firstPromise = new Promise( (reslove, reject) => {
    setTimeout(() => {
        console.log('task intiated');
        reslove()
    },1000)
})

firstPromise.then( () => {
    console.log('Task are Resloved');
})

// second promise where we can pass the objects
const secondPromise = new Promise( (reslove, reject) => {
    setTimeout(() => {
        let name = 'shubham'
        reslove(name,{
            email : 'shubhamvanani@gmail.com',
            password : 'Shubham@2475'
        }) // here we can pass the value which ever which we want to get in then method of the promise
    },1000)
})

secondPromise.then( (name, obj) => {
    console.log("Name : ",name);
    console.log(obj);// it says undefined because we cant pass two object at that time 
})

// thired promise where we catchc the error also and we see how the chaning will be worked in a then()

 let fourthPromise = new Promise( (reslove, reject) => {
    let error = true;
    if(!error){
        reslove({name : 'Shubham vanani', age : 15})
    }else{
        reject('ERROR : Something went Wrong')
    }
 })

 fourthPromise
 .then( (obj) => {
    console.log(obj);
    return obj.name;
 })
 .then( (name) => console.log('Your Name is ',name))
 .catch( (error) => console.log(error))

 