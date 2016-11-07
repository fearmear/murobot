var robot = require('robot-js');

var Nox = robot.Process.getList('Nox\.exe')[0];
var NoxWindows = Nox.getWindows();
var NoxMainWindow = NoxWindows[NoxWindows.length-1];
var NoxMainWindowBounds = NoxMainWindow.getBounds();

NoxMainWindow.setTopMost(true);
NoxMainWindow.setTopMost(false);

if (NoxWindows.length === 0) {
    console.error('No Nox windows found.');
    process.exit(1);
}

function focus(){
    NoxMainWindow.setTopMost(true);
    NoxMainWindow.setTopMost(false);
}

focus();

module.exports = {
    focus: focus
};