
const EventEmitter = require('events');
// const emitter = new EventEmitter(); 
// removed unused var as it was replaced by 'this' in Logger class
// there are two different objects

var url = 'http://mylogger.io/log';

class Logger extends EventEmitter {
    // extends the parent/base class EventEmitter
    // added class functionality
 log(message){  // no function keyword is allowed in a class constructor
  // send an HTTP request
  console.log(message);
  // raise an event
  this.emit('messageLogged', { id: 1, url: 'https://' }); 
}
}

module.exports = Logger;