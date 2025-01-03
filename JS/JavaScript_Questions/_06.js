function filterAge(arr) {
    return arr.filter(obj => obj.age > 18);
}

persons = [
    {
        name :'Shubham',
        age : 20,
        gender: 'Male'
    },
    {
        name :'Meet',
        age : 13,
        gender: 'Male'
    },
    {
        name :'Shrut',
        age : 4,
        gender: 'Male'
    },
    {
        name :'Kesar',
        age : 22,
        gender: 'Female'
    },
];

console.log("persons whose age is greater than 18 :- ",filterAge(persons));
