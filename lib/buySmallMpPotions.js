#!/usr/bin/env node

require('./window');
var tap = require('./utils/tap');
var positions = require('./conf/positions')
var repeat = require('./utils/repeat');

// Hard-coded to 2x99
const STACKS = 2;

tap(positions.noWindows.vip);
tap(positions.vipWindow.features);
tap(positions.vipWindow.features.potionShop);
repeat(() => {
    tap(positions.potionShopWindow.smallMpPotion);
    tap(positions.potionShopWindow.countDialog.max);
    tap(positions.potionShopWindow.countDialog.buy);
}, STACKS);

tap(positions.close);
tap(positions.close);