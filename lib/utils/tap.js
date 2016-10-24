var humanTap = require('./humanTap');

module.exports = function tap(pos){
    console.log('tap', pos.x, pos.y);
    humanTap(pos.x, pos.y);
}