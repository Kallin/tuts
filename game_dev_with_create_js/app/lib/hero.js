'use strict';

var createSubClass = require('./util/create_subclass');
var Container = createjs.Container;

module.exports = createSubClass(Container, 'Hero', {
    initialize: Hero$initialize,
    fire: Hero$fire
});


function Hero$initialize(name, x, y) {
    Container.prototype.initialize.apply(this, arguments);
    this.name = name;
    this.x = x;0
    this.y = y;

    setupDisplay.call(this);
}


function setupDisplay() {
    this.body = new createjs.Shape();
    this.body.graphics.beginFill('green').drawRect(0, 0, 50, 50);
    this.addChild(this.body);
}

function Hero$fire() {
    console.log('Hero fire ' + this.name);
}
