#!/usr/bin/env node

// Launch every 30m+15min +1m55s until 4 times a day condition is met

var robot = require('robot-js');

require('./window');
var positions = require('./conf/positions');
var tap = require('./utils/tap');

tap(positions.noWindows.event);
tap(positions.eventWindow.dailyEvent.screens[0].list.filter((item) => item.title === 'Devil Square')[0]);
tap(positions.dailyEventWindow.enter);

// Debug
tap(positions.close); // close Daily Event dialog
tap(positions.close); // close Event dialog

// Wait for 5s to ensure the game has loaded
robot.Timer.sleep(3000);

tap(positions.noWindows.autoBattling);