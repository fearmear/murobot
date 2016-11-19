#!/usr/bin/env node

require('./window');
var robot = require('robot-js');
var tap = require('./utils/tap')
var positions = require('./conf/positions');
var ifColor = require('./utils/ifColor');

// TODO: shout /world "gogo corps"

tap(positions.noWindows.dungeon);
tap(positions.dungeonWindow.partyDungeon);
tap(positions.dungeonWindow.partyDungeon.corpsOnslaught);
if (ifColor(positions.dungeonWindow.partyDungeon.quickJoin)) {
    tap(positions.dungeonWindow.partyDungeon.quickJoin);
    tap(positions.dungeonWindow.partyDungeon.quickJoin.preparation);
    common()
} else {
    tap(positions.dungeonWindow.partyDungeon.create);
    tap(positions.dungeonWindow.partyDungeon.create.dialog.confirm);
    common();
}

function common(){
    while (true) {
        if (!ifColor(positions.dailyDungeonWindow.close)) {
            break;
        }
        robot.Timer.sleep(5000);
    }
    tap(positions.noWindows.autoBattling);
    while (true) {
        if (ifColor(positions.victoryDialog.confirm)) {
            tap(positions.victoryDialog.confirm);
            tap(positions.insideDungeon.exit);
            robot.Timer.sleep(2500);
            process.exit(0);
            break;
        }
    }
}