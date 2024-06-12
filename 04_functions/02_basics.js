// THIS KEYWOED

function chai(){
    let username = "Shubham"
    console.log(this.username); // we cant use like this keywoed in function we can use this only in a object
}

// Arrow Function

const chai = (username) => {
    console.log(username); 
}

// Implicit returned Arrow Function

const addTwo = (num1,num2) => num1 + num2;
console.log(addTwo(2,3));

// to returned object


const returnobject = (num1,num2) => ({name : "shubham"})
console.log(addTwo(2,3));