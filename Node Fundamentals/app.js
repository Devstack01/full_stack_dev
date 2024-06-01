
const math = require('./math');
const eventEmitter = require('./emitter');

const result = math.square(5);
console.log(`Square of 5 is: ${result}`);

eventEmitter.emit('customEvent', "Custom event was emitted!");
