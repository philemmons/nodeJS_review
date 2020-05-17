// https://nodejs.org/dist/latest-v12.x/docs/api/events.html

//Events

//Core building Block of Node.js - Class:EventEmitter !!

const EventEmitter = require('events');
// Uppercase first word of a variable name is a CLASS with methods.
// A class is a container with related method and properties.

//create an instance of this Class
//eg class - human, object - john

// baked into class
//const emitter = new EventEmitter();

// registered a listener - original
//emitter.on('messageLogged', function(arg){ // e, eventArg

/* baked into class
// with ES6 arrow function =>
emitter.on('messageLogged', (arg) => {
  console.log('Listener Called', arg);
});// Note the semi-colon
*/

// raised an event
//emitter.emit('messageLogged'); // making a noise, porduce something - a signal

//sequence is important
// as the emit function calls over the listener asynchronously.

// Event Arguments

// emitter.emit('messageLogged', { id: 1, url: 'https://' }); 
// moved to logger.js - the logger module emits or signals an event

const Logger = require('./logger_2');
const logger = new Logger();

logger.on('messageLogged', (arg) => {
  console.log('Listener Called', arg);
});// Note the semi-colon

logger.log('message');

// add event arguements, encapulate them in an object!

// raise: logging (data: message)

// Extending EventEmitter

