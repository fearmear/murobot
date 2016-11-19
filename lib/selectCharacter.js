#!/usr/bin/env node

require('./window');
var robot = require('robot-js');
var tap = require('./utils/tap');
var ifColor = require('./utils/ifColor');
var positions = require('./conf/positions');

const LOADING_SCREEN_DURATION = 3500;

while (true) {
    robot.Timer.sleep(1000);
    if (ifColor(positions.characterSelectionScreen.start)) {
        tap(positions.characterSelectionScreen.characters[0]);
        tap(positions.characterSelectionScreen.start);
        break;
    }
}

robot.Timer.sleep(LOADING_SCREEN_DURATION);

process.exit(0);