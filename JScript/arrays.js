//! Arrya to print single name and array list

//* GENERIG CODE METHODE WRITING

//todo: THIS CODE ID BASED ON PRE LECTURE VIDIO (teach by " NRUPUL")

var bestFreind = ["Shanoor", "rishu", "shadab", "tom&jerry"];
console.log(bestFreind[0]);
console.log(bestFreind[1]);
console.log(bestFreind[2]);
console.log(bestFreind[3]);
console.log(bestFreind[4]);
console.log(bestFreind);

//* change the list name by different name & the revers index elements ;

var bestFreind = ["Shanoor", "rishu", "shadab", "tom&jerry"];

var iteam = bestFreind.length;
console.log(bestFreind);
console.log(bestFreind[iteam - 1]);
console.log(bestFreind[iteam - 2]);
console.log(bestFreind[iteam - 3]);
console.log(bestFreind[iteam - 4]);
console.log(bestFreind[iteam - 5]);

bestFreind[1] = "ashish";

console.log(bestFreind);

//* " PUSH " is use to add the element in array list (in last posistion)

var bestFreind = ["Shanoor", "rishu", "shadab", "tom&jerry"];

bestFreind.push("ashish");

bestFreind.push("moin");

console.log(bestFreind);

console.log(bestFreind.length);

//* " POP " is basically use to subtrakt the element in array list  in last posistion

var bestFreind = ["Shanoor", "rishu", "shadab", "tom&jerry"];

bestFreind.pop();

bestFreind.pop(-1);

console.log(bestFreind);
console.log(bestFreind.length);

//* for loop in arrays

var names = ["mehfooz", "shanoor", "shadab", "ashsih", "khabib"];

for (var i = 0; i < names.length; i++) {
  console.log(i + 1 + ". " + names[i]);
}

//! VARUN SIR TEACH CODE

//* code 0

var product = [`pen`, `pencil`, `scale`, `rular`];

console.log(product);
console.log(product.length);

var numbers = [1, 2, 8, 9, 10, `hello`];
console.log(numbers);
console.log(numbers.length);

//* code 1

var train = [
  `gorakhPur `,
  `jummuKhasmir`,
  `garibRuth`,
  `tilakNagar`,
  `lokmanyaTilak`,
];

var totalTrain = train.length;

var lastIndex = totalTrain - 1;

console.log(`last train is` + `=>` + " ", lastIndex);
console.log(`last train name is ` + `=>` + " ", train[lastIndex]);

//* ` PUSH ` & ` POP ` in array list

// ? " PUCH " ===> insert in last of array list
// ? ' POP ' ===> remove from last  of array list
//todo: task 👇 (PUSH)

var arr = [];

arr.push("mehfooz");
arr.push("shadab");
arr.push("ashish");
arr.push("sameer");
arr.push("rahul");
arr.push("vaibhav");

console.log(arr);

var totalFriend = arr.length;

var lastFriend = totalFriend - 1;

console.log(lastFriend);
console.log(arr[lastFriend]);

//todo: task.👇[POP]

var arr = [];

arr.push("mehfooz");
arr.push("shadab");
arr.push("ashish");
arr.push("sameer");
arr.push("rahul");
arr.push("vaibhav");

console.log(arr);

arr.pop();
arr.pop();

console.log(arr);

//* UPDATE in arrays list

var arr = [1, 2, `masai`, `hello`, 5];

arr[0] = `mehfooz`;
arr[5] = `welcome`;
console.log(arr);

//* for loop im arry

//todo : print arry by for loop

var mef = [`pen`, `pencil`, `scale`, `rular`];

var totalNumber = mef.length;
var lastArry = totalNumber - 1;

for (var i = 0; i <= lastArry; i++) {
  console.log(i + 1, ". " + mef[i]);
}

//todo : pop the list by for loop

var mef = [`pen`, `pencil`, `scale`, `rular`];

for (var i = 1; i <= 3; i++) {
  mef.pop();
}
console.log(mef);

// countinue & break in array
//todo : continue ==> print all the element exept one element

var mef = [`pen`, `pencil`, `scale`, `rular`];

var lastElement = mef.length - 1;
for (var i = 0; i <= lastElement; i++) {
  if (i == 2) {
    continue;
  }
  console.log(mef[i]);
}

//! if we skip two values

var mef = [`pen`, `pencil`, `scale`, `rular`];

var lastElement = mef.length - 1;
for (var i = 0; i <= lastElement; i++) {
  if (i == 1 || i == 3) {
    continue;
  }
  console.log(mef[i]);
}

//* print last 3 element in array (generic code)

var pro = [`X`, `Y`, `Z`, `A`, `B`];

var start = pro.length - 3;
var lastElement = pro.length - 1;

for (var i = start; i <= lastElement; i++) {
  console.log(pro[i]);
}

//! if the case will come 2 element eg. arr=[`X`,`Y`] then use this condition with "GC"==>'GENERIC CODE'

var pro = [`X`, `Y`, `Z`];

var start = 0;
if (pro.length >= 3) {
  start = pro.length - 3;
}
var lastElement = pro.length - 1;

