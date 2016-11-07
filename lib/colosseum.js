#!/usr/bin/env node

require('./window');
var robot = require('robot-js');
var tap = require('./utils/tap');
var positions = require('./conf/positions');

const EVENT_DURATION = 1800000; // 30m

tap(positions.noWindows.event);
tap(positions.eventWindow.colosseum);
tap(positions.eventWindow.colosseum.enter);

robot.Timer.sleep(2500);

tap(positions.noWindows.map);
tap(positions.mapWindow.areaMap);
tap(positions.mapWindow.areaMap.monster);

robot.Timer.sleep(100);

tap(positions.mapWindow.areaMap.colosseum.monster[4]);
tap(positions.close);

var disassembleEvery = 30000; // 30s
var disassembleCount = EVENT_DURATION/disassembleEvery;

while (disassembleCount > 0) {
    tap(positions.noWindows.inventory);
    tap(positions.characterWindow.inventory);
    tap(positions.characterWindow.inventory.disassemble);
    tap(positions.characterWindow.inventory.disassemble.disassembleDialog.disassemble);
    tap(positions.close);
    robot.Timer.sleep(disassembleEvery);
    disassembleCount--;
}