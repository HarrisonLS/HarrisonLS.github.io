## 01.两数之和

```js
/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
};
// @lc code=end
```

## 02.两数相加

## 07.整数反转

```js
/*
 * @lc app=leetcode.cn id=7 lang=javascript
 *
 * [7] 整数反转
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  if (x > 0) {
    if (x > Math.pow(2, 31) - 1) return 0;
    const temp = String(x).split("").reverse().join("");
    if (temp > Math.pow(2, 31) - 1) return 0;
    return temp;
  } else if (x < 0) {
    if (x < -Math.pow(2, 31)) return 0;
    const temp = Number("-" + String(x).slice(1).split("").reverse().join(""));
    if (temp < -Math.pow(2, 31)) return 0;
    return temp;
  } else {
    return 0;
  }
};
// @lc code=end
```

## 09.回文数

```js
/*
 * @lc app=leetcode.cn id=9 lang=javascript
 *
 * [9] 回文数
 */

// @lc code=start
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  if (x >= 0) {
    let arr = x.toString().split("");
    let rArr = x.toString().split("").reverse();
    for (let i = 0; i <= arr.length - 1; i++) {
      if (arr[i].charCodeAt() !== rArr[i].charCodeAt()) {
        return false;
      }
    }
    return true;
  } else {
    return false;
  }
};
// @lc code=end
console.log(isPalindrome(121));
```

## 13.罗马数字转整数

```js
/*
 * @lc app=leetcode.cn id=13 lang=javascript
 *
 * [13] 罗马数字转整数
 */

// @lc code=start

// 思路：
// 先设置转换函数，通过对应关系将罗马数字转换成10进制数字
// 遍历字符串，比较前后字符串关系，当前字符比后一位字符大，进行加操作，当前字符比后一位字符小
// 进行减操作，如此遍历完后即为罗马数字对应的整数。
/**
 *
 * @param {*} s
 * @returns
 */
let convert = (s) => {
  switch (s) {
    case "I":
      return 1;
    case "V":
      return 5;
    case "X":
      return 10;
    case "L":
      return 50;
    case "C":
      return 100;
    case "D":
      return 500;
    case "M":
      return 1000;
  }
  return 0;
};
/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  let sum = 0;
  for (let i = 0; i < s.length; i++) {
    let pre = convert(s.charAt(i));
    let num = convert(s.charAt(i + 1));
    if (pre >= num) {
      sum += pre;
    } else {
      sum -= pre;
    }
  }
  return sum;
};
// @lc code=end
console.log("romanToInt: ", romanToInt("MCMXCIV"));
```

## 14.最长公共前缀

```js
/*
 * @lc app=leetcode.cn id=14 lang=javascript
 *
 * [14] 最长公共前缀
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  if (strs.length === 1) {
    return strs[0];
  }
  let strArr = "";
  for (let i = 0; i < strs[0].length; i++) {
    let count = 0;
    for (let j = 1; j < strs.length; j++) {
      if (strs[j][i] !== undefined && strs[j][i] === strs[0][i]) {
        count = count + 1;
      }
      //   console.log('j - ' + `${j}`, strs[j][i])

      if (count === strs.length - 1) {
        strArr += strs[0][i];
        // strArr = strs[0].substring(0, i + 1)
      }
    }
  }
  return strArr;
};
// @lc code=end

console.log(longestCommonPrefix(["cir", "car"]));
console.log(longestCommonPrefix(["flower", "flow", "flight"]));
console.log(longestCommonPrefix(["dog", "racecar", "car"]));
console.log(longestCommonPrefix(["dog"]));
```

## 20.有效的括号

