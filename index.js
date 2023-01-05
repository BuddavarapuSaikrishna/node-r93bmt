// run `node index.js` in the terminal

console.log(`Hello Node.js v${process.versions.node}!`);

let count1 = 0;
let count2 = 0;
let count3 = 0;

for (let i = 0; i <= 100; i++) {
  if (i % 3 == 0 && i % 5 == 0) {
    console.log('amazon');
    count1 += 1;
  }
  if (i % 3 == 0) {
    console.log('google');
    count2 += 1;
  }
  if (i % 5 == 0) {
    console.log('facebook');
    count3 += 1;
  }
}

console.log(`The count of amazon text: ${count1}`);
console.log(`The count of google text: ${count2}`);
console.log(`The count of facebook text: ${count3}`);
