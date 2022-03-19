//!The Senior Citizen

/*  You are given a number stored in a variable, with the name age

Check whether the age is greater than and equal to 60 or not.

If true, Then print "Senior Citizen"

otherwise "Not Senior Citizen". */

function isSeniorCitizen(age) {
  if (age >= 60) {
    console.log("Senior Citizen");
  } else {
    console.log("Not Senior Citizen");
  }
}
isSeniorCitizen(50);

//! Find Y

/* You are given a number Y. Find the value of Y, if

1. Y is multiplied by 9

2. 19 is added to the new value of Y.  */

function findY(Y) {
  var a = Y * 9;
  console.log(a + 19);
}
findY(3);

//! Power and Sum VIII ( Raising to 8 )

/* You are given two numbers stored in variables with the nameNandMrespectively

You have to find the value ofsum, such thatsum = N^8 + M^8

For example, consider the value stored inN = 2, and
M = 3

Therefore,N^8 = 2*2*2*2*2*2*2*2 = 256, and 
M^8 = 3*3*3*3*3*3*3*3 = 6561

Therefore,sum = 256 + 6561 = 6817, which is the required answer */

function numberOperation(N, M) {
  console.log(N ** 8 + M ** 8);
}
numberOperation(2, 3);

//! Logical AND X

/*  You are given two numbers stored in variables with the name,a and b

Print the result of the following operation

a >= 15 && b < 25
  */

function LogicalAnd(a, b) {
  if (a >= 15 && b < 25) {
    console.log("true");
  } else {
    console.log("false");
  }
}
LogicalAnd(16, 21);

//! Play of 4 and 6

/* You are given a number stored in a variable with the nameN

Print the output according to the following conditions

1. If N is divisible by both 4 and 6, print "Awesome!", without quotes

2. Else If N is divisible by 4, print "Four!", without quotes

3. Else if N is divisible by 6, print "Six!", without quotes

4. Else print "Dark!", without quotes  */

function playOf4and6(N) {
  if (N % 4 == 0 && N % 6 == 0) {
    console.log(`Awesome!`);
  } else if (N % 4 == 0) {
    console.log(`Four!`);
  } else if (N % 6 == 0) {
    console.log(`Six!`);
  } else {
    console.log(`Dark!`);
  }
}
playOf4and6(12);

//! Find The Middle

/*  You are given three integers namely a, b, and c. And you have to print the integer which is greater than or equal to one element and less than or equal to another element, means

suppose b>=a and b<=c then print b or if a>=c and a<=b then print a.
For Example : Given three integers are 4, 2, 6 and here we can clearly see that 4>=2 and 4<=6 so print 4 as your answer.  */

function findMiddle(a, b, c) {
  if ((a >= b && a <= c) || (a <= b && a >= c)) {
    console.log(a);
  }
  if ((b >= a && b <= c) || (b <= a && b >= c)) {
    console.log(b);
  }
  if ((c >= a && c <= b) || (c <= a && c >= b)) {
    console.log(c);
  }
}
findMiddle(4, 8, 6);
findMiddle(88, 70, 60);

//! sum till N fivefold

/*  You are given a numberNstored in a variable with the nameN

You have to find the sum of firstNnatural numbers in the range of1 to N, including the value stored inNitself, but each number should be added fivefold

For example, consider the value stored inN = 3, therefore, the sum of firstNnatural numbers issum = 1 + 2 + 3, but each number has to be addedfivefold

Therefore,sum = 1 + 1 + 1 + 1 + 1 + 2 + 2 + 2 + 2 + 2 + 3 + 3 + 3 + 3 + 3 = 30, which is the required answer  */

function sumTillfivefold(N) {
  var sum = 0;
  for (var i = 1; i <= N; i++) {
    sum = sum + i * 5;
  }

  console.log(sum);
}
sumTillfivefold(3);

//!  Even Collection

/*  You are given two numbers, stored in variables with the following names

max, min

You have to find the sum of all even numbers that fall between two numbersfrom min to max(including both min and max).

For example, if the value stored inmax = 19, and the value stored inmin = 14, then the output will be computed as follows

sum of even = 14 + 16 + 18 = 48
Note : The value stored in max will always be greater than or equal to min
 */

function evenCollection(max, min) {
  var sum = 0;
  for (min; min < max; min++) {
    if (min % 2 == 0) {
      sum = sum + min;
    }
  }
  console.log(sum);
}
evenCollection(19, 13);

//! Two Primes

/*  ou are given two numbers, stored in variables with the following namesa, b

If both the numbers are prime, print True, else print False  */

function twoPrimes(a, b) {
  var count = 0;

  for (var i = 2; i < a; i++) {
    if (a % i == 0) {
      count++;
    }
  }
  for (var i = 2; i < b; i++) {
    if (b % i == 0) {
      count++;
    }
  }
  if (count == 0) {
    console.log("True");
  } else {
    console.log("False");
  }
}
twoPrimes(11, 17);

//!  sum of series

/*  Given two integers N, X. Find the value of the series: 1 + x + x*x  + x*x*x + x*x*x*x +-------N the term

WhereN is the no. of term,

X contains the value of x.

  */

function sumOfSeries(N, X) {
  if (N <= 0 || X <= 0) {
    console.log(-1);
  } else {
    var sum = 0;
    for (var i = 0; i <= N - 1; i++) {
      sum = sum + X ** i;
    }
    console.log(sum);
  }
}
sumOfSeries(3, 2);
