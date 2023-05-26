const fruits = ["olma", "anor", "banan", "nok", "shaftoli"];
const lengths = [];

fruits.forEach((element) => {
  lengths.push(element.length);
});
console.log(Math.max(...lengths));

// data types

// primitive data types
let num = 3;
let str = "hey";
let booln = true;
let nul = null;
let undf = undefined;
let bigint = 5n;
let symbl = Symbol("unique id");

// non-primitive data types
const obj = {
  name: "Me",
  age: 5,
};

const arr = [1, 2, 3];
const myFn = () => {
  console.log("heyyy");
};
