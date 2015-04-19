'use strict';

var domReady = require('./util/dom_ready');

var c = createjs;

console.log('Game Started!: EaselJS version: ' + c.EaselJS.version);

domReady(function init() {
    var stage = new c.Stage('main');

    var group = new c.Container();
    group.x = 200;
    group.y = 175;
    group.regX = 100;
    group.regY = 100;
    stage.addChild(group);

    group.on('tick', function (event) {
        this.rotation -= -1;
    });

    var circle = new c.Shape();
    circle.graphics.beginFill('green').drawCircle(0, 0, 50);
    circle.x = 100;
    circle.y = 100;
    group.addChild(circle);

    var square = new c.Shape();
    square.graphics.beginFill('green')
        .drawRect(0, 0, 50, 50)
        .endFill()
        .beginStroke("rgba(0,0,0,1)")
        .moveTo(5, 75)
        .bezierCurveTo(45, 90, 75, 75, -25, -25)
        .endStroke();
    square.x = 200;
    square.y = 100;
    group.addChild(square);


    var introText = new c.Text('Welcome to the game.', '20px Arial', '#ff7700');
    introText.x = 200;
    introText.y = 300;
    introText.lineWidth = 100;
    stage.addChild(introText);

    c.Ticker.timingMode = c.Ticker.RAF;
    c.Ticker.setFPS(60);
    c.Ticker.addEventListener('tick', function(event) {
        stage.update();
    });



});