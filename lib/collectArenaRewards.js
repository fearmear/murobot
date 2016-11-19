#!/usr/bin/env node

require('./window');
var tap = require('./utils/tap');
var positions = require('./conf/positions');

tap(positions.noWindows.arena);
tap(positions.arenaWindow.reward);
tap(positions.arenaRewardsWindow.claim);
tap(positions.close);
tap(positions.arenaWindow.close);

process.exit(0);