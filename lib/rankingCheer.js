#!/usr/bin/env node

require('./window');
var tap = require('./utils/tap')
var swipe = require('./utils/swipe')
var positions = require('./conf/positions');
var ifColor = require('./utils/ifColor');

// Hard-coded to 18 cheers

tap(positions.noWindows.arena);
tap(positions.arenaWindow.ranking);
tap(positions.rankingWindow.arena);

cheer();

swipe(
    positions.rankingWindow.positions[3],
    positions.rankingWindow.positions[0]
);

cheer();

function cheer(){
    positions.rankingWindow.positions.forEach((position) => {
        tap(position);
        tap(positions.rankingWindow.cheer);
        if (ifColor(positions.rankingWindow.announcementDialog.confirm)) {
            tap(positions.rankingWindow.announcementDialog.confirm);
        }
    });
}

tap(positions.close);

process.exit(0);