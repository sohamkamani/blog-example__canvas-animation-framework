'use strict';

import assign from 'object-assign';
import Ticker from '../utils/Ticker';

let PointStream = function (options) {
  assign(this, options);
  this.ticker = Ticker(options.tick);
  this.points = [];
};

module.exports = PointStream;

PointStream.prototype.next = function (y) {
  let {
    xIncrement, points, xInit, maxX, ticker
  } = this;
  points.forEach(point => {
    point.x += xIncrement;
  });
  if (ticker.tick()) {
    points.push({
      y,
      x: xInit
    });
  }
  if (points[0].x > maxX) {
    points.shift();
  }
  // console.log('log:', points[points.length - 1].x, points.length);
};

PointStream.prototype.draw = function (ctx) {
  let {
    points
  } = this;
  points.forEach(point => {
    let {
      x, y
    } = point;
    ctx.beginPath();
    ctx.arc(x, y, 5, 0, 2 * Math.PI, false);
    ctx.stroke();
  });
};
