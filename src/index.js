'use strict';

import CanvasSpace from './lib/CanvasSpace';
import SquareJumper from './lib/SquareJumper';

const c = document.getElementById('myCanvas');
const ctx = c.getContext('2d');
window.ctx = ctx;

const canvas = new CanvasSpace({
  ctx,
  canvas: c
});
var i;
for ( i = 0; i < 1; i++) {
  canvas.addObject(new SquareJumper({
    x: 10 + 40 * i,
    y: 100 - (i%10 - 5)* 10,
    width: 40,
    height: 60,
    maxX : c.width
  }));
}
// for ( i = 10; i < 20; i++) {
//   canvas.addObject(new SquareJumper({
//     x: 10 + 40 * i,
//     y: 100 - (10 - i%10 - 5)* 10,
//     width: 40,
//     height: 60
//   }));
// }
canvas.paint();

setInterval(() => {
  canvas.update();
  canvas.paint();
}, 20);
