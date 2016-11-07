#!/usr/bin/env node

// Launch every 30m +1m55s until 4 times a day condition is met

const MAX_EVENT_DURATION = 480000; // 8m
const AVG_EVENT_DURATION = 300000; // 5m
const LOADING_SCREEN_DURATION = 2500;

var robot = require('robot-js');

var window = require('./window');
var positions = require('./conf/positions');
var tap = require('./utils/tap');

tap(positions.noWindows.event);
tap(positions.eventWindow.dailyEvent.screens[0].list.filter((item) => item.title === 'Blood Castle')[0]);
tap(positions.dailyEventWindow.enter);
tap(positions.dailyEventWindow.enter);

// Debug
// tap(positions.close); // close Daily Event dialog
// tap(positions.close); // close Event dialog

// Loading screen
robot.Timer.sleep(LOADING_SCREEN_DURATION);

// Wait for event to start
robot.Timer.sleep(2500);

// Hold left thumb top right for 10s to make character move inside
var mouse = robot.Mouse();
robot.Mouse.setPos(positions.noWindows.directions.topRight.x, positions.noWindows.directions.topRight.y);
mouse.press(robot.BUTTON_LEFT);
robot.Timer.sleep(10000);
mouse.release(robot.BUTTON_LEFT);

tap(positions.noWindows.autoBattling);

robot.Timer.sleep(MAX_EVENT_DURATION + LOADING_SCREEN_DURATION);

window.focus();

tap(positions.battleWinDialog.normalExp);
tap(positions.battleWinDialog.accept);