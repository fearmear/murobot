var robot = require('robot-js');
var child_process = require('child_process');
var getNox = require('./get');

module.exports = function spawn(){
    child_process.spawn('cmd.exe', ['/c', 'C:\\Users\\fearm\\AppData\\Roaming\\Nox\\bin\\Nox.exe']);

    var Nox;

    while (true) {
        robot.Timer.sleep(2500);
        Nox = getNox();
        if (Nox.window) {
            console.log(Nox);
            break;
        }
    }

    return Nox;
};