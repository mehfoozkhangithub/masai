/*Nested for loop*/

//prog..1

var box = "";
for (var i = 1; i <= 3; i++) {
  for (var j = 1; j <= 4; j++) {
    box = box + "berad";
  }
  console.log(box);
}

// prog ..2

for (var a = 1; a <= 4; a++) {
  var box = "";
  for (var b = 1; b <= 10; b++) {
    box = box + "* ";
  }
  console.log(box);
}

// prog..3

for (var i = 1; i <= 6; i++) {
  var box = "";
  for (var j = 1; j <= i; j++) {
    box = box + "* ";
    // break;
  }
  console.log(box);
}

// prog..4

for (var i = 5; i >= 1; i--) {
  var box = "";
  for (var j = 1; j <= i; j++) {
    box = box + "* ";
  }
  console.log(box);
}

// prog..5

for (var i = 1; i <= 6; i++) {
  var box = "";
  for (var j = 1; j <= i; j++) {
    box = box + j;
    // break;
  }
  console.log(box);
}
console.log("*********");
// prog..6

for (var i = 1; i <= 6; i++) {
  var box = "";
  for (var j = 1; j <= i; j++) {
    box = box + i;
    // break;
  }
  console.log(box);
}

// prog..7

for (var i = 1; i <= 3; i++) {
  for (var j = 1; j <= 5; j++) {
    if (j > i) {
      break;
    }
    console.log(i, j);
  }
}

// prog..8

for (var i = 1; i <= 3; i++) {
  for (var j = 1; j <= 5; j++) {
    if (j == i) {
      continue;
    }
    console.log(i, j);
  }
}
