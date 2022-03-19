//!stings is a sequence of characters (!,@,#,$,%,^,&,*,a,b,c,d,r,h,f,k,h,g,d) //string is a data type <==

// var x = "Masai School";
// console.log(x.length - 1);

//* code 0

var str = "Masai School";

console.log(str[0]);
console.log(str[1]);
console.log(str[2]);
console.log(str[3]);
console.log(str[4]);
console.log(str[5]);
console.log(str[6]);
console.log(str[7]);
console.log(str[8]);
console.log(str[9]);
console.log(str[10]);
console.log(str[11]);
console.log(str[12]);

//* code 1

//? password sould be at least of 6 chart

var passWord = "masai";
if (passWord.length < 6) {
  console.log("enter the bigger number which is given !?@#");
} else {
  console.log("password id correct");
}

//*code 2

var names = "mehfooz";

for (var i = 0; i < names.length; i++) {
  console.log(names[i]);
}

//* code 3

var names = ["k", "i", "l", "v", "i", "s", "h"];

for (var i = 0; i < names.length; i++) {
  console.log(names[i]);
}

//* code 4

// chage the element chart (update in string)
// ?? you can't change strings || arrays are capabile to chage or update it self.

var names = "kilvish";
names[0] = "m";
console.log(names);

// possibility to change strings || run the loop and covert string to arry by push operation and  after operation new arry form and update the string which u want

// * code 5

var str = "kilvish";
var arr = [];

for (var i = 0; i < str.length; i++) {
  // console.log(str[i]);
  arr.push(str[i]);
}

arr[0] = "m";

console.log(arr);

// * code 6

//putting string to array bocs to change the string element but string is not-mutable then we covrt in arry and change

// Long prosses fo the prev prog 👇

var str1 = "kilvish";

var arr = [];

for (var i = 0; i < str1.length; i++) {
  arr.push(str1[i]);
}

arr[0] = "m";

// putting the array in string
var str2 = "";

for (var i = 0; i < arr.length; i++) {
  str2 = str2 + arr[i];
}
console.log(str2);

// 👆  short prosses fo the prev prog 👇

var str = "kilvish";

var output = "";

for (var i = 0; i < str.length; i++) {
  if (i == 0) {
    output = output + "m";
  } else {
    output = output + str[i];
  }
}
console.log(output);

//! If u want to change multi change in string like prev questions 👆===>👇

var str = "kilvish";

var output = "";

for (var i = 0; i < str.length; i++) {
  if (i == 0) {
    output = output + "m";
  } else if (i == 3) {
    output = output + "z";
  } else if (i == 6) {
    output = output + "p";
  } else {
    output = output + str[i];
  }
}
console.log(output);

//! Remove some element in string

// * note ==> push and pop are not satisfy string it's only satisfy in array's

var str = "mehfooz";

var bag = "";

for (var i = 0; i < str.length; i++) {
  if (i == 4) {
    continue;
  } else {
    bag = bag + str[i];
  }
}

console.log(bag);

//! count the name of string start with "A" or "M" any alpha u want to find

var nam = ["mehfooz", "mainuddin", "abhishek", "praveen ", "manoj", "shanoor"];

var count = 0;

for (var i = 0; i < nam.length; i++) {
  var x = nam[i];
  if (x[0] == "m") {
    count++;
  }
}
console.log(count);

//! Count the name which contain "A" or any alpha u want to find , as same we can find with upper case also.👇

var nam = ["mehfooz", "mainuddin", "abhishek", "praveen ", "manoj", "shanoor"];

var count = 0;

for (var i = 0; i < nam.length; i++) {
  var x = nam[i];
  for (var j = 0; j < x.length; j++) {
    if (x[j] == "o") {
      console.log(x);
      count++;
    }
  }
}
console.log(count);

//! IW Assignment Solve

//*  code 0

//? thse is not a generic code this is only the one sample test case to run further we will find the generic code .

// Problem 1 : Given a string count the number of words in that string

var tagLine = "I am a coder and i will make the code of top company";

var count = 0;

for (var i = 0; i < tagLine.length; i++) {
  if (tagLine[i] == " ") {
    count++;
  }
}
console.log("the total words in :", count + 1);

//! Additional Question prev [if not tagline are there or u call "0" then we have to put some condition ]

var tagLine = " ";

if (tagLine > 0) {
  var count = 0;

  for (var i = 0; i < tagLine.length; i++) {
    if (tagLine[i] == " ") {
      count++;
    }
  }
  console.log("the total words in :", count + 1);
} else {
  console.log("the total words in :", 0);
}

//* code 1

// Problem 2 : Given a string in lower case convert it to upper case

var nam = "mehfooz khan";

var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

var output = "";

for (var i = 0; i < nam.length; i++) {
  if (nam[i] == " ") {
    output = output + " ";
    continue;
  }
  for (var j = 0; j < lowerCase.length; j++) {
    if (nam[i] == lowerCase[j]) {
      output = output + upperCase[j];
      break;
    }
  }
}
console.log(output);

//* code 2

// Problem 3 : Given an array of string count the overall total number of characters

var arr = ["mehfooz", "shadab", "ashish", "shanoor"];

var sum = 0;

for (var i = 0; i < arr.length; i++) {
  var x = arr[i];
  sum = sum + x.length;
}
console.log(sum);
