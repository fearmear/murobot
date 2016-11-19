#!/usr/bin/env node

require('./window');
var tap = require('./utils/tap');
var positions = require('./conf/positions');

tap(positions.noWindows.system);
tap(positions.noWindows.system.meditation);
tap(positions.meditationWindow.zen);
tap(positions.meditationWindow.close);

process.exit(0);