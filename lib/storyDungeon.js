#!/usr/bin/env node

var robot = require('robot-js');

require('./window');
var positions = require('./conf/positions');
var tap = require('./utils/tap');
var repeat = require('./utils/repeat');
var ifColor = require('./utils/ifColor');
var ifNotColor = require('./utils/ifNotColor');

var sweepEnabled = false;
tap(positions.noWindows.dungeon);
tap(positions.dungeonWindow.storyDungeon);
positions.dungeonWindow.storyDungeon.screens.forEach((screen) => {
    tap(screen);
    screen.list.forEach((listItem) => {
        if (ifNotColor(listItem)) {
            tap(listItem);
            if (!sweepEnabled) {
                tap(positions.storyWindow.enableSweep);
                sweepEnabled = true;
            }
            tap(positions.storyWindow.selectNormal);
            if (ifColor(positions.storyWindow.sweep)) {
                repeat(() => tap(positions.storyWindow.sweep), 3);
            }
            tap(positions.storyWindow.selectElite);
            if (ifColor(positions.storyWindow.sweep)) {
                repeat(() => tap(positions.storyWindow.sweep), 2);
            }
            tap(positions.storyWindow.selectHell);
            if (ifColor(positions.storyWindow.sweep)) {
                repeat(() => tap(positions.storyWindow.sweep), 1);
            }
            tap(positions.close);
        }
    });
});

tap(positions.close);

process.exit(0);