/**
 * 3170. Lexicographically Minimum String After Removing Stars
 * @param {string} s
 * @return {string}
 */
var clearStars = function (s) {
  const n = s.length;
  // Note: return small letter, but if same letter, return the larger index using " - index".
  const q = new MinPriorityQueue({
    priority: (bid) => bid[0].charCodeAt(0) * 100000 - bid[1],
  });
  const arr = [...s];
  for (let i = 0; i < n; i++) {
    if (s[i] === "*") {
      if (!q.isEmpty()) {
        const [ch, idx] = q.dequeue().element;
        arr[idx] = -1;
      }
    } else {
      const cur = [s[i], i];
      q.enqueue(cur);
    }
  }
  return arr.filter((el) => el !== -1 && el !== "*").join("");
};
