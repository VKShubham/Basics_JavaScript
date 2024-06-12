//unnamed IIFE
((name) => {
    console.log(name);
})("Shubham");

//named IIFE
(function (name){
    console.log(name);
})("Shubham")

// IIFE Required it protect froma global pollution

// IF we Need TO Write two IIFE in one program we need to terminate IIFE With Semicolon