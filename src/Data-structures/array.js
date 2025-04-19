const stringArr = ["a", "b", "c"];

stringArr.splice(1, 0, "z"); // O(n/2)

stringArr.push("d"); // O(1) add item to the end of array

stringArr.pop(); // O(1) remove item from the end of array

stringArr.shift(); // O(n) as we still alter all the array elements by removing the first element

// implementing Javascript  Arrays => Hint: Javascript array are always Dynamic => means every time items added anto the array we don't have to manually allocate space in memory to it

class MyArray {
  constructor() {
    this.data = {};
    this.length = 0;
  }

  get(index) {
    return this.data[index];
  }

  // push
  push(item) {
    this.data[this.length] = item;
    this.length++;
    return this.length;
  }
  // pop
  pop() {
    const lastItem = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;
    return lastItem;
  }
  // delete
  delete(index) {
    const item = this.data[index];
    this.shiftItems(index);

    return item;
  }

  shiftItems(index) {
    for (let i = index; i < this.length - 1; i++) {
      this.data[i] = this.data[i + 1];
      console.log(i, i + 1, index);
    }

    delete this.data[this.length - 1];
    this.length--;
  }

  /*
  [5,6,7,8]
  if index = 1
  i = 1
  this.data[i] => 6 = this.data[i + 1] => 2
*/
}

const newArr = new MyArray();

newArr.push("hi");
newArr.push("Yahya");
newArr.push("ahmed");

const lastItem = newArr.delete(1);

console.log(lastItem);
console.log(newArr);

const string = "Hi My name is Yahya";

/*
  Create a funciton that reverse a string
  "Hi My name is Yahya" should be "ayhaY si eman yM iH"
*/

const reverse = (str) => {
  if (typeof str !== "string" || !str || str.length < 2) {
    throw new Error("Input must be a string");
  }

  return str.split("").reverse().join("");
};

const reverse4 = (str) => str.split("").reverse().join("");

// O(n) as we are using split and join
console.log(reverse(string));

// destructring string into array and reverse the string then join without any spaces as we already have a space
const reverse2 = (str) => [...str].reverse().join("");

const reverse3 = (str) => {
  const backwards = [];
  const strLength = str.length - 1;

  for (let i = strLength; i >= 0; i--) {
    backwards.push(str[i]);
    console.log(i);
  }

  return backwards.join("");
};

console.log(reverse3(string));

function solution(str) {
  // loop throw the string truncate the each pair 0,1 2,3
  // lets make it simpler and get the first pairs
  // then first and second pairs
  // then check if only single number not a pair
  // abc => ['ab', 'c_']
  let result = [];

  /*
    explain the solution:
    first time the i = 0
  */
  for (let i = 0; i <= str.length; i += 2) {
    console.log(i, i + 1);

    if (i + 1 >= str.length) {
      result.push(str[i] + "_");
    } else {
      result.push(str.slice(i, i + 2));
    }
  }

  return result;
}

console.log(solution("abcdef"));

const mergeSortedArrays = (arr1, arr2) => {
  if (!Array.isArray(arr1) || !Array.isArray(arr2)) {
    throw new Error("Input must be an array");
  }

  if (arr1.length === 0) {
    return arr2;
  } else if (arr2.length === 0) {
    return arr1;
  } else {
    return [...arr1, ...arr2];
  }
};

// O(n) as we are using spread operator

console.log(mergeSortedArrays([1, 2, 3], [4, 5, 6]));

function calculateRunningTotal(n, list_of_numbers) {
  // Write your code here
  // input: n list of integers
  // output: if product even return the sum of the integers
  // if any integer is 0 return double the sum
  let result = 0;
  for (const num1 of list_of_numbers) {
    for (const num2 of list_of_numbers) {
      result = num1 * num2;
    }
  }
  const evenOrOdd = result % 2;
  console.log(evenOrOdd);
  console.log(result);
}

calculateRunningTotal(1, [1, 2, 3, 4]);
