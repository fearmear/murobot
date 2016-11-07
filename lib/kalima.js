#!/usr/bin/env node

require('./window');
var tap = require('./utils/tap')
var positions = require('./conf/positions');
var ifColor = require('./utils/ifColor');

// create lobby

tap(positions.noWindows.map);
tap(positions.mapWindow.areaMap);
tap(positions.mapWindow.areaMap.monster);
tap(positions.mapWindow.areaMap.kalima.monster.kundunsIllusion);
tap(positions.mapWindow.close);