const string = ["a", "b", "c"];

string.splice(1, 0, "z"); // O(n/2)

string.push("d"); // O(1) add item to the end of array

string.pop(); // O(1) remove item from the end of array

string.shift(); // O(n) as we still alter all the array elements by removing the first element

console.log(string[0]);

console.log(string);

window.alert("hello world");
