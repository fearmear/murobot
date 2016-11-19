#!/usr/bin/env node

require('../window');
var robot = require('robot-js');
var tap = require('../utils/tap');
var ifColor = require('../utils/ifColor');
var positions = require('../conf/positions');

while (true) {
    robot.Timer.sleep(2000);
    if (ifColor(positions.Nox.game)) {
        tap(positions.Nox.game);
        robot.Timer.sleep(15000); // splash screens
        process.exit(0);
    }
}