```js
/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 */

// @lc code=start
//
// 思路：
// 利用栈数据结构的特点，以及括号组合必须是左括号在前，右括号在后的规律
// 1、右括号在前必然构成不了'有效的括号'，所以要将左括号压入栈中进行判断
// 2、遍历括号字符串，遇到右括号时，将栈顶元素弹出，判断是否能组成一对括号
// 3、若最终左括号栈的长度为0，即全部左括号被弹出与右括号做出匹配，能组成'有效的括号'，
//   所以判断为true；若长度不为0，不能组成且判断为false。
//
/**
 *
 * @param {string} ch
 * @returns
 */
let convert = (ch) => {
  if (ch === ")") return "(";
  if (ch === "}") return "{";
  return "[";
};
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  let leftBracket = [];
  for (let i = 0; i < s.length; i++) {
    let bracket = s.charAt(i);
    if (bracket === "(" || bracket === "{" || bracket === "[") {
      leftBracket.push(bracket);
    } else {
      if (leftBracket[leftBracket.length - 1] === convert(bracket)) {
        leftBracket.pop();
      } else {
        return false;
      }
    }
  }
  return leftBracket.length === 0;
};
// @lc code=end
console.log("isValid: ", isValid("{()}"));
```

## 21.合并两个有序链表

```js
/*
 * @Author: harrison lsfpositivee@163.com
 * @Date: 2022-07-11 10:36:03
 *
 * Copyright (c) 2022 by harrison lsfpositivee@163.com, All Rights Reserved.
 */
/*
 * @lc app=leetcode.cn id=21 lang=javascript
 *
 * [21] 合并两个有序链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */

// var mergeTwoLists = function (list1, list2) {
//   const dummy = new ListNode(-1)
//   let l = dummy
//   let l1 = list1
//   let l2 = list2

//   // 遍历链表
//   while (l1 !== null && l2 !== null) {
//     console.log('l1: ', l1)
//     console.log('l2: ', l2)

//     if (l1.val > l2.val) {
//       l.next = l2
//       l2 = l2.next
//     } else {
//       l.next = l1
//       l1 = l1.next
//     }

//     l = l.next
//   }

//   //   其中一个链表遍历完毕，需要街上另一个链表
//   if (l1 !== null) {
//     l.next = l1
//   }
//   if (l2 !== null) {
//     l.next = l2
//   }
//   return dummy.next
// }

//递归方法
var mergeTwoLists = function (list1, list2) {
  if (list1 === null) {
    return list2;
  } else if (list2 === null) {
    return list1;
  } else if (list1.val < list2.val) {
    list1.next = mergeTwoLists(list1.next, list2);
    return list1;
  } else {
    list2.next = mergeTwoLists(list1, list2.next);
    return list2;
  }
};
// @lc code=end
```

## 66.加一

```js
/*
 * @lc app=leetcode.cn id=66 lang=javascript
 *
 * [66] 加一
 */

// @lc code=start
/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  const n = digits.length;
  for (let i = n - 1; i >= 0; --i) {
    if (digits[i] !== 9) {
      ++digits[i];
      for (let j = i + 1; j < n; ++j) {
        digits[j] = 0;
      }
      return digits;
    }
  }

  // digits 中所有的元素均为 9
  const ans = new Array(n + 1).fill(0);
  ans[0] = 1;
  return ans;
};
// @lc code=end

console.log();
console.log(plusOne([1, 2, 3]));
```

## 67.二进制求和

```js
/*
 * @Author: harrison lsfpositivee@163.com
 * @Date: 2022-07-26 16:37:35
 * @LastEditors: harrison lsfpositivee@163.com
 * @LastEditTime: 2022-07-26 16:39:53
 * @FilePath: \undefinede:\Programming\vscode_projects\Algorithm\02LeetCode\labuladong\67.二进制求和.js
 * @Description:
 *
 * Copyright (c) 2022 by harrison lsfpositivee@163.com, All Rights Reserved.
 */
/*
 * @lc app=leetcode.cn id=67 lang=javascript
 *
 * [67] 二进制求和
 */

// @lc code=start
/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (code) {
  let codeStr = "";
  for (let i = 0; i < code.length; i++) {
    // console.log('codeStr', codeStr)
    if ((i + 1) % 4 === 0) {
      const times = (i + 1) / 4;
      if (times === 1) {
        codeStr = codeStr + code.slice(0 + (times - 1) * 4, 0 + times * 4);
        console.log("1", codeStr);
      } else {
        codeStr =
          codeStr + "-" + code.slice(0 + (times - 1) * 4, 0 + times * 4);
        console.log("2", codeStr);
      }
    }
  }
  return codeStr;
};
// @lc code=end
addBinary("W5DTKTNHQNRGLR9F8TFQ4PJZ9WDC767E");
```

