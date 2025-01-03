function noOfUniquewords(str) {
    str = str.split(' ').join('');
    const map = new Map();
    for(character of str){
        if(map.has(character)) {
            map.set(character,map.get(character)+1)
        }
        else{
            map.set(character,1);
        }
    }

    wordCount = 0;
    uniquewords = []
    map.forEach((value,key) => {
        if(value == 1) {
            wordCount += 1
            uniquewords.push(key)
        }
    })
    return [wordCount, uniquewords];
}

str = "apple banana cherry"
console.log("Total Unique Words are :- ",noOfUniquewords(str)[0]);
console.log("Unique Words are :- ",noOfUniquewords(str)[1]);

