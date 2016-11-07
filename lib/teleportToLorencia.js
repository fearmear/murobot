#!/usr/bin/env node

require('./window');
var robot = require('robot-js');
var tap = require('./utils/tap');
var positions = require('./conf/positions');

tap(positions.noWindows.map);
tap(positions.mapWindow.worldMap);
tap(positions.mapWindow.worldMap.lorencia);
tap(positions.close);

robot.Timer.sleep(2500);

tap(positions.noWindows.map);
tap(positions.mapWindow.areaMap);
tap(positions.mapWindow.areaMap.npc);
tap(positions.mapWindow.areaMap.lorencia.npc.littleGirlAmy);
tap(positions.close);

robot.Timer.sleep(1000);

tap(positions.dialogWindow.close);