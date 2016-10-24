#!/usr/bin/env node

var robot = require('robot-js');

var window = require('./window');
var positions = require('./conf/positions');
var tap = require('./utils/tap');
var repeat = require('./utils/repeat');

window.setTopMost(true);
window.setTopMost(false);

var sweepEnabled = false;
tap(positions.noWindows.dungeon);
tap(positions.dungeonWindow.storyDungeon);
positions.dungeonWindow.storyDungeon.screens.forEach((screen) => {
    tap(screen);
    screen.list.forEach((listItem) => {
        tap(listItem);
        if (!sweepEnabled) {
            tap(positions.storyWindow.enableSweep);
            sweepEnabled = true;
        }
        tap(positions.storyWindow.selectNormal);
        repeat(() => tap(positions.storyWindow.sweep), 3);
        tap(positions.storyWindow.selectElite);
        repeat(() => tap(positions.storyWindow.sweep), 2);
        tap(positions.storyWindow.selectHell);
        repeat(() => tap(positions.storyWindow.sweep), 1);
        tap(positions.close);
    });
});