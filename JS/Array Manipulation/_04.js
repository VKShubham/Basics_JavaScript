function createtwodimMatrix(row,col,arr) {
    if(row + col < arr.length) {
        return "Conversion not Possible";
    }

    let index = 0;
    let ans = [];
    for(let i=0; i<col; i++) {
        let temp = []
        for(let j=0; j<row; j++) {
            if(index > arr.length - 1) {
                temp.push(0);
            }
            else {
                temp.push(arr[index++]);
            }
        }
        ans.push(temp);
    }
    return ans;
}

arr = [1,2,3,4,5]
console.log(createtwodimMatrix(3,2,arr));
