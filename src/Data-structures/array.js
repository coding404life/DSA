const string = ["a", "b", "c"];

string.splice(1, 0, "z"); // O(n/2)

string.push("d"); // O(1) add item to the end of array

string.pop(); // O(1) remove item from the end of array

string.shift(); // O(n) as we still alter all the array elements by removing the first element

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
