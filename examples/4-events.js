const EventEmitter = require('events');

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();

myEmitter.on('event', (a, b) => {
  console.log('an event occurred!', a, b);
});

myEmitter.emit('event', '1', '2');
