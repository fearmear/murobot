module.exports = function repeat(fn, times){
    while (times >= 0) {
        times--;
        fn();
    }
}