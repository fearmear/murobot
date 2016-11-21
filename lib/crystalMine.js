#!/usr/bin/env node

require('./window');
var robot = require('robot-js');
var tap = require('./utils/tap');
var ifColor = require('./utils/ifColor');
var positions = require('./conf/positions');

const LOADING_SCREEN_DURATION = 3500;

function enterLocation(){
    tap(positions.noWindows.event);
    tap(positions.eventWindow.crystalMine);
    tap(positions.eventWindow.enter);

    robot.Timer.sleep(LOADING_SCREEN_DURATION);
}

function goToCrystal(){
    tap(positions.noWindows.map);
    tap(positions.mapWindow.areaMap);
    tap(positions.mapWindow.areaMap.monster);
    tap(positions.mapWindow.areaMap.crystalMine.monster.greenCrystalsLarge);
    tap(positions.mapWindow.close);
}

enterLocation();
goToCrystal();


var i = 0;
while (true) {
    if (i === 900) { // 30m
        tap(positions.insideDungeon.exit);
        process.exit(0);
    }
    i++;
    robot.Timer.sleep(2000);
    if (ifColor(positions.killedYouScreen.returnToSafeArea)) {
        tap(positions.killedYouScreen.returnToSafeArea);
        goToCrystal();
    } else if (ifColor(positions.noWindows.autoBattlingStatus)) {
        if (!ifColor(positions.crystalMine.collectingProgressBar)) {
            tap(positions.crystalMine.aboveCharacter);
        }
        if (!ifColor(positions.crystalMine.collectingProgressBar)) {
            tap(positions.crystalMine.belowCharacter);
        }
        if (!ifColor(positions.crystalMine.collectingProgressBar)) {
            tap(positions.crystalMine.leftOfCharacter);
        }
        if (!ifColor(positions.crystalMine.collectingProgressBar)) {
            tap(positions.crystalMine.rightOfCharacter);
        }
    }
}
