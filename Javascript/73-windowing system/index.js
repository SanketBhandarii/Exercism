export function Size(width = 80, height = 60) {
  this.width = width;
  this.height = height;
}
Size.prototype.resize = function (w, h) {
  this.width = w;
  this.height = h;
};

export function Position(x = 0, y = 0) {
  this.x = x;
  this.y = y;
}
Position.prototype.move = function (x, y) {
  this.x = x;
  this.y = y;
};

export class ProgramWindow {
  constructor() {
    this.screenSize = new Size(800, 600);
    this.size = new Size();
    this.position = new Position();
  }

  resize({ width, height }) {
    this.size.width = Math.max(
      1,
      Math.min(width, this.screenSize.width - this.position.x)
    );
    this.size.height = Math.max(
      1,
      Math.min(height, this.screenSize.height - this.position.y)
    );
  }

  move({ x, y }) {
    this.position.x = Math.max(
      0,
      Math.min(x, this.screenSize.width - this.size.width)
    );
    this.position.y = Math.max(
      0,
      Math.min(y, this.screenSize.height - this.size.height)
    );
  }
}

export const changeWindow = (win) => {
  win.resize(new Size(400, 300));
  win.move(new Position(100, 150));
  return win;
};
