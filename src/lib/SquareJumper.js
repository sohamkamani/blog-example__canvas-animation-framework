'use strict';
import Square from './Square';
import SpringMotion from './SpringMotion';
import PointStream from './PointStream';

var SquareJumper = function (options) {
  let self = this;
  let {
    x, y
  } = options;
  self.square = new Square({
    x: x,
    y: y - 5,
    width: 10,
    height: 10
  });
  self.pointStream = new PointStream({
    xInit: x + 10,
    xIncrement: 2,
    tick: 1,
    maxX: options.maxX
  });
  self.motion = new SpringMotion({
    center: 100,
    s: options.y,
    k: 3e-3
  });
};

module.exports = SquareJumper;

SquareJumper.prototype.draw = function (ctx) {
  this.square.draw(ctx);
  ctx.stroke();
  ctx.beginPath();
  this.pointStream.draw(ctx);
};

SquareJumper.prototype.update = function () {
  let {
    square, motion, pointStream
  } = this;
  pointStream.next(motion.s);
  motion.move();
  square.y = motion.s - 5;
};
