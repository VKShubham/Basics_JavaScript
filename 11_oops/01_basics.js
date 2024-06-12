function person(username, age){
    this.username = username;
    this.age = age;
}

let firstperson = new person('vanani', 19)
let secondperson = new person('Golkiya', 20)

console.log(firstperson);
console.log(secondperson);

// it is called a function constructor

// if here we don't use the keyword a new then it will override the existing value 0f an function new keyword uses or we can say it creates a new context in doxument