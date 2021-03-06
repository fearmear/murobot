#!/usr/bin/env node

var process = require('process');

require('./window');
var robot = require('robot-js');
var tap = require('./utils/tap');
var swipe = require('./utils/swipe');
var positions = require('./conf/positions');
var ifColor = require('./utils/ifColor');

const LOADING_SCREEN_DURATION = 3000;

tap(positions.noWindows.menuSwitcher);
tap(positions.noWindows.quest, 200, 200);
tap(positions.questWindow.daily);
if (ifColor(positions.questWindow.daily.normalExp)) {
    tap(positions.questWindow.daily.normalExp);
}
tap(positions.questWindow.daily.upgrade);
tap(positions.questWindow.daily.go);
robot.Timer.sleep(LOADING_SCREEN_DURATION);
tap(positions.noWindows.menuSwitcher, 200, 200);

// swipe once to eliminate position difference
swipe(positions.noWindows.questLog.targetQuest, positions.noWindows.questLog.switcher);
tap(positions.noWindows.questLog.switcher);
tap(positions.noWindows.questLog.switcher.daily);

while (true) {
    if (ifColor(positions.noWindows.questLog.dailyQuest)) {
        tap(positions.noWindows.questLog.dailyQuest);
        tap(positions.questWindow.daily);
        if (ifColor(positions.questWindow.daily.normalExp) || ifColor(positions.questWindow.daily.upgrade)) {
            tap(positions.questWindow.daily.normalExp);
            tap(positions.questWindow.daily.upgrade, 600, 800);
            if (ifColor(positions.questWindow.daily.go)) {
                tap(positions.questWindow.daily.go);
            }
            if (ifColor(positions.questWindow.close)) {
                tap(positions.questWindow.close);
                tap(positions.noWindows.map);
                tap(positions.mapWindow.worldMap);
                tap(positions.mapWindow.worldMap.lorencia);
                if (ifColor(positions.mapWindow.close)) {
                    // window didn't close means character is in lorencia already
                    tap(positions.mapWindow.close);
                }
                robot.Timer.sleep(LOADING_SCREEN_DURATION);
                process.exit(0);
            }
        }
    }
    robot.Timer.sleep(5000);
}

// handle complete scenario
// handle death scenario