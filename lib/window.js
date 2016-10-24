var robot = require('robot-js');

var Nox = robot.Process.getList('Nox\.exe')[0];
var NoxWindows = Nox.getWindows();
var NoxMainWindow = NoxWindows[NoxWindows.length-1];
var NoxMainWindowBounds = NoxMainWindow.getBounds();

module.exports = NoxMainWindow;