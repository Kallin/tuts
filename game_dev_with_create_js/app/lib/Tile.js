'use strict';

var createSubClass = require('./util/create_subclass')
    , Shape = createjs.Shape;

var TILE_SIZE = 50;


module.exports = createSubClass(Shape, 'Tile', {
    initialize: Tile$initialize,
    setPos: Tile$setPos
});


function Tile$initialize(x, y) {
    createjs.Shape.apply(this);
    this.setPos(x, y);
}


function Tile$setPos(x, y) {
    this.gameX = x;
    this.gameY = y;
    this.x = x * TILE_SIZE;
    this.y = y * TILE_SIZE;
}
