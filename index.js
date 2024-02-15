//1. Find Sum of natural Number

function sumOfNaturalNum(num) {
  //   let sum = 0;
  //   for (let i = 1; i <= num; i++) {
  //     sum += i;
  //   }
  //   return sum;
  return (num * (num + 1)) / 2;
}

// console.log(sumOfNaturalNum(10));
// console.log(sumOfNaturalNum(12));

//2. Sum of digits of a number

function SumOfDigits(num) {
  let sum = 0;
  while (num > 0) {
    sum += num % 10;
    num = Math.floor(num / 10);
  }
  return sum;
}
// console.log(SumOfDigits(1237));

// 3. count the number of digits of a number.

function countDigits(num) {
  num = Math.abs(num);
  let count = 0;
  do {
    count++;
    num = Math.floor(num / 10);
  } while (num > 0);
  return count;
}
// console.log(countDigits(12345));

function revNum(n) {
  let res =
    parseFloat(n.toString().split("").reverse().join("")) * Math.sign(n);
  if (res == n) {
    console.log("Palindrom");
  } else {
    console.log("Not palindrom");
  }
}
// console.log(revNum(-121));

// missing num
function missingNum(nums) {
  let arrNum = [];
  let minNum = Math.min(...nums);
  let maxNum = Math.max(...nums);
  for (let i = minNum; i < maxNum; i++) {
    if (nums.indexOf(i) < 0) {
      arrNum.push(i);
    }
  }
  return arrNum;
}
console.log(missingNum([1, 3, 5]));
// SUm of array.
function sumOfArr(nums) {
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    sum = sum + nums[i];
  }
  return sum;
}
console.log(sumOfArr([1, 2, 3, 4, 5]));
