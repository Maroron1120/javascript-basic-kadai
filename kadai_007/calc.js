num = Math.floor(Math.random() * 100)+1;
console.log(num);
num3=num % 3 == 0
num5=num % 5 == 0
console.log(num3);
console.log(num5);

if (num3 && num5) {
  console.log("3と5の倍数です");
}

else if (num5) {
  console.log("5の倍数です");
}
else if  (num3) {
  console.log("3の倍数です");
}
else {
  console.log(num);
}
num % 3 == 0
num % 5 == 0

