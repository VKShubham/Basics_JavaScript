function longestcommonprefix(arr) {
    ans = '';

    let minLength = arr[0].length;
    for(str of arr) {
        if(str.length < minLength) {
            minLength = str.length;
        }
    }

    for(let i=0; i<minLength; i++) {
        const matchingCharacter = arr[0][i];
        for(str of arr) {
            if(str[i] !== matchingCharacter) {
                return ans;
            }
        }
        ans += matchingCharacter;
    }
}

arr = ["apple", "app", "apricot"];
console.log(longestcommonprefix(arr));
