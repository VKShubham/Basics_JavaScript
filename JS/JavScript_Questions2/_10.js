function traverse(tree) {
    let sum = 0;

    function travel(obj) {
        for(let key in obj) {
            const value = obj[key];

            if(typeof value === 'number') {
                sum += value;
            }
            else if(Array.isArray(value)) {
                value.map((element) => {
                    if(typeof element === 'number') {
                        sum += value;
                    }
                    else {
                        travel(element);
                    }
                })
            }
            else {
                travel(value);
            }
        } 
    }
    travel(tree);
    return sum;
 }

const tree = {
    value: 10,
    children: [
    { value: 5, children: [] },
    { value: 15, children: [{ value: 8 }] }
    ]
};

const totalsum = traverse(tree)
console.log("Total Sum :- ",totalsum);
