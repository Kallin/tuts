'use strict';

var createSubClass = require('./util/create_subclass')
    , Tile = require('./Tile');


module.exports = createSubClass(Tile, 'Block', {
    initialize: Block$initialize
});


function Block$initialize(x, y) {
    Tile.prototype.apply(this);
    this.name = 'block';
    
    this.graphics.beginFill('black').drawRect(0, 0, 50, 50);
}
