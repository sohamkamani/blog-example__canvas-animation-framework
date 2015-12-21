'use strict';

let Ticker = function(ticks){
  let remaining = ticks;
  return {
    tick : ()=>{
      if( remaining < 0){
        remaining = ticks;
        return true;
      }
      remaining -= 1;
      return false;
    }
  };
};

module.exports = Ticker;
