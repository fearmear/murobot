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
tap(positions.noWindows.craft);
tap(positions.craftWindow.accessTicket);
tap(positions.craftWindow.accessTicket.bloodCastleCloak)
repeat(() => tap(positions.craftWindow.accessTicket.craft), itemsToCraft);
tap(positions.close);
tap(positions.noWindows.menuSwitcher);