var child_process = require('child_process');
var robot = require('robot-js');
var tap = require('./utils/tap.js');
var keyboard = robot.Keyboard();
var Nox = require('./nox');

const FULLSCREEN_WIDTH = 1920;
const FULLSCREEN_HEIGHT = 1080;

var Emulator = Nox.get();

if (!Emulator.process || !Emulator.window) {
    console.log('No Emulator found. Lauching... (~56s)');
    Emulator = Nox.spawn();
    while (true) {
        if (isFullScreen()) {
            break;
        } else {
            toggleFullScreen();
        }
        robot.Timer.sleep(1000);
    }
    console.log('Joining the game...');
    child_process.spawnSync('cmd.exe', ['/c', 'D:\\dev\\murobot\\join-game.bat']);
} else {
    if (isFullScreen()) {
        setTopMost();
    } else {
        setActive();
        toggleFullScreen();
    }
}

function isFullScreen(){
    var bounds = Emulator.window.getBounds();
    console.log(bounds)
    return bounds.x === 0 && bounds.y === 0 && bounds.w === FULLSCREEN_WIDTH && bounds.h === FULLSCREEN_HEIGHT;
}

function setTopMost(){
    Emulator.window.setTopMost(true);
    Emulator.window.setTopMost(false);
}

function setActive(){
    var bounds = Emulator.window.getBounds();
    setTopMost();
    tap({x: bounds.x, y: bounds.y + bounds.y / 2}, 200, 200);
}

function toggleFullScreen(){
    keyboard.press(robot.KEY_LCONTROL);
    keyboard.click(robot.KEY_5);
    keyboard.release(robot.KEY_LCONTROL);
}

module.exports = {
    isFullScreen: isFullScreen,
    toggleFullScreen: toggleFullScreen,
    setActive: setActive, 
    setTopMost: setTopMost,
    focus: setTopMost
};