#!/usr/bin/env node

// Launch every 30m+15min +1m55s until 4 times a day condition is met

const MAX_EVENT_DURATION = 480000; // 8m
const LOADING_SCREEN_DURATION = 3000;

var robot = require('robot-js');

require('./window');
var positions = require('./conf/positions');
var tap = require('./utils/tap');

tap(positions.noWindows.event);
tap(positions.eventWindow.dailyEvent.screens[0].list.filter((item) => item.title === 'Devil Square')[0]);
tap(positions.dailyEventWindow.enter);
tap(positions.dailyEventWindow.enter);

// Debug
tap(positions.close); // close Daily Event dialog
tap(positions.close); // close Event dialog

// Wait for 5s to ensure the game has loaded
robot.Timer.sleep(5000);

tap(positions.noWindows.autoBattling);

robot.Timer.sleep(MAX_EVENT_DURATION + LOADING_SCREEN_DURATION);

tap(positions.battleWinDialog.normalExp);
tap(positions.battleWinDialog.accept);