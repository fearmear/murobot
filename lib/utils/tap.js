var humanTap = require('./humanTap');

module.exports = function tap(pos, sleep0, sleep1){
    console.log('tap', pos.x, pos.y);
    humanTap(pos.x, pos.y);
    if (sleep0 || sleep1) {
        humanTap(pos.x, pos.y);
    }
}