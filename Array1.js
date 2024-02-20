function isArrayEqual(arr, arr1) {
  return (
    arr.length === arr1.length && arr.every((elm, i) => arr[i] === arr1[i])
  );
}
console.log(isArrayEqual([1, 2, 3], [1, 3]));

// Q1 - how to sort an array in ascending and desending order?

const x = [1, 3, 5, 7, 9, -1, -3];
console.log(x.sort());
// decending order
console.log(x.sort((a, b) => b - a));

// reverse an array
console.log(x.reverse());

// Map - which take an callback function and execute each element of the array.

const employees = [
  { name: "shashank", age: 28 },
  { name: "Shekhar", age: 27 },
  { name: "Siddharth sukla", age: 40 },
];
const name = employees.map((emp) => {
  return emp.name;
});

console.log(name);

// filter - filter method is use to filter elements of the array. it takes a callback function & execute it each element of the array to check the condition.

const products = [
  { name: "iphone", price: 999, inStock: true },
  { name: "iphone12", price: 999, inStock: false },
  { name: "iphone14", price: 999, inStock: true },
];

const availableProd = products.filter((prod) => prod.inStock);
console.log(availableProd);

// reduce

const order = [
  { product: "iphone", price: 999, quantity: 2 },
  { product: "iphone12", price: 999, quantity: 1 },
  { product: "iphone15", price: 999, quantity: 2 },
];
const amount = order.reduce((acc, ordr) => {
  return acc + order.price * order.quantity;
}, 0);
console.log(amount);
