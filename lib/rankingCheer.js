#!/usr/bin/env node

require('./window');
var tap = require('./utils/tap')
var positions = require('./conf/positions');
var ifColor = require('./utils/ifColor');

// Hard-coded to 10 cheers

tap(positions.noWindows.arena);
tap(positions.arenaWindow.ranking);
tap(positions.rankingWindow.arena);
positions.rankingWindow.positions.forEach((position) => {
    tap(position);
    tap(positions.rankingWindow.cheer);
    if (ifColor(positions.rankingWindow.announcementDialog.confirm)) {
        tap(positions.rankingWindow.announcementDialog.confirm);
    }
});
tap(positions.rankingWindow.zen);
positions.rankingWindow.positions.forEach((position) => {
    tap(position);
    tap(positions.rankingWindow.cheer);
    if (ifColor(positions.rankingWindow.announcementDialog.confirm)) {
        tap(positions.rankingWindow.announcementDialog.confirm);
    }
});
tap(positions.close);