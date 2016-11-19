#!/usr/bin/env node

require('./window');
var tap = require('./utils/tap')
var repeat = require('./utils/repeat')
var positions = require('./conf/positions')
var ifColor = require('./utils/ifColor');

const MAX_RETRIES = 30;

tap(positions.noWindows.exchange);

var boundDiamondsIteration = 0;
tap(positions.exchangeWindow.boundDiamonds, 400, 600);
while (!ifColor(positions.exchangeWindow.boundDiamonds)) {
    tap(positions.exchangeWindow.exchange);
    if (boundDiamondsIteration >= MAX_RETRIES) {
        break;
    }
    boundDiamondsIteration++;
}

tap(positions.exchangeWindow.zen, 400, 600);
var zenIteration = 0;
while (!ifColor(positions.exchangeWindow.zen)) {
    tap(positions.exchangeWindow.exchange);
    if (zenIteration >= MAX_RETRIES) {
        break;
    }
    zenIteration++;
}

tap(positions.exchangeWindow.close);

process.exit(0);