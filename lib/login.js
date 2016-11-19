#!/usr/bin/env node

require('./window');
var process = require('process');
var robot = require('robot-js');
var tap = require('./utils/tap');
var ifColor = require('./utils/ifColor');
var positions = require('./conf/positions');

while (true) {
    robot.Timer.sleep(3000);
    if (ifColor(positions.loginScreen.eventPromoWindow) &&
        ifColor(positions.loginScreen.eventPromoWindow.close)) {
        tap(positions.loginScreen.eventPromoWindow.close);
    // } else if () {
    // handle another window 
    } else {
        tap(positions.loginScreen.start);
        robot.Timer.sleep(1000);
        process.exit(0);
    }
}