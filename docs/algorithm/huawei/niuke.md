## 01.计算最后一个单词的长度

```js
const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

void (async function () {
  while ((line = await readline())) {
    // 转数组，然后查找数组最后一项
    let str = line.split(" ");
    var arr = str[str.length - 1].length;
    console.log(arr);
  }
})();
```

## 02

## 03.字符串分隔

```js
const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

void (async function () {
  // Write your code here
  while ((line = await readline())) {
    const str = line;
    let res = [];
    const len = str.length;
    if (len === 0) {
      console.log(res);
    }
    const count = Math.floor(len / 8);
    for (let i = 0; i <= count; i++) {
      if (count === 0) {
        let temp = str.padEnd(8, "0");
        res.push(temp);
        console.log(res[0]);
      } else {
        let temp = str.split(i, 8 * (i + 1));
        res.push(temp);
      }
    }
  }
})();
```
