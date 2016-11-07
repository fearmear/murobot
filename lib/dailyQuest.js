#!/usr/bin/env node

var process = require('process');

require('./window');
var robot = require('robot-js');
var tap = require('./utils/tap');
var positions = require('./conf/positions');
var ifColor = require('./utils/ifColor');

const LOADING_SCREEN_DURATION = 3000;

tap(positions.noWindows.questLog.switcher);
tap(positions.noWindows.questLog.switcher.daily);

tap(positions.noWindows.menuSwitcher);
tap(positions.noWindows.quest, 200, 200);
tap(positions.questWindow.daily);
tap(positions.questWindow.daily.upgrade);
tap(positions.questWindow.daily.go);
robot.Timer.sleep(LOADING_SCREEN_DURATION);
tap(positions.noWindows.menuSwitcher, 200, 200);

while (true) {
    if (ifColor(positions.noWindows.questLog.dailyQuest)) {
        tap(positions.noWindows.questLog.dailyQuest);
        tap(positions.questWindow.daily);
        tap(positions.questWindow.daily.normalExp);
        tap(positions.questWindow.daily.upgrade);
        tap(positions.questWindow.daily.go);
    }
    if (ifColor(positions.close)) {
        // window didn't close means all quests are complete
        // close quest dialog and teleport to Lorencia
        tap(positions.close);
        tap(positions.noWindows.menuSwitcher);
        tap(positions.noWindows.map);
        tap(positions.mapWindow.worldMap);
        tap(positions.mapWindow.worldMap.lorencia);
        if (ifColor(positions.mapWindow.close)) {
            // window didn't close means character is in lorencia already
            tap(positions.mapWindow.close);
        }
        process.exit(0);
    }
    robot.Timer.sleep(5000);
}

// handle complete scenario
// handle death scenario