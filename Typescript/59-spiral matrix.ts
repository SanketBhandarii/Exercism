export function ofSize(n: number): number[][] {
  const matrix = Array.from({ length: n }, () => Array(n).fill(0));
  let [top, bottom, left, right, num] = [0, n - 1, 0, n - 1, 1];

  while (top <= bottom && left <= right) {
    for (let i = left; i <= right; i++) matrix[top][i] = num++;
    top++;
    for (let i = top; i <= bottom; i++) matrix[i][right] = num++;
    right--;
    for (let i = right; i >= left && top <= bottom; i--)
      matrix[bottom][i] = num++;
    bottom--;
    for (let i = bottom; i >= top && left <= right; i--)
      matrix[i][left] = num++;
    left++;
  }

  return matrix;
}
