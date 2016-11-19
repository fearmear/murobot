var robot = require('robot-js');
var mouse = robot.Mouse();

module.exports = function swipe(pos1, pos2){
    console.log(arguments)
    robot.Mouse.setPos(pos1.x, pos1.y);
    mouse.press(robot.BUTTON_LEFT);
    robot.Mouse.setPos(pos2.x, pos2.y);
    mouse.release(robot.BUTTON_LEFT);
}