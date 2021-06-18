const HornyCounter = require("./HornyCounter.json");

var Counter = module.exports = {
    count: HornyCounter["count"],
    add: function(x) {
        Counter.count += x;
    },
    sub: function(x) {
        Counter.count -= x;
    }
}