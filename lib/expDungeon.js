#!/usr/bin/env node

require('./window');
var robot = require('robot-js');
var tap = require('./utils/tap');
var positions = require('./conf/positions');

const LOADING_SCREEN_DURATION = 2500;
const MAX_EVENT_DURATION = 600000; // 10m
const AVG_EVENT_DURATION = 180000; // 3m

tap(positions.noWindows.dungeon);
tap(positions.dungeonWindow.dailyDungeon);
tap(positions.dungeonWindow.dailyDungeon.expDungeon);
tap(positions.dailyDungeonWindow.enter);

robot.Timer.sleep(LOADING_SCREEN_DURATION);

tap(positions.noWindows.autoBattling);

robot.Timer.sleep(AVG_EVENT_DURATION);

tap(positions.insideDungeon.exit);
tap(positions.insideDungeon.exit); // undo if outside

robot.Timer.sleep(LOADING_SCREEN_DURATION);