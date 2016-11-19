#!/usr/bin/env node

require('./window');
var tap = require('./utils/tap');
var positions = require('./conf/positions');
var ifColor = require('./utils/ifColor');
var robot = require('robot-js');

tap(positions.noWindows.menuSwitcher);
tap(positions.noWindows.pet, 200, 200);
tap(positions.petWindow.capture);
if (ifColor(positions.petWindow.capture.isFree)) {
    tap(positions.petWindow.capture.captureX1);
    robot.Timer.sleep(5000);
    tap(positions.petWindow.capture.confirm);
    robot.Timer.sleep(3000);
    tap(positions.petWindow.capture.petStorage);
    robot.Timer.sleep(1000);
    tap(positions.petStorageWindow.slot1, 50, 90);
    tap(positions.petStorageWindow.slot1, 50, 90);
    tap(positions.petStorageWindow.slot1, 50, 90);
    robot.Timer.sleep(500);
    tap(positions.close);
    robot.Timer.sleep(200);
}

tap(positions.close);
tap(positions.noWindows.menuSwitcher);
process.exit(0);