## 100.相同的树

```js
/*
 * @lc app=leetcode.cn id=100 lang=javascript
 *
 * [100] 相同的树
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function (p, q) {
  if (p == null && q == null) return true;
  if (p == null || q == null) return false;
  if (p.val != q.val) return false;
  return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
};
// @lc code=end
```

## 101.对称二叉树

```js
/*
 * @lc app=leetcode.cn id=101 lang=javascript
 *
 * [101] 对称二叉树
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function (root) {
  const check = (p, q) => {
    if (!p && !q) {
      return true;
    }
    if (!p || !q) {
      return false;
    }
    return p.val === q.val && check(p.left, q.right) && check(p.right, q.left);
  };

  return check(root, root);
};
// @lc code=end
```

## 104.二叉树的最大深度

```js
/*
 * @lc app=leetcode.cn id=104 lang=javascript
 *
 * [104] 二叉树的最大深度
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function (root) {
  if (!root) {
    return 0;
  } else {
    const left = maxDepth(root.left);
    const right = maxDepth(root.right);
    return Math.max(left, right) + 1;
  }
};
// @lc code=end
```

## 118.杨辉三角

```js
/*
 * @lc app=leetcode.cn id=118 lang=javascript
 *
 * [118] 杨辉三角
 */

// @lc code=start
/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
  const res = [];
  for (let i = 0; i < numRows; i++) {
    const rowList = new Array(i + 1).fill(1);
    for (let j = 1; j < rowList.length - 1; j++) {
      rowList[j] = res[i - 1][j - 1] + res[i - 1][j];
    }
    res.push(rowList);
  }
  return res;
};
// @lc code=end
```

## 121.买卖股票的最佳时机

```js
/*
 * @lc app=leetcode.cn id=121 lang=javascript
 *
 * [121] 买卖股票的最佳时机
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  if (prices.length === 0) return 0;

  let min = prices[0];
  let max = 0;

  for (let i = 0; i < prices.length; i++) {
    min = Math.min(prices[i], min);
    max = Math.max(max, prices[i] - min);
  }
  return max;
};
// @lc code=end
console.log(maxProfit([7, 1, 5, 3, 6, 4]));
```

## 125.验证回文串

```js
/*
 * @lc app=leetcode.cn id=125 lang=javascript
 *
 * [125] 验证回文串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  var isDigitOrLetter = (c) => {
    c = c.charCodeAt(0);
    return (
      (c >= "a".charCodeAt(0) && c <= "z".charCodeAt(0)) ||
      (c >= "0".charCodeAt(0) && c <= "9".charCodeAt(0))
    );
  };
  s = s.toLowerCase();
  let f = 0;
  let l = s.length - 1;
  while (f < l) {
    while (f < s.length && !isDigitOrLetter(s[f])) f++;
    while (l >= 0 && !isDigitOrLetter(s[l])) l--;
    if (s[f] === s[l]) {
      f++;
      l--;
    } else {
      return false;
    }
  }

  return true;
};

// @lc code=end
```

## 202.快乐数

```js
/*
 * @Author: harrison lsfpositivee@163.com
 * @Date: 2022-07-26 19:41:42
 *
 * Copyright (c) 2022 by harrison lsfpositivee@163.com, All Rights Reserved.
 */
/*
 * @lc app=leetcode.cn id=202 lang=javascript
 *
 * [202] 快乐数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (n) {
  let set = new Set();

  while (n !== 1) {
    n = getNext(n);
    if (set.has(n)) {
      return false;
    }
    set.add(n);
  }

  return n === 1;
};

var getNext = function (n) {
  let sum = 0;
  while (n > 0) {
    sum = sum + Math.pow(n % 10, 2);
    n = Math.floor(n / 10);
  }
  return sum;
};
// @lc code=end
```
