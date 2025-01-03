async function time(ms, func) {
    try {
        return await func(ms*1000);
    }
    catch (error) {
        return  Promise.reject("Error Occured" + error.message);
    }   
}

async function func(ms) {
    const promise = new Promise((reslove,reject) => {
        setTimeout(() => {
            reslove("Hello World");
        },ms)
    });
    return promise;
}
try {
    const data = await time(2,func);
    console.log(data);
}
catch (error) {
    console.log("Error :- "+error.message);
    
}
