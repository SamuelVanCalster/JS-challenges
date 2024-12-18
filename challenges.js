function smallestSubstringWithUniqueChars(str) {
  let left = 0;
  let right = 0;
  let minStr = str;
  let charCounts = {};
  let uniqueChars = new Set(str).size;
  let uniqueCharsFound = 0;

  while (right < str.length) {
    let char = str[right];
    charCounts[char] = charCounts[char] + 1 || 1;
    if (charCounts[char] === 1) {
      uniqueCharsFound++;
    }
    while (left < right && uniqueChars == uniqueCharsFound) {
      if (right - left + 1 < minStr.length) {
        minStr = str.substring(left, right + 1);
      }
      let leftChar = str[left];
      charCounts[leftChar] = charCounts[leftChar] - 1;
      if (charCounts[leftChar] == 0) uniqueCharsFound--;
      left++;
    }
    right++;
  }
  return minStr;
}

console.log(smallestSubstringWithUniqueChars("aaabcdaaa"));

function getIndexesOfWordInStr(str, target) {
  let result = "";
  for (let i = target.length; i < str.length - 1; i++) {
    if (str.substring(i - target.length, i) == target) {
      result = i - target.length + "," + (i - 1);
    }
  }
  return result;
}

console.log(getIndexesOfWordInStr("ahellozaf", "hello"));

// Given an array of integers and a number k, find the maximum sum of a subarray of size k.
// Example:
// Input: arr = [2, 1, 5, 1, 3, 2], k = 3
// Output: 9
// Explanation: The subarray with the maximum sum is [5, 1, 3].

function subArrayMaxSum(arr, k) {
  let maxSum = 0;
  let windowSum = 0;
  for (let i = 0; i < k; i++) {
    windowSum += arr[i];
  }
  maxSum = windowSum;
  for (let i = k; i < arr.length; i++) {
    windowSum += arr[i] - arr[i - k];
    maxSum = Math.max(maxSum, windowSum);
  }
  return maxSum;
}
console.log(subArrayMaxSum([2, 1, 5, 1, 3, 2], 3));

function checkHTML(str) {
  const stack = [];
  const regex = /<\/?([a-z]+)[^>]*>/gi;
  let match;
  let lastTagName;

  while ((match = regex.exec(str)) !== null) {
    const [fullTag, tagName] = match;
    lastTagName = tagName;
    if (!fullTag.includes("/")) {
      stack.push(tagName);
    } else {
      if (stack.length === 0) {
        return tagName;
      } else if (stack[stack.length - 1] === tagName) {
        stack.pop();
      } else if (stack[stack.length - 1] !== tagName) {
        return stack[stack.length - 1];
      }
    }
  }
  return true;
}

console.log(checkHTML("<div></div><p></b>"));

function checkValid(str) {
  let stack = [];
  let matchingBrackets = {
    "(": ")",
    "{": "}",
    "[": "]",
  };

  for (let char of str) {
    if (Object.keys(matchingBrackets).includes(char)) {
      stack.push(char);
    } else {
      if (char === matchingBrackets[stack[stack.length - 1]]) {
        stack.pop();
      } else {
        return false;
      }
    }
  }
  return stack.length === 0;
}

console.log(checkValid("([]){}"));
