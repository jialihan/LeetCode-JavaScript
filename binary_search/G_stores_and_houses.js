// https://leetcode.com/discuss/interview-question/350248/Google-or-Summer-Intern-OA-2019-or-Stores-and-Houses
// You are given 2 arrays representing integer locations of stores and houses (each location in this problem is one-dementional). For each house, find the store closest to it.
// Return an integer array result where result[i] should denote the location of the store closest to the i-th house. If many stores are equidistant from a particular house, choose the store with the smallest numerical location. Note that there may be multiple stores and houses at the same location.

// Input: houses = [5, 10, 17], stores = [1, 5, 20, 11, 16]
// Output: [5, 11, 16]
// Explanation:
// The closest store to the house at location 5 is the store at the same location.
// The closest store to the house at location 10 is the store at the location 11.
// The closest store to the house at location 17 is the store at the location 16.

function storesAndHouses(houses, stores) {
  const ans = new Array(houses.length);
  for (const h of houses) {
    const i = binarysearch_lower(stores, h);
    if (i === 0) {
      ans[i] = stores[0];
    } else if (i >= stores.length) {
      ans[i] = stores[stores.length - 1];
    } else {
      const right = stores[i] - h;
      const left = h - stores[i - 1];
      if (right > left) {
        ans[i] = stores[i - 1];
      } else if (right < left) {
        ans[i] = stores[i];
      } else {
        ans[i] = Math.min(stores[i - 1], stores[i]);
      }
    }
  } // end for
  return ans;
}

function binarySearch_lower(arr, target) {
  // find the 1st num that >= target
  let l = 0;
  let r = arr.length;
  while (l < r) {
    const mid = Math.floor((l + r) / 2);
    if (arr[mid] < target) {
      l = mid + 1;
    } else {
      r = mid;
    }
  }
  return arr[l];
}
