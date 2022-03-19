// You are given a numberN, you need to find sum of all the even numbers which are less than or equal to N.

// function sumRelatedProblem(N) {

//   var sum = 0;
//   for (var i = 1; i <= N; i++) {
//     if (i % 2 == 0) {
//       sum = sum + i;
//     }
//   }
//   console.log(sum);
// }
// sumRelatedProblem(4);

/* You are given a number N.

Let’s say you derive a variable x which is equal to the floor of a number you get when32 is divided byN.

In case x is 0, print Too Low
In case it is not possible to generate a valid number, print -1
In all other cases, print x */

// function divisionTask(N) {

//   var x = Math.floor(32 / N);
// switch (x)
// {
//     case (x!=0):
//         console.log("Too Low");
//         break;
//     case (N!=0):
//         console.log(-1)
//         break;
//   default:
//         console.log(x)
// }
//   if (x == 0) {
//     console.log("Too Low");
//   } else if (N == 0) {
//     console.log(-1);
//   } else {
//     console.log(x);
//   }
// }
// divisionTask(4);

/* You are provided an integer N.

For all numbers in the range[1,N], including N you have to print a string as per the following rules:

PrintMasai School, if the number is a multiple of both 5 and 7.
PrintMasai. if the number is a multiple of 7 only.
PrintSchool, if the number is a multiple of 5 only.
Else in all other cases printHurray! */

// function masaiSchoolHurray(N) {
//   for (var i = 1; i <= N; i++) {
//     if (i % 5 == 0 && i % 7 == 0) {
//       console.log("Masai School");
//     } else if (i % 7 == 0) {
//       console.log("Masai");
//     } else if (i % 5 == 0) {
//       console.log("School");
//     } else {
//       console.log("Hurray!");
//     }
//   }
// }
// masaiSchoolHurray(7);

//! question) Breaking a record

function breakingTheRecord(n, m) {
  if (m > n) {
    console.log("Broken");
  }
  if (m < n) {
    console.log("Not Yet");
  }
  if (m == n) {
    console.log("Wao");
  }
}
breakingTheRecord(263, 200);

//! question) Masai School! Hurray!

function masaiSchoolHurray(N) {
  // Write code here
  for (var i = 1; i <= N; i++) {
    if (i % 5 == 0 && i % 7 == 0) {
      console.log("Masai School");
    } else if (i % 7 == 0) {
      console.log("Masai");
    } else if (i % 5 == 0) {
      console.log("School");
    } else {
      console.log("Hurray!");
    }
  }
}
masaiSchoolHurray(7);
