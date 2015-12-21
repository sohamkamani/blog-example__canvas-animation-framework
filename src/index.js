'use strict';

import CanvasSpace from './lib/CanvasSpace';
import Component from './lib/Component';
import Square from './lib/Square';
import LinearMotion from './lib/LinearMotion';

const c = document.getElementById('myCanvas');
const ctx = c.getContext('2d');
window.ctx = ctx;

const canvas = new CanvasSpace({
  ctx,
  canvas: c
});

let motion = new LinearMotion({
  center : 100,
  maxDistanceFromCenter : 50
});
let square = new Square({
  width : 25,
  height : 25,
  position : {
    x : 100,
    y : 10
  }
});
canvas.addObject(new Component({
  motion,
  drawing : square
}));
//
// canvas.paint();
//
// setInterval(() => {
//   canvas.update();
//   canvas.paint();
// }, 20);


const render = ()=>{
  requestAnimationFrame(render);
  canvas.update();
  canvas.paint();
};
render();
