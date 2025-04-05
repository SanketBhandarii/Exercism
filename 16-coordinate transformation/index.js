export function translate2d(dx, dy) {
  return function (x, y) {
    return [x + dx, y + dy];
  };
}

export function scale2d(sx, sy) {
  return function (x, y) {
    return [x * sx, y * sy];
  };
}

export function composeTransform(f, g) {
  return function (x, y) {
    const [fx, fy] = f(x, y);
    return g(fx, fy);
  };
}

export function memoizeTransform(fn) {
  let lastX, lastY, lastResult;
  return function (x, y) {
    if (x === lastX && y === lastY) {
      return lastResult;
    }
    lastX = x;
    lastY = y;
    lastResult = fn(x, y);
    return lastResult;
  };
}
