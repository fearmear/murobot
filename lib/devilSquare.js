#!/usr/bin/env node

// Launch every 30m+15min +1m55s until 4 times a day condition is met

const MAX_EVENT_DURATION = 480000; // 8m
const LOADING_SCREEN_DURATION = 3000;

var robot = require('robot-js');

var window = require('./window');
var positions = require('./conf/positions');
var tap = require('./utils/tap');
var ifColor = require('./utils/ifColor');

tap(positions.noWindows.event);
tap(positions.eventWindow.dailyEvent.screens[0].list.filter((item) => item.title === 'Devil Square')[0]);

robot.Timer.sleep(2000);
tap(positions.dailyEventWindow.enter);

robot.Timer.sleep(3000);

tap(positions.noWindows.autoBattling);

while (true) {
    robot.Timer.sleep(5000);
    if (ifColor(positions.battleWinDialog.accept)) {
        tap(positions.battleWinDialog.normalExp);
        tap(positions.battleWinDialog.accept);
        if (ifColor(positions.insideDungeon.exit)) {
            tap(positions.insideDungeon.exit);
            robot.Timer.sleep(LOADING_SCREEN_DURATION);
        }
        process.exit(0);
        break;
    }
}