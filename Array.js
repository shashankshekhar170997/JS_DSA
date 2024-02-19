let arr = [];
let arr1 = new Array();

console.log(arr, arr1);

let array = [1, 2, 3, 4, "Shashank", { name: "S Shekhar" }, [9, 8, 7]];

console.log(array);

// access first and last element

const first = array[0]; //O(1)
console.log(first);

const last = array.length;
console.log(last);
const lastelm = array[last - 1];
console.log(lastelm);

// delete last elm
const popEle = array.pop(); // O(1)
console.log(array);
console.log(popEle);
// add elm in the end of the array.
array.push(17); // O(1)
console.log(array);
// add elem in start

array.unshift(120); // O(N)
console.log(array);

// delete elm from start

array.shift(); // O(N)
console.log(array);

// loop in Array
// for (let i = 0; i < array.length; i++) {
//   console.log(array[i]);
// }

// array.forEach((arr, i) => {
//   console.log(array[i]);
// });

// for (let x of array) {
//   console.log(x);
// }

// check if element is present in array or not

function findElm(array, target) {
  for (let x of array) {
    if (x === target) {
      return true;
    }
  }
  return false;
}
console.log(findElm(array, "Shashank"));
// inbuilt method
console.log(array.includes("Shashank"));

// Find the Index

const findIndex = (array, target) => {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === target) {
      return i;
    }
  }
  return -1;
};
console.log(findIndex(array, "Shashank"));
// inbuild method
console.log(array.indexOf("Shashank"));

// add, delete and Update
// splice include the last element
array.splice(1, 3);
console.log(array);
// add elem from index 1 and here 0 means not delete any elem
array.splice(1, 0, 11, 22, 33, 44, 55);
console.log(array);
// update - from 1st index delete 3 elem and add
array.splice(1, 3, 99, 100, 110);

// slice - which does not manipulate the original array and even does not include the last index.And it return the subarray.
console.log(array.slice(1, 4));
console.log(array);

//Shallow Copy of an array.
const arr2 = array;
arr2.splice(1, 4);
console.log(arr2);
console.log(array);
// here arr2 and array both will get manipulate bcoz both are pointing to the same reference(or same memory location).

// Deep copy of an array.
const arr3 = [...array];
arr3.splice(1, 3);
console.log(arr3);
console.log(array);

let arrC = Array.from(array);
console.log(arrC);
arrC.splice(1, 3);
console.log(arrC);

// add 2 array.
const a = [1, 2, 3];
const b = [4, 5, 6];
// using spread
const res = [...a, ...b];
console.log(res);
// using concat
console.log(a.concat(b));

// check the both arrays are equal or not.
const isArrayEqual = (arr, arr1) => {
  if (arr.length !== arr1.length) {
    return false;
  }
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== arr1[i]) {
      return false;
    }
  }
  return true;
};
console.log(isArrayEqual([1, 2, 3], [1, 2, 3]));
