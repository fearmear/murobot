#!/usr/bin/env node

require('./window');
var tap = require('./utils/tap')
var repeat = require('./utils/repeat')
var positions = require('./conf/positions')

// Teleport into a safe area before (e.g. lorencia)?

const DIAMONS_REPEAT = 14;
const BOUND_DIAMONDS_REPEAT = 8;
const ZEN_REPEAT = 8;

tap(positions.noWindows.exchange);
// tap(positions.exchangeWindow.diamonds);
// repeat(() => tap(positions.exchangeWindow.exchange), DIAMONS_REPEAT);
tap(positions.exchangeWindow.boundDiamonds);
repeat(() => tap(positions.exchangeWindow.exchange), BOUND_DIAMONDS_REPEAT);
tap(positions.exchangeWindow.zen);
repeat(() => tap(positions.exchangeWindow.exchange), ZEN_REPEAT);

tap(positions.exchangeWindow.close);