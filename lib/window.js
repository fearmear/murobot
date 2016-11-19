var robot = require('robot-js');

var Nox = robot.Process.getList('Nox\.exe')[0];

if (Nox.length === 0) {
    console.error('No Nox found.');
    process.exit(1);
}

var NoxWindows = Nox.getWindows();
var NoxMainWindow = NoxWindows[NoxWindows.length-1];
var NoxMainWindowBounds = NoxMainWindow.getBounds();

NoxMainWindow.setTopMost(true);
NoxMainWindow.setTopMost(false);

function focus(){
    NoxMainWindow.setTopMost(true);
    NoxMainWindow.setTopMost(false);
}

focus();

module.exports = {
    focus: focus
};