
const EventEmitter = require('events');
var eventEmitter = new EventEmitter();
eventEmitter.on('customEvent', (msg) => {
    console.log(msg);
});
module.exports = eventEmitter;