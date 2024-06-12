const jsUSer = {
    name : "Shubham",
    "age now" : 18,
    location : "India",
    isLoggedIn : false
}

console.log(jsUSer.name);
console.log(jsUSer["age now"]);

// to access symbol in a object we need to use [] brackets

Object.freeze(jsUSer) // it locks the object it can't modify further

// Nesting Objects are also Allowed