#!/usr/bin/env node

require('./window');
var robot = require('robot-js');
var tap = require('./utils/tap');
var positions = require('./conf/positions');

const EVENT_DURATION = 3600000; // 1h
const TAP_ON_QUEST_EVERY = 60000; // 60s
const LOADING_SCREEN_DURATION = 2500;

var iterationsCount = EVENT_DURATION/TAP_ON_QUEST_EVERY;

tap(positions.noWindows.questLog.dailyTarget.switcher);
tap(positions.noWindows.questLog.dailyTarget.switcher.target);

tap(positions.noWindows.menuSwitcher);
tap(positions.noWindows.quest);
tap(positions.questWindow.target);
tap(positions.questWindow.target.complete);
tap(positions.questWindow.target.go);
tap(positions.noWindows.menuSwitcher, 200, 200);

robot.Timer.sleep(LOADING_SCREEN_DURATION);

while (iterationsCount > 0) {
    tap(positions.noWindows.questLog.dailyTarget);
    tap(positions.questWindow.target.complete);
    tap(positions.close);
    tap(positions.close); // cancel if map opened
    tap(positions.noWindows.questLog.dailyTarget);
    robot.Timer.sleep(TAP_ON_QUEST_EVERY);
    iterationsCount--;
}

// handle death scenario