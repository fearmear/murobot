#!/usr/bin/env node

require('./window');
var robot = require('robot-js');
var tap = require('./utils/tap');
var positions = require('./conf/positions');

const FLOOR = 32;
const FLOOR_SWEEP_TIME = 2000;

tap(positions.noWindows.dungeon);
tap(positions.dungeonWindow.endlessTower);
tap(positions.dungeonWindow.endlessTower.sweep);
tap(positions.announcementDialog.confirm);

robot.Timer.sleep(FLOOR_SWEEP_TIME * FLOOR + 2000);

tap(positions.dungeonWindow.endlessTower.accept);
tap(positions.close);