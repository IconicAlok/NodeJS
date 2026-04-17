const logEvents = require('./logEvents.js')

const eventEmitter = require('events');

class MyEmitter extends eventEmitter {};

// initalize object 
const myEmitter = new MyEmitter();

// add listner for log event
myEmitter.on('log', (msg) => logEvents(msg));

setTimeout(() =>{
    //Emit event
    myEmitter.emit('log', 'Log event Emited!')
}, 2000);