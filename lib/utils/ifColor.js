#!/usr/bin/env node

var similarColorPixel = require('./similarColorPixel');

var robot = require('robot-js');

module.exports = function(pos, sleep){
    robot.Timer.sleep(sleep || 250);
    return similarColorPixel(pos.x, pos.y, pos.ifColor);
}