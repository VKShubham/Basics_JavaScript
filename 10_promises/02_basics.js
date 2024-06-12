let fourthPromise = new Promise( (reslove, reject) => {
    let error = true;
    if(!error){
        reslove({name : 'Shubham vanani', age : 15})
    }else{
        reject('ERROR : Something went Wrong')
    }
 })

 // we can use async keyword and await keyword which exactly works like a then() keyword

 async function consumepromise() {
    try{
        const obj = await fourthPromise // it will assigns the object when the reslove will be called in the promise (await says to wait until the reslove called)
        console.log(obj);
    }catch (error){
        console.log(error);
    }
 }

 consumepromise()