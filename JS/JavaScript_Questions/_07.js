function avarageprice(arr) {
    filterdata = arr.filter(obj => obj.price);
    
    totalPrice = filterdata.reduce((acc, current) => acc + current.price, 0);
    return [(totalPrice / filterdata.length),filterdata]
}

arr = [ { id: 1, name: "Product A", price: 50 },
    { id: 2, name: "Product B", price: 30 },
    { id: 3, name: "Product C", price: 20 },
    { id: 4, name: "Product D", price: 40 },
    { id: 5, name: "Product E"},
    { id: 6, name: "Product F   "}
]

console.log("Products Are who had a Price :- ",avarageprice(arr)[1]);
console.log("Avarage Price of all Products:- ",avarageprice(arr)[0]);


