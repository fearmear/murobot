#!/usr/bin/env node

// Launch every 30m +1m until 4 times a day condition is met

const LOBBY_DURATION = 60000;
const LOADING_SCREEN_DURATION = 2500;

var robot = require('robot-js');

var window = require('./window');
var positions = require('./conf/positions');
var tap = require('./utils/tap');
var ifColor = require('./utils/ifColor');

tap(positions.noWindows.event);
tap(positions.eventWindow.dailyEvent.screens[0].list.filter((item) => item.title === 'Blood Castle')[0]);

robot.Timer.sleep(2000);
tap(positions.dailyEventWindow.enter);
tap(positions.dailyEventWindow.enter);

// Loading screen
robot.Timer.sleep(LOADING_SCREEN_DURATION);

// Wait for event to start
robot.Timer.sleep(LOBBY_DURATION);

// Hold left thumb top right for 10s to make character move inside
var mouse = robot.Mouse();
robot.Mouse.setPos(positions.noWindows.directions.topRight.x, positions.noWindows.directions.topRight.y);
mouse.press(robot.BUTTON_LEFT);
robot.Timer.sleep(10000);
mouse.release(robot.BUTTON_LEFT);

tap(positions.noWindows.autoBattling);

while (true) {
    robot.Timer.sleep(5000);
    if (ifColor(positions.battleWinDialog.accept)) {
        tap(positions.battleWinDialog.x2Exp);
        if (!ifColor(positions.battleWinDialog.accept)) {
            tap(positions.battleWinDialog.normalExp);
        }
        tap(positions.battleWinDialog.accept);
        if (ifColor(positions.insideDungeon.exit)) {
            tap(positions.insideDungeon.exit);
            robot.Timer.sleep(LOADING_SCREEN_DURATION);
        }
        process.exit(0);
        break;
    }
}