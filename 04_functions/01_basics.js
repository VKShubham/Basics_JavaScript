// function sayMyName(name){
//     console.log(`Heelo ${name} To World`);
// }

// sayMyName("Shubham")

// function sayMyName(name = "User"){
//     console.log(`Heelo ${name} To World`);
// }

// sayMyName()

// function addTwoNumber(number1, number2){
//     return number1 + number2;
// }

// console.log(addTwoNumber(2,4));

// function Addcart(...item1){
//     return item1
// }

// console.log(Addcart(100,200,300,400)); // output : [ 100, 200, 300, 400 ]

// function Addcart(val2, val1, ...item1){
//         return item1
//     }
    
//     console.log(Addcart(100,200,300,400)); // output : [ 300, 400 ]

// twoadd(3) but in  this case it gives an erroe we can't call before intilaize if we declare like this in a variable

const twoadd = function(num){
        return num + 2;
}
twoadd(3); // It is Ok It Worked 