for (var i = start; i <= lastElement; i++) {
  console.log(pro[i]);
}

//* ODD & EVEN  array

//! EVEN  ARRAY

//? `FORMULA` [start = (arryName).length/2]

//* Even number problem 1

function arrayEvenNum(n, str) {
  var arr = ["a", "e", "i", "o", "u"];

  var n = 6;

  var count = 0;

  for (var i = 0; i < n; i++) {
    if (
      str[i] == "a" ||
      str[i] == "e" ||
      str[i] == "i" ||
      str[i] == "o" ||
      str[i] == "o"
    ) {
      count++;
    }
  }

  if (count >= 1) {
    console.log("yes");
  } else {
    console.log("No");
  }
}
arrayEvenNum(6, "stzvr");

// *  Even Number  problem 2

function evenProblem2() {
  var arr = ["A", "B", "C", "D", "E", "F"];

  var start = 0;

  if (i % 2 != 0) {
    start = arr.length / 2;
  } else {
    start = arr.length + 1 / 2;
  }

  for (var i = start; i < arr.length; i++) {
    console.log[arr[i]];
  }
}
evenProblem2();

//! ODD ARRAY

//? `FORMULA`  [start=(arryName).length+1/2]

var names = ["a", "b", "c", "d", "e", "f"];

var start = 0;
if (names % 2 == 0) {
  start = names.length / 2;
} else {
  start = names.length + 1 / 2;
}

for (var i = start; i <= names.length - 1; i++) {
  console.log(names[i]);
}

//! Sum of Element of array

var arr = [10, 20, 60, 40, 90];

var sum = 0;

for (var i = 0; i < arr.length; i++) {
  sum = sum + arr[i];
}
console.log(sum);

//! MIN & MAX Value Find

// todo normal maximum sum

var num = [10, 20, 50, 90, 40, 60];

var pad = 0;

for (var i = 0; i < num.length; i++) {
  if (num[i] > pad) {
    pad = num[i];
  }
}
console.log(pad);

//* solve with `Infinity`

var num = [10, 20, 50, 90, 40, 60];

var pad = -Infinity;

for (var i = 0; i < num.length; i++) {
  if (num[i] > pad) {
    pad = num[i];
  }
}
console.log(pad);

//!  Minimum Number Problem Solve

var num = [10, 20, 50, 90, 40, 60];

var pad = Infinity;

for (var i = 0; i < num.length; i++) {
  if (num[i] < pad) {
    pad = num[i];
  }
}
console.log(pad);

//* negative problem in min

var num = [-10, -20, -50, -90, -40, -60];

var pad = Infinity;

for (var i = 0; i < num.length; i++) {
  if (num[i] < pad) {
    pad = num[i];
  }
}
console.log(pad);

//! IW Question Solve
//* name and age print

var nam = ["mehfooz", "khan", "super", "coder"];

var age = [28, 23, 18, 12];

for (var i = 0; i < nam.length; i++) {
  console.log(i + 1, nam[i], age[i]);
}

//*
var chr = "m";

var lower_case = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

var upper_case = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

for (var i = 0; i < lower_case.length; i++) {
  if (chr == lower_case[i]) {
    console.log(upper_case[i]);
  }
}

//! Average Find to Number

var sum = 0;

var count = 0;

var num = [10, 50, 60, 70, 90];

for (var i = 0; i < num.length; i++) {
  if (num[i] % 2 == 0) {
    sum = sum + num[i];
    count++;
  }
}
var avg = sum / count;

console.log(avg);

//! Assignment Question's

// todo: code 0

//Print Array

function printArray(N, arr) {
  for (var i = 0; i < N; i++) {
    console.log(arr[i]);
  }
}
printArray(5, [1, 2, 3, 4, 5]);

//* code 1

//Print Array in Horizontal

function printHorizontalArray(N, arr) {
  var box = "";
  for (var i = 0; i < N; i++) {
    box = box + arr[i] + " ";
  }

  console.log(box);
}
printHorizontalArray(5, [1, 2, 3, 4, 5]);

//* code 2

// Reverse Array Traversal

function reverseArrayTraversal(n, arr) {
  var box = "";
  for (var i = n - 1; i >= 0; i--) {
    box = box + arr[i] + " ";
  }
  console.log(box);
}
reverseArrayTraversal(5, [1, 2, 3, 4, 5]);

// Even Array

var arr = [1, 2, 3, 4, 5];

for (var i = 0; i < arr.length; i++) {
  if (arr[i] % 2 == 0) {
    console.log(arr[i]);
  }
}

//odd arry

var arr = [1, 2, 3, 4, 5];

for (var i = 0; i < arr.length; i++) {
  if (arr[i] % 2 != 0) {
    console.log(arr[i]);
  }
}

// Sum of Array

var arr = [1, 2, 3, 4, 5];

var sum = 0;

for (var i = 0; i < arr.length; i++) {
  sum = sum + arr[i];
}
console.log(sum);

// todo : done all array assignment [Even&Oddsum/Min&Max/]
