#!/usr/bin/env node

require('./window');
var robot = require('robot-js');
var tap = require('./utils/tap');
var positions = require('./conf/positions');
var ifColor = require('./utils/ifColor');

const LOADING_SCREEN_DURATION = 3000;

tap(positions.noWindows.event);
tap(positions.eventWindow.colosseum);
tap(positions.eventWindow.colosseum.enter);

robot.Timer.sleep(LOADING_SCREEN_DURATION);

tap(positions.noWindows.map);
tap(positions.mapWindow.areaMap);
tap(positions.mapWindow.areaMap.monster);

robot.Timer.sleep(100);

tap(positions.mapWindow.areaMap.colosseum.monster[4]);
tap(positions.close);

while (true) {
    if (!ifColor(positions.insideDungeon.exit)) {
        robot.Timer.sleep(LOADING_SCREEN_DURATION);
        process.exit(0);
    }
    tap(positions.noWindows.inventory);
    tap(positions.characterWindow.inventory);
    tap(positions.characterWindow.inventory.disassemble);
    tap(positions.characterWindow.inventory.disassemble.disassembleDialog.disassemble);
    tap(positions.close);
    robot.Timer.sleep(30000);
}