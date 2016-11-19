var p = {
    Nox: {
        game: {
            x: 1232, y: 309,
            ifColor: { r: 245, g: 73, b: 8, a: 255 }
        }
    },
    loginScreen: {
        eventPromoWindow: {
            x: 1328, y: 101,
            ifColor: { r: 237, g: 28, b: 36, a: 255 },
            close: {
                x: 1872, y: 93,
                ifColor: { r: 255, g: 255, b: 255, a: 255 }
            }
        },
        start: {
            x: 1458, y: 825,
            ifColor: { r: 110, g: 176, b: 11, a: 255 }
        }
    },
    characterSelectionScreen: {
        characters: [
            {
                x: 290, y: 370,
                ifColor: { r: 108, g: 11, b: 12, a: 255 }
            }
        ],
        start: {
            x: 963, y: 941,
            ifColor: { r: 113, g: 179, b: 14, a: 255 }
        }
    },
    close: {
        x: 1855, y: 62,
        ifColor: { r: 230, g: 205, b: 188, a: 255 }
    },
    noWindows: {
        menuSwitcher: {x: 89, y: 75},
        craft: {x: 636, y: 82},
        quest: {
            x: 1396, y: 73,
            ifColor: { r: 242, g: 72, b: 38, a: 255 }
        },
        pet: {
            x: 1525, y: 78,
            ifColor: { r: 91, g: 75, b: 75, a: 255 }
        },
        directions: {
            top: {x: 0, y: 0},
            bottom: {x: 0, y: 0},
            left: {x: 0, y: 0},
            right: {x: 0, y: 0},
            topRight: {x: 340, y: 797}
        },
        dungeon: {x: 1374, y: 210},
        event: {x: 1245, y: 210},
        autoBattling: {x: 1605, y: 770},
        autoBattlingStatus: {
            x: 1079, y: 261,
            ifColor: { r: 194, g: 140, b: 16, a: 255 }
        },
        exchange: {x: 1608, y: 594},
        arena: {x: 1116, y: 218},
        vip: {x: 432, y: 92},
        inventory: {
            x: 1415, y: 1013,
            ifColor: { r: 91, g: 146, b: 125, a: 255 }
        },
        epicChest: {
            x: 1825, y: 748,
            ifColor: { r: 136, g: 55, b: 193, a: 255 }
        },
        system: {
            x: 1373, y: 84,
            meditation: {x: 1178, y: 248}
        },
        map: {x: 1745, y: 203},
        questLog: {
            dailyQuest: {
                x: 147, y: 550,
                ifColor: { r: 3, g: 245, b: 6, a: 255 }
            },
            targetQuest: {
                x: 106, y: 554,
                ifColor: { r: 5, g: 152, b: 3, a: 255 }
            },
            switcher: {
                x: 377, y: 559,
                daily: {x: 464, y: 557},
                target: {x: 579, y: 561}
            }
        }
    },
    petWindow: {
        capture: {
            x: 1143, y: 340,
            ifColor: { r: 41, g: 25, b: 25, a: 255 },
            isFree: {
                x: 801, y: 903,
                ifColor: { r: 44, g: 36, b: 32, a: 255 }
            },
            captureX1: {
                x: 709, y: 978,
                ifColor: { r: 94, g: 145, b: 2, a: 255 }
            },
            confirm: {
                x: 1542, y: 968,
                ifColor: { r: 95, g: 145, b: 5, a: 255 }
            },
            petStorage: {
                x: 1637, y: 63,
                ifColor: { r: 51, g: 34, b: 34, a: 255 }
            }
        }
    },
    petStorageWindow: {
        slot1: {
            x: 617, y: 658
        }
    },
    victoryDialog: {
        confirm: {
            x: 1014, y: 861,
            ifColor: { r: 90, g: 140, b: 1, a: 255 }
        }
    },
    dungeonRewardDialog: {
        card3: {
            x: 1091, y: 804
        },
        claimDisabled: {
            x: 1557, y: 926,
            ifColor: {r: 47, g: 72, b: 0, a: 255 }
        },
        claim: {
            x: 1560, y: 918,
            ifColor: { r: 95, g: 146, b: 3, a: 255 }
        }
    },
    questWindow: {
        close: {
            x: 1855, y: 61,
            ifColor: { r: 232, g: 207, b: 190, a: 255 }
        },
        daily: {
            x: 116, y: 369,
            normalExp: {
                x: 1355, y: 949,
                ifColor: { r: 94, g: 143, b: 3, a: 255 }
            },
            x2Exp: {x: 1695, y: 983},
            upgrade: {
                x: 1695, y: 817,
                ifColor: { r: 93, g: 143, b: 3, a: 255 }
            },
            completeAll: {
                x: 678, y: 593,
                ifColor: { r: 16, g: 135, b: 2, a: 255 }
            },
            go: {
                x: 1683, y: 985,
                ifColor: { r: 53, g: 92, b: 0, a: 255 }
            }
        },
        target: {
            x: 114, y: 503,
            go: {
                x: 1497, y: 923,
                ifColor: { r: 95, g: 146, b: 2, a: 255 }
            },
            complete: {
                x: 1497, y: 923,
                ifColor: { r: 95, g: 146, b: 2, a: 255 }
            }
        }
    },
    battleWinDialog: {
        close: {x: 1470, y: 89},
        normalExp: {x: 536, y: 756},
        x2Exp: {x: 821, y: 753},
        x3Exp: {x: 1091, y: 752},
        accept: {
            x: 988, y: 931,
            ifColor: { r: 97, g: 147, b: 7, a: 255 }
        }
    },
    insideDungeon: {
        exit: {
            x: 1527, y: 48,
            ifColor: { r: 228, g: 186, b: 96, a: 255 }
        }
    },
    mapWindow: {
        worldMap: {
            x: 164, y: 186,
            lorencia: {x: 839, y: 568}
        },
        areaMap: {
            x: 169, y: 301,
            npc: {x: 1632, y: 176},
            monster: {x: 1625, y: 261},
            lorencia: {
                npc: {
                    littleGirlAmy: {x: 1570, y: 786}
                }
            },
            colosseum: {
                monster: [
                    {},
                    {},
                    {},
                    {},
                    {x: 1574, y: 600}
                ]
            },
            kalima: {
                monster: {
                    kundunsIllusion: {
                        x: 1556, y: 784
                    }
                }
            }
        },
        close: {
            x: 1850, y: 60,
            ifColor: { r: 230, g: 205, b: 188, a: 255 }
        }
    },
    dialogWindow: {
        close: {x: 1701, y: 369}
    },
    meditationWindow: {
        zen: {x: 694, y: 633},
        close: {x: 1494, y: 124}
    },
    characterWindow: {
        inventory: {
            x: 1415, y: 1013,
            disassemble: {
                x: 1199, y: 987,
                disassembleDialog: {
                    disassemble: {x: 439, y: 981}
                }
            }
        }
    },
    vipWindow: {
        features: {
            x: 703, y: 196,
            potionShop: {x: 1483, y: 579}
        }
    },
    arenaRewardsWindow: {
        claim: {x: 289, y: 914}
    },
    potionShopWindow: {
        largeHpPotion: {x: 344, y: 418},
        smallMpPotion: {x: 852, y: 415},
        countDialog: {
            max: {x: 1212, y: 702},
            buy: {x: 1422, y: 776},
            close: {x: 1337, y: 188}
        } 
    },
    arenaWindow: {
        ranking: {x: 575, y: 230},
        reward: {x: 259, y: 230},
        close: {x: 1776, y: 77}
    },
    rankingWindow: {
        zen: {x: 164, y: 429},
        arena: {x: 259, y: 230},
        positions: [
            {x: 802, y: 263},
            {x: 794, y: 342},
            {x: 792, y: 422},
            {x: 809, y: 500},
            {x: 822, y: 581},
            {x: 677, y: 672},
            {x: 713, y: 752},
            {x: 716, y: 828}
        ],
        cheer: {x: 1555, y: 956},
        announcementDialog: {
            confirm: {
                x: 1149, y: 707,
                ifColor: { r: 92, g: 142, b: 1, a: 255 }
            }
        }
    },
    exchangeWindow: {
        close: {x: 1713, y: 93},
        exchange: {
            x: 1451, y: 864,
            ifColor: { r: 92, g: 142, b: 3, a: 255 }
        },
        diamonds: {x: 458, y: 400},
        boundDiamonds: {
            x: 1026, y: 722,
            ifColor: { r: 198, g: 5, b: 5, a: 255 } 
        },
        zen: {
            x: 1525, y: 721,
            ifColor: { r: 177, g: 7, b: 6, a: 255 }
        }
    },
    craftWindow: {
        accessTicket: {
            x: 164, y: 183,
            devilSquareTicket: {x: 1558, y: 244},
            bloodCastleCloak: {x: 1531, y: 428},
            craft: {x: 781, y: 983}
        },
        fruit: {
            x: 164, y: 312,
            fruit: {x: 1558, y: 244},
            craft: {x: 781, y: 983}
        }
    },
    storyWindow: {
        enableSweep: {x: 213, y: 1008},
        selectNormal: {x: 877, y: 534},
        selectElite: {x: 1270, y: 534},
        selectHell: {x: 1670, y: 534},
        sweep: {
            x: 1311, y: 981,
            ifColor: { r: 92, g: 142, b: 2, a: 255 }
        },
        enter: {x: 1297, y: 1003}
    },
    dailyEventWindow: {
        enter: {x: 1617, y: 1003}
    },
    eventWindow: {
        dailyEvent: {
            x: 164, y: 183,
            screens: [
                {
                    x: 1000, y: 983,
                    list: [
                        {title: 'Devil Square', x: 490, y: 540},
                        {title: 'Blood Castle', x: 910, y: 540},
                        {title: 'Angel Temple', x: 1290, y: 540},
                        {title: 'Chaos Castle', x: 1660, y: 540}
                    ]
                },
                {
                    x: 1086, y: 983,
                    list: [
                        {title: 'Illusion Temple', x: 490, y: 540}
                    ]
                }
            ]
        },
        worldBoss: {
            x: 0, y: 0
        },
        goldenForces: {
            x: 0, y: 0
        },
        vipOnly: {
            x: 0, y: 0
        },
        colosseum: {
            x: 170, y: 670,
            enter: {x: 1695, y: 969}
        },
        crystalMine: {
            x: 0, y: 0
        }
    },
    dailyDungeonWindow: {
        close: {
            x: 1857, y: 64,
            ifColor: { r: 230, g: 197, b: 180, a: 255 }
        },
        enter: {x: 1617, y: 1001}
    },
    announcementDialog: {
        confirm: {
            x: 809, y: 668
        },
        cancel: {x: 1105, y: 665},
        close: {x: 1248, y: 376},
    },
    dungeonWindow: {
        storyDungeon: {
            x: 164, y: 183,
            screens: [
                {
                    x: 919, y: 983,
                    list: [
                        {title: 'Death King Chapel',
                            x: 529, y: 430,
                            ifNotColor: { r: 17, g: 12, b: 8, a: 255 }
                        },
                        {title: 'Secret Forest',
                            x: 907, y: 431,
                            ifNotColor: { r: 18, g: 12, b: 9, a: 255 } 
                        },
                        {title: 'Ice Queen Palance',
                            x: 1289, y: 431,
                            ifNotColor: { r: 16, g: 12, b: 8, a: 255 }
                        },
                        {title: 'Gorgon Castle', 
                            x: 1667, y: 429,
                            ifNotColor: { r: 16, g: 12, b: 8, a: 255 }
                        }
                    ]
                },
                {
                    x: 1000, y: 983,
                    list: [
                        {title: 'Balrog Castle',
                            x: 529, y: 430,
                            ifNotColor: { r: 17, g: 12, b: 8, a: 255 }
                        },
                        {title: 'Hydra Den',
                            x: 907, y: 431,
                            ifNotColor: { r: 18, g: 12, b: 9, a: 255 } 
                        },
                        {title: 'Flame Cave',
                            x: 1289, y: 431,
                            ifNotColor: { r: 16, g: 12, b: 8, a: 255 }
                        },
                        {title: 'Phoenix Chapel', 
                            x: 1667, y: 429,
                            ifNotColor: { r: 16, g: 12, b: 8, a: 255 }
                        }
                    ]
                }, 
                {
                    x: 1085, y: 983,
                    list: [
                        {title: 'Tranquil Forest',
                            x: 529, y: 430,
                            ifNotColor: { r: 17, g: 12, b: 8, a: 255 }
                        },
                        {title: 'Ancient Coast',
                            x: 907, y: 431,
                            ifNotColor: { r: 18, g: 12, b: 9, a: 255 } 
                        },
                        {title: 'Energy Storage',
                            x: 1289, y: 431,
                            ifNotColor: { r: 16, g: 12, b: 8, a: 255 }
                        }
                    ]
                }
            ]
        },
        dailyDungeon: {
            x: 162, y: 308,
            expDungeon: {x: 522, y: 459},
            zenDungeon: {x: 907, y: 485}
        },
        partyDungeon: {
            x: 145, y: 421,
            quickJoin: {
                x: 1721, y: 765,
                ifColor: { r: 92, g: 143, b: 0, a: 255 },
                preparation: {
                    x: 1715, y: 773
                }
            },
            start: {
                x: 1721, y: 765,
                ifColor: { r: 92, g: 143, b: 0, a: 255 }
            },
            create: {
                x: 1726, y: 950,
                dialog: {
                    confirm: {x: 1278, y: 700}
                }
            },
            leaveParty: {
                x: 1726, y: 950
            },
            kalima: {
                x: 445, y: 336
            },
            corpsOnslaught: {
                x: 1115, y: 365
            },
            labirynthOfDimensions: {x: 0, y: 0}
        },
        endlessTower: {
            x: 159, y: 543,
            sweep: {x: 1434, y: 973},
            accept: {x: 1718, y: 972},
            challenge: {x: 1718, y: 972}
        }
    }
};

module.exports = p;