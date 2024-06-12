const map = new Map()
map.set('GJ5',"SURAT")
map.set('GJ23',"ANAND")
map.set('GJ4',"BARODA")

// console.log(map);

// for (const [key,val] of map) {
//     console.log(key,":-",val);
// }

// for iterating objects

const myObj = {
    name : "Shubham",
    age : 18
}

//for in loop

for (const key in myObj) {
    console.log(myObj[key]);
}