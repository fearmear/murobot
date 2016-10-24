var robot = require('robot-js');

module.exports = function humanTap(x, y, sleep0, sleep1){
    robot.Mouse.setPos(x, y);
    robot.Timer.sleep(sleep0 || 200, sleep0 || 500);
    robot.Mouse().click(robot.BUTTON_LEFT);
}