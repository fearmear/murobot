#!/usr/bin/env node

require('./window');
var robot = require('robot-js');
var tap = require('./utils/tap');
var positions = require('./conf/positions');
var ifColor = require('./utils/ifColor');

const LOADING_SCREEN_DURATION = 2500;

tap(positions.noWindows.dungeon);
tap(positions.dungeonWindow.dailyDungeon);
tap(positions.dungeonWindow.dailyDungeon.expDungeon);
tap(positions.dailyDungeonWindow.enter);

robot.Timer.sleep(LOADING_SCREEN_DURATION);

tap(positions.noWindows.autoBattling);

while (true) {
    robot.Timer.sleep(5000);
    if (ifColor(positions.dungeonRewardDialog.claimDisabled)) {
        tap(positions.dungeonRewardDialog.card3);
        tap(positions.dungeonRewardDialog.claim);
        tap(positions.insideDungeon.exit);
        robot.Timer.sleep(LOADING_SCREEN_DURATION);
        process.exit(0);
    }
}