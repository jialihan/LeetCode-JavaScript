// https://leetcode.com/problems/battleships-in-a-board/
var countBattleships = function (board) {
  if (board === null || board.length === 0 || board[0].length == 0) return 0;
  let res = 0;
  const m = board.length;
  const n = board[0].length;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (
        board[i][j] === "." ||
        (i > 0 && board[i - 1][j] === "X") ||
        (j > 0 && board[i][j - 1] === "X")
      )
        continue;
      res++;
    }
  }
  return res;
};
