var hot = false;
var temp = 0;

if (temp>25) {
  console.log("It's hot Outside");
} else if (temp <= 25 && temp >= 15) {
  console.log("Average Temperature Outside");
} else if (temp < 15 && temp >= 0) {
  console.log("It's cold outside");
} else {
  console.log("It's very cold");
}

var x = 1;
while (x < 11) {
  if (x % 2 === 0) {
    console.log("x is even: " + x);
  }
  x = x + 1;
}

var word = "ABCDEFGH"
for (var i = 0; i < word.length; i++) {
  console.log(word[i]);
}
