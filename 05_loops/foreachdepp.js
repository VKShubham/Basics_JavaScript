// const arr = [1,2,3,4,5,6,7,8,9,10]

// const newnums = arr.filter( (val) => val > 4)
// console.log(newnums);

// foreach are not returning anything so for that reason here we use a fliter function which returns a value accorfing to function  


// const books = [
//     { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
//     { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
//     { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
//     { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
//     { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
//     { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
//     { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
//     { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
//     { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
//   ];

//   let mybooks = books.filter( (book) => book.genre === 'Science' && book.publish >= 2000)
//   console.log(mybooks);

// const chaining = arr.map( (num) => num * 10)
//                     .map( (num) => num + 1)
//                     .filter( (num) => num > 50)
// console.log(chaining);


// const my = [1,2,3]
// const total = my.reduce( (acc, curren) =>{
//   return acc + curren;
// },0)
// console.log(total);


// const shoppingCart = [
//   {
//       itemName: "js course",
//       price: 2999
//   },
//   {
//       itemName: "py course",
//       price: 999
//   },
//   {
//       itemName: "mobile dev course",
//       price: 5999
//   },
//   {
//       itemName: "data science course",
//       price: 12999
//   },
// ]

// let shoppingtotal = shoppingCart.reduce( (currenttotal,item) => item.price + currenttotal, 0)
// console.log(shoppingtotal);