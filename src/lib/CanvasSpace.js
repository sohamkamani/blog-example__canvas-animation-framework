'use strict';
import assign from 'object-assign';

let CanvasSpace = function(options){
  let self = this;
  self.drawObjects = [];
  assign(self, options);
};

module.exports = CanvasSpace;

CanvasSpace.prototype.addObject = function(drawObject){
  this.drawObjects.push(drawObject);
};

CanvasSpace.prototype.update = function(){
  this.drawObjects.forEach(drawObject => {
    drawObject.update();
  });
};

CanvasSpace.prototype.paint = function(){
  let self = this;
  self.ctx.clearRect(0,0,self.canvas.width,self.canvas.height);
  self.ctx.beginPath();
  this.drawObjects.forEach(drawObject => {
    drawObject.draw(self.ctx);
  });
  self.ctx.stroke();
};
