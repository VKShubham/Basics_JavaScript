const first = async(arr) => {
const data = await Promise.race(arr)
    .then(res => res)
    .catch(err => err.message);
return data;
}

const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('foo');
    }, 0);
  });

const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('bar');
    }, 800);
});

const promise = [promise1, promise2, Promise.reject(Error('Falied'))];
const data = await first(promise); 
console.log(data);
