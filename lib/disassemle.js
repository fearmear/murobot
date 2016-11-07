#!/usr/bin/env node

require('./window');
var robot = require('robot-js');
var tap = require('./utils/tap');
var positions = require('./conf/positions');
var ifColor = require('./utils/ifColor');

while (true) {
    if (ifColor(positions.noWindows.inventory)) {
        tap(positions.noWindows.inventory);
        tap(positions.characterWindow.inventory);
        tap(positions.characterWindow.inventory.disassemble);
        tap(positions.characterWindow.inventory.disassemble.disassembleDialog.disassemble);
        tap(positions.close);
        robot.Timer.sleep(30000);
    }
}