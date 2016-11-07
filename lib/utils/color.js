#!/usr/bin/env node

var robot = require('robot-js');
// require('../window');

// Uncomment to set mouse position from the config file
// var positions = require('../conf/positions');
// var newMousePos = positions.questWindow.daily.go;
// robot.Mouse.setPos(newMousePos.x, newMousePos.y);

var output, mousePos, color;

while (true) {
    output = robot.Image();
    mousePos = robot.Mouse.getPos();

    robot.Screen.grabScreen(
        output,
        mousePos.x,
        mousePos.y,
        1,
        1
    );

    color = output.getPixel(0, 0);

    console.log(mousePos, color);

    robot.Clipboard.setText(`x: ${mousePos.x}, y: ${mousePos.y},
ifColor: { r: ${color.r}, g: ${color.g}, b: ${color.b}, a: ${color.a} }`);
}
