'use strict';

import Renderer from './Renderer';
import Component from './Component';
import Square from './drawings/Square';
import LinearMotion from './motions/LinearMotion';

const renderer = new Renderer('myCanvas');

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
renderer.addComponent(new Component({
  motion,
  drawing : square
}));

const render = ()=>{
  requestAnimationFrame(render);
  renderer.update();
  renderer.paint();
};
render();
