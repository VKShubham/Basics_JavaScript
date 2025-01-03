const async_hooks = require('async_hooks');

// Create an AsyncHook instance
const hook = async_hooks.createHook({
    init(asyncId, type, triggerAsyncId, resource) {
        console.log(`Async Operation Created: AsyncId: ${asyncId}, Type: ${type}`);
    },
    before(asyncId) {
        console.log(`Before Async Operation: AsyncId: ${asyncId}`);
    },
    after(asyncId) {
        console.log(`After Async Operation: AsyncId: ${asyncId}`);
    },
    destroy(asyncId) {
        console.log(`Async Operation Destroyed: AsyncId: ${asyncId}`);
    }
});

// Enable the async hooks to start tracking async operations
hook.enable();

async function abc(link, fun) {
    console.log('Start fetching data...');
    const res = await fetch(link);
    if (res.ok) {
        try {
            const data = await res.json();
            fun(data);
        } catch (error) {
            console.log("Error :- ", error.message);
        }
    } else {
        console.log("Some Error Occurred");
    }
}

function fun(result) {
    console.log(result);
}

let link = "https://jsonplaceholder.typicode.com/todos/1";
abc(link, fun);
