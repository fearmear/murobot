#!/usr/bin/env node

require('./window');
var tap = require('./utils/tap')
var positions = require('./conf/positions');
var ifColor = require('./utils/ifColor');
var robot = require('robot-js');

const LOBBY_COUNTDOWN = 5000;
const LOADING_SCREEN_DURATION = 3000;

tap(positions.noWindows.dungeon);
tap(positions.dungeonWindow.partyDungeon);
tap(positions.dungeonWindow.partyDungeon.kalima);
if (ifColor(positions.dungeonWindow.partyDungeon.createDisabled)) {
    tap(positions.close);
    process.exit(0);
}
tap(positions.dungeonWindow.partyDungeon.create);
tap(positions.dungeonWindow.partyDungeon.create.dialog.confirm);
tap(positions.dungeonWindow.partyDungeon.start);

robot.Timer.sleep(LOBBY_COUNTDOWN + LOADING_SCREEN_DURATION);

tap(positions.noWindows.map);
tap(positions.mapWindow.areaMap);
tap(positions.mapWindow.areaMap.monster);
tap(positions.mapWindow.areaMap.kalima.monster.kundunsIllusion);
tap(positions.mapWindow.close);

while (true) {
    robot.Timer.sleep(5000);
    if (ifColor(positions.dungeonRewardDialog.claimDisabled)) {
        tap(positions.dungeonRewardDialog.card3);
        tap(positions.dungeonRewardDialog.claim);
        tap(positions.noWindows.directions.topRight);
        robot.Timer.sleep(30000); // wait for pickups
        tap(positions.insideDungeon.exit);
        robot.Timer.sleep(LOADING_SCREEN_DURATION);
        process.exit(0);
    }
}