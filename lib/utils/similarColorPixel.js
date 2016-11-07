#!/usr/bin/env node

var robot = require('robot-js');

function isSimilar(color1, color2){
    var LIMIT = 15;
    var similarR = color1.r < color2.r + LIMIT && color1.r > color2.r - LIMIT;
    var similarG = color1.g < color2.g + LIMIT && color1.g > color2.g - LIMIT;
    var similarB = color1.b < color2.b + LIMIT && color1.b > color2.b - LIMIT;
    var similarA = color1.a < color2.a + LIMIT && color1.a > color2.a - LIMIT;
    return similarR && similarG && similarB && similarA; 
}

module.exports = function(x, y, color2){
    var output = robot.Image();

    robot.Screen.grabScreen(
        output, x, y, 1, 1
    );

    var color1 = output.getPixel(0, 0);
    color2 = robot.Color(color2);
    console.log(color1, color2);

    return isSimilar(color1, color2);
}