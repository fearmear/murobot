#!/usr/bin/env node

require('./window');
var robot = require('robot-js');
var tap = require('./utils/tap');
var positions = require('./conf/positions');

const LOADING_SCREEN_DURATION = 2500;
const MAX_EVENT_DURATION = 420000; // 8m
const AVG_EVENT_DURATION = 360000; // 6m

tap(positions.noWindows.dungeon);
tap(positions.dungeonWindow.dailyDungeon);
tap(positions.dungeonWindow.dailyDungeon.zenDungeon);
tap(positions.dailyDungeonWindow.enter);

robot.Timer.sleep(LOADING_SCREEN_DURATION);

tap(positions.noWindows.autoBattling);

robot.Timer.sleep(AVG_EVENT_DURATION);

tap(positions.insideDungeon.exit);
tap(positions.announcementDialog.confirm);

robot.Timer.sleep(LOADING_SCREEN_DURATION);

// TODO: Collect zen from the ground