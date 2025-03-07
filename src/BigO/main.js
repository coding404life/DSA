const nemo = new Array(100000).fill("nemo");

const findNemo = (array) => {
  let t0 = performance.now();
  for (let i = 0; i < array.length; i++) {
    console.log(i);
    if (array[i] === "nemo") {
      console.log("found");
    }
  }
  let t1 = performance.now();
  console.log(t1 - t0);
};

// findNemo(nemo); O(n)

function compressBoxTwice(array, array2) {
  array.forEach((item) => {
    console.log(item);
  });

  array2.forEach((item) => {
    console.log(item);
  });
}
// // different inputs should have different outputs
// // O(a + b)

function compressBoxesTwice(array) {
  for (const element of array) {
    for (const item of array) {
      console.log(element, item);
    }
  }

  for (let i = 0; i < array.length - 1; i++) {
    console.log(array[i], array[i + 1]); // O(n) - single loop
  }
}

// const fishs = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// compressBoxesTwice(fishs);
//O(n * n ) => O(n^2) n to the power of 2

const arrayOfHi = (n) => {
  const hiArray = [];
  for (let i = 0; i < n; i++) {
    hiArray[i] = "hi";
  }
  console.log(hiArray);
  return hiArray;
}; // the space complexity O(n) the time complexity O(n)

arrayOfHi(20);

let calculate = function calculate(a, o, b) {
  if (o === "+") {
    return a + b;
  } else if (o === "-") {
    return a - b;
  } else if (o === "*") {
    return a * b;
  } else if (o === "/" && b !== 0) {
    return a / b;
  } else {
    return null;
  }
};
console.log(4 / 0);
console.log(calculate(2, "+", 4));
console.log(calculate(6, "-", 1.5)); //Should return 4.5
console.log(calculate(-4, "*", 8)); //Should return -32
console.log(calculate(49, "/", -7)); //Should return -7
console.log(calculate(8, "m", 2)); //Should return null
console.log(calculate(4, "/", 0)); //should return null)

function multi(arr) {
  let result = 1;
  arr.forEach((item) => (result *= item));
  return result;
}

function add(arr) {
  let result = 0;
  arr.forEach((item) => (result = result + item));
  return result;
}
function reverse(str) {
  return str.split("").reverse().join("");
}

console.log(multi([8, 2, 5]));
console.log(add([1, 15, 3]));
console.log(add([7, 8, 6, 5, 4, 9]));
console.log(reverse("Hello Word"));

const twoSum = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
  return []; // If no solution found
};

console.log(twoSum([2, 5, 11, 5], 10));

// first and second then second and third then third and forth number
/*
  nums[0] + nums[0 + 1] = index [0,1]
  nums[1] + nums[1 + 1] = index [1,2]
  nums[2] + nums[2 + 1] = index [2,3]
  nums[3] + nums[3 + 4] = index [3,4] we don't have index 4?
*/

function addNumbers(sizeA, arrA, sizeB, arrB) {
  // Write your code here
  let result = [];
  for (let i = 0; i < sizeA; i++) {
    for (let j = 0; j < sizeB; j++) {
      result.push(arrA[i] + arrB[j]);
    }
  }
  return result;
}

addNumbers(3, [1, 2, 3], 3, [3, 4, 5]);
console.log(addNumbers(3, [1, 2, 3], 3, [3, 4, 5]));

// // create a 2 sum function

function isPangram(string) {
  const arrofChar = string.split("");
  const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");

  const filteredArray = arrofChar.filter((letter) => letter === alphabet);
  console.log(alphabet);
  console.log(arrofChar);
}

isPangram("The quick brown fox jumps over the lazy dog");

const containCommonItems = (arr1, arr2) => {
  for (let item of arr1) {
    console.log(arr2.includes(item), item);
    if (arr2.includes(item)) {
      return true;
    }
  }

  return false;
};
// O(n * m) time complexity => because we are having nested loops
// O(1) space complexity => why because we did not create any variable to allocate into memory

const containCommonItems2 = (arr1, arr2) =>
  arr1.some((item) => arr2.includes(item));
// O(n * m) because we are having nested loops some is looping on array1, and includes looping over array2 for each element
// O(1) space complexity => why because we did not create any variable to allocate into memory

const array1 = ["y", "s", "f", "a"];
const array2 = ["a", "b", "c", "d", "e"];

const convertArrayIntoObjectProperties = (arr) => {
  let map = {};
  for (let item of arr) {
    if (!map[item]) map[item] = true;
  }

  return map
}

function containCommonItems3(arr1, arr2) {
  /*
  - loop through first array and create object where properties === items in the array
  - loop through the second array and check if item in the second array exist on created object
  - inputs: are 2 arrays
  - output: is boolean
  - can we assume always 2 params
  - what is the main goal space or time complexity
*/

  const map =  convertArrayIntoObjectProperties(arr1)

  for (let item of arr2) {
    if (map[item]) {
      return true;
    }
  }

  return false;
}

console.log(containCommonItems3(array1, array2));
