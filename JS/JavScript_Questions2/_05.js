function sortedobjects(arr) {
    return arr.sort((a,b) => b.income - a.income)
}

arr = [
    { "name": "ABC", "age": 20, "income": 25000 },
    { "name": "John", "age": 25, "income": 30000 },
    { "name": "Alice", "age": 30, "income": 35000 },
    { "name": "Bob", "age": 28, "income": 40000 },
    { "name": "Charlie", "age": 22, "income": 22000 },
    { "name": "David", "age": 26, "income": 27000 },
    { "name": "Emma", "age": 24, "income": 29000 },
    { "name": "Frank", "age": 27, "income": 31000 },
    { "name": "Grace", "age": 29, "income": 33000 },
    { "name": "Hannah", "age": 23, "income": 28000 },
    { "name": "Ivy", "age": 32, "income": 40000 },
    { "name": "Jack", "age": 21, "income": 26000 },
    { "name": "Kevin", "age": 33, "income": 45000 },
    { "name": "Lily", "age": 19, "income": 24000 },
    { "name": "Mia", "age": 31, "income": 39000 },
    { "name": "Nina", "age": 23, "income": 32000 },
    { "name": "Oliver", "age": 28, "income": 37000 },
    { "name": "Paul", "age": 24, "income": 28000 },
    { "name": "Quincy", "age": 30, "income": 42000 }
]

console.log(sortedobjects(arr));


/* 
    Other idea is that has we create previosuly 

    """
    Write a function that takes in an array of objects and returns an array of objects with
    a specific key-value pair. For example, given the array [{name: "Alice", age: 30},
    {name: "Bob", age: 40}, {name: "Eve", age: 35}] and the key-value pair {age: 35}, the
    function should return [{name: "Eve", age: 35}]
    """


    first we take an array of salary sort it and then we can apply this function to get
    whole object and we can add in our answer
*/