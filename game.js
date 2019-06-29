const Crafty = require('craftyjs');

Crafty.init(900, 900);

Crafty.background('black');

// Character
Crafty.e('Player, 2D, DOM, Color, Twoway')
  .attr({ x: 0, y: 0, w: 100, h: 100})
  .color('red')
  .twoway(5)
  .gravity('Floor');
;

// Ground
Crafty.e('Floor, 2D, Canvas, Color')
  .attr({ x: 0, y: 550, w: 1050, h: 10 })
  .color('green')
;
