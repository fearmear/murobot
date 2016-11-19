var robot = require('robot-js');

module.exports = function getNox(){
    var prcs = robot.Process.getList('Nox\.exe')[0];
    var windows = prcs ? prcs.getWindows() : [];
    return {
        process: prcs,
        window: windows[windows.length - 1]
    };
};