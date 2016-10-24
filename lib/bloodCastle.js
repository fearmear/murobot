#!/usr/bin/env node

// Launch every 30m +1m55s until 4 times a day condition is met

var robot = require('robot-js');

require('./window');
var positions = require('./conf/positions');
var tap = require('./utils/tap');

tap(positions.noWindows.event);
tap(positions.eventWindow.dailyEvent.screens[0].list.filter((item) => item.title === 'Blood Castle')[0]);
tap(positions.dailyEventWindow.enter);

// Debug
// tap(positions.close); // close Daily Event dialog
// tap(positions.close); // close Event dialog

// Hold left thumb top right for 10s to make character move inside
var mouse = robot.Mouse();
robot.Mouse.setPos(positions.noWindows.directions.topRight.x, positions.noWindows.directions.topRight.y);
mouse.press(robot.BUTTON_LEFT);
robot.Timer.sleep(6000);
mouse.release(robot.BUTTON_LEFT);

tap(positions.noWindows.autoBattling);