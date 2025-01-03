// function mergeTwoArray(arr1,arr2) {
//     let i = 0;
//     let j = 0;

//     let ans = []

//     while(i < arr1.length - 1 && j < arr2.length - 1) {
//         if(arr1[i] == arr2[j]) {
//             ans.push(arr1[i]);
//             i++;
//             j++;
//         }
//         if(arr1[i] < arr2[j]) {
//             ans.push(arr1[i]);
//             i++;
//         }
//         else {
//             ans.push(arr2[j]);
//             j++;
//         }
//     }

//     while(i < arr1.length) {
//         ans.push(arr1[i])
//         i++;
//     }

//     while(j < arr2.length) {
//         ans.push(arr2[j])
//         j++;
//     }
//     return ans;
// }

function mergeTwoArray(arr1,arr2) {
    let ans = [...arr1,...arr2];
    ans = [...new Set(ans)].sort((a,b) => a - b);
    return ans;
}

arr1 = [1, 3, 5, 7, 9];
arr2 = [2, 3, 6, 8, 9, 10];

console.log(mergeTwoArray(arr1,arr2));
