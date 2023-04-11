// Q1: Write a function that creates a closure and returns a function that can add a specific number to any number passed to it. For example, if the closure is created with 5, the returned function should add 5 to any number passed to it.

// let closure = function closureCreator(value) {
//     return function (num) {
//         return num + value;
//     }
// }


// console.log(closure(5)(10));


/* Q2: Write a recursive function that searches an array for a specific value. The
function should return true if the value is found, and false if it is not. You
can assume that the array is not nested.*/

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let value;

// let valFound = function (arr, val) {
//     if (arr.length === 0) {
//         return false
//     }
//     else if (arr[0] === val) {
//         return true;
//     }
//     else{
//         return valFound(arr.slice(1), val)
//     }
// }
// console.log(valFound(arr, 2));


/* Q3: Write a function that adds a new paragraph element to the bottom of an
HTML document. The function should take a string argument that will be
used as the text content of the new paragraph element. */

// let val = prompt("Enter a Text");
// let para = document.createElement('p');
// para.innerText = val;
// document.body.appendChild(para)

/* Q4  Write a function that adds a new list item to an unordered list in an HTML
document. The function should take a string argument that will be used as
the text content of the new list item.*/

// let addBtn = document.getElementById("4btn")
// let alist = document.getElementById("list")
// function addItem() {
//     let text = prompt("Enter Anything: ");
//     let item = document.createElement('li');
//     alist.appendChild(item);
//     item.innerText = text;
// }


/* Q5 . Write a function that changes the background color of an HTML element.
The function should take two arguments: the first argument is a reference
to the HTML element, and the second argument is a string representing
the new background color */

// const elem = document.getElementById('heading');

// function bgColor(element, color) {
//     element.style.backgroundColor = color;
// }

// bgColor(elem, 'gold');

/* Q6 . Write a function that saves an object to localStorage. The function should
take two arguments: the first argument is a string representing the key to
use for storing the object, and the second argument is the object to store */

// function addObj(key, object) {
//     let nobj = JSON.stringify(object);
//     localStorage.setItem(key, nobj);
// }

// obj = {
//     name: "Ali",
//     age: 33,
//     fName: "Noman"
// };

// addObj("Person", obj);

/* Q7 . Write a function that retrieves an object from localStorage. The function
should take one argument, which is a string representing the key used to
store the object. The function should return the object */

// function findObj(key) {
//     let obj = localStorage.getItem(key);
//     return JSON.parse(obj);
// }

// let obj = findObj('Person');
// console.log(obj);

/* Q8 . Write a function that takes an object and saves each property to
localStorage using the property name as the key and the property value as
the value. The function should also retrieve the object from localStorage
and return it as a new object */

// function objFunc(obj) {
//     localStorage.setItem('company', obj.company);        
//     localStorage.setItem('modelName', obj.modelName);       
//     localStorage.setItem('model', obj.model);       
//     localStorage.setItem('price', obj.price);       
    
//     let com = localStorage.getItem("company");
//     let mN = localStorage.getItem("modelNumber");
//     let mod = localStorage.getItem("model");
//     let pr = localStorage.getItem("price");

//     return object = {
//         company: com,
//         modelName: mN,
//         model: mod,
//         price: pr
//     }
// }

// let car = {
//     company: "Lamborghini",
//     modelName: "SVJ",
//     model: 360,
//     price: "$150,000"
// };

// let myObject = objFunc(car);

// console.log(myObject);