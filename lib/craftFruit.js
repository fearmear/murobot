#!/usr/bin/env node

var process = require('process');
var itemsToCraft = parseInt(process.argv[2]);
if (typeof itemsToCraft !== 'number' || isNaN(itemsToCraft)) {
    console.error('Provide item count as an argument');
    process.exit(1);
}

require('./window');
var tap = require('./utils/tap');
var positions = require('./conf/positions')
var repeat = require('./utils/repeat')

tap(positions.noWindows.menuSwitcher);
tap(positions.noWindows.craft, 200, 200);
tap(positions.craftWindow.fruit);
tap(positions.craftWindow.fruit.fruit);
repeat(() => tap(positions.craftWindow.fruit.craft), itemsToCraft);
tap(positions.close);
tap(positions.noWindows.menuSwitcher);

process.exit(0);