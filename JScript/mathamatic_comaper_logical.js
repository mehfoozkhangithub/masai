/* program practice  second topic*/

// multipl of 50

var num = 5;
console.log(num * 50);

// product of six

var one = 1;
var two = 2;
var three = 3;
var four = 4;
var five = 5;

console.log(one * two * three * four * five);

// sum of five

var one = 1;
var two = 2;
var three = 3;
var four = 4;
var five = 5;

console.log(one + two + three + four + five);

//cube of num

var num = 9;
console.log(num ** 3);

// squar and sum

var one = 1;
var two = 2;
var three = 3;

console.log(one ** 2 + two ** 2 + three ** 2);

// find x

var x = 3;
console.log(x * 3 + 10);

// operation number

var num = 5;
console.log(num * 3 + 7 - 10);

// square it

var num = 5;
console.log(num ** 2);

// Double all

var one = 1;
var two = 2;
var three = 3;
var four = 4;
var five = 5;

console.log(one * 2 + two * 2 + three * 2 + four * 2 + five * 2);

// seven num

var one = 1;
var two = 2;
var three = 3;
var four = 4;
var five = 5;
var six = 6;
var seven = 7;

console.log((one + two + three) * (four + five + six + seven));

// UPDATE and COMPARES
var num1 = 3;
var num2 = 5;
var num3 = 9;

var a = num1 > num2;
console.log(a);
var num1 = num1 + num3;
var c = num1 > num2;
console.log(c);

// compare two number
var num1 = 12;
var num2 = 6;
var num3 = 8;

var a = num1 > num2;
console.log(a);

var b = num1 < num2;
console.log(b);

var c = num1 == num2;
console.log(c);

// sum compaire

var one = 1;
var two = 2;
var three = 3;
var four = 4;
var five = 5;

var sum1 = one + two + three;
var sum2 = four + five;

var a = sum1 > sum2;
console.log(a);
var b = sum1 < sum2;
console.log(b);

// Area & Perimeter

var l1 = 7;
var b1 = 9;

var l2 = 8;
var b2 = 3;

var r = 2;

var rec1 = l1 * b1;
var rec2 = l2 * b2;

var per1 = l1 + b1 * r;
var per2 = l2 + b2 * r;

var a = rec1 < rec2;
var b = per1 > per2;

// console.log(a);
// console.log(b);

// cube and square

var n = 3;
var m = 4;

var a = n ** 3;
var b = m ** 2;

var c = a > b;
console.log(c);

// IW quest
//   it the the num is di by 3 then print "multipel of 3"

var num = 7;

if (num / 3) {
  console.log("multip of 3");
} else {
  console.log("not multip of 3");
}

// Driveing licence

var name = "mehfooz";
var age = 18;

console.log(name);
if (age <= 18) {
  console.log("Applicable to drive .");
} else {
  console.log("Not applicable to drive.");
}

// Give two number to a and b and print whiche is greater or both equal

var a = 5;
var b = 8;

if (a > b) {
  console.log("A is grater then B ");
} else if (b > a) {
  console.log(" B is grater then A ");
} else {
  console.log("Both are equal ");
}

// user id and pass

var user_id = "mehfooz_khan";
var user_pass = "abc.123";

var store_id = "mehfooz_khan";
var store_pass = "abc.123";

if (user_id == store_id) {
  if (user_pass == store_pass) {
    console.log("log in sucessfull ");
  } else {
    console.log("invalid pass");
  }
} else {
  console.log("invalid user id ");
}

// Divisible by 4

var a = 4;

if (a % 4 == 0) {
  console.log("this is divisible ");
} else {
  console.log("this is not divisible");
}

// masai even odd

var num = 5;

if (num % 2 == 0) {
  console.log("even");
} else {
  console.log("odd");
}

// profile pic

var L = 12;
var W = 14;
var length = 8;
var width = 19;

if (length > L) {
  if (width > W) {
    console.log("Upload");
  } else {
    console.log("increase width");
  }
} else if (length < L) {
  console.log("increase length ");
} else if (width < W) {
  console.log("increase width ");
}

// Compare for number
// AND
var one = 2;
var two = 6;
var three = 7;
var four = 9;

if (one > two && three > four) {
  console.log("Yes");
} else {
  console.log("No");
}

// OR

var one = 2;
var two = 6;
var three = 7;
var four = 9;

if (one > two || three > four) {
  console.log("Yes");
} else {
  console.log("No");
}

// sum practies
// AND

var one = 2;
var two = 6;
var three = 7;
var four = 9;

sum1 = one + two;
sum2 = three + four;

if (sum1 > 10 && sum2 > 15) {
  console.log("Yes");
} else {
  console.log("No");
}

// NOṬ

var one = 2;
var two = 6;
var three = 7;
var four = 9;

sum1 = one + two;
sum2 = three + four;

if (sum1 > 10 || sum2 > 15) {
  console.log("Yes");
} else {
  console.log("No");
}

// odd,even ,both

var one = 5;
var two = 6;

if (one % 2 == 0 && two % 2 == 0) {
  console.log("Even");
} else if (one % 2 != 0 && two % 2 != 0) {
  console.log("Odd");
} else {
  console.log("Even-Odd");
}

//switch case (weekend day's)

var num = 5;

switch (num) {
  case 1:
    console.log("Monday.");
    break;
  case 2:
    console.log("Tuesday.");
    break;
  case 3:
    console.log("wednwsday.");
    break;
  case 4:
    console.log("Thursday.");
    break;
  case 5:
    console.log("Friday.");
    break;
  case 6:
    console.log("Saturday.");
    break;
  case 7:
    console.log("sunday.");
    break;
  default:
    console.log("Enter the correct value!!");
}

/* Give the year of the birth if the age  is between 13  and 19
(both includeded)print teenage and in between 20 and 29 (noth includeed) print tweenties */

var date_of_year = 1999;
var age = 2023 - date_of_year;

if (age >= 13 && age <= 19) {
  console.log("Teenage.");
} else if (age >= 20 && age <= 29) {
  console.log("Tweenties");
} else {
  console.log("Invalide age!");
}

/*given any character if it is a vowel print "vowel" */

var x = "i";
if (x == "e" || x == "o" || x == "a" || x == "i" || x == "u") {
  console.log("Vowel");
} else {
  console.log("It is not a vowel");
}

/* given and char if it is a consonant print "consonant" */

var a = "Mehfooz";

if (
  a != "gopi" &&
  a != "manish" &&
  a != "sapna" &&
  a != "vabhav" &&
  a != "ashish"
) {
  console.log("consonant");
} else {
  console.log("Non consonant");
}

/* Given 3 num (all differ value), print which is great*/

var a = 55;
var b = 955;
var c = 555;

if (a > b && a > c) {
  console.log("A is greater .");
} else if (b > c && b > a) {
  console.log("B is the greater .");
} else if (c > a && c > b) {
  console.log("C is the greater .");
} else {
  console.log("All is the equal .");
}
