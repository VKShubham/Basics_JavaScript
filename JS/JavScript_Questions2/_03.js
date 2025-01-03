function collapsedString(str) {
    ans = '';
    for(let i=0; i<str.length; i++) {
        if(i > 0) {
            if(ans[ans.length - 1] !== str.charAt(i)) {
                ans += str.charAt(i);
            }
        }
        else {
            ans += str.charAt(i);
        }
    }
    return ans;
}
console.log(collapsedString("sssshubbbhammmm"));
