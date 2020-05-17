
//(function (exports, require, module, __filename, __dirname) {
// module wrapper function

console.log(__filename);
console.log(__dirname);
/*
C:\Users\phile\Desktop\hello\first-app\logger.js
C:\Users\phile\Desktop\hello\first-app
*/

var url = 'http://mylogger.io/log';

function log(message){
    // send an HTTP request
    console.log(message);
}
// log is scoped to this module, make the 'log' global
// so we can access it in the url

//module.exports.log = log;
// eg DVD player - public interface objects: buttons on the front
// inside: implementation detail, static functionality

module.exports = log;
// you can exporty a single function or object

// OR  module.exports.log = log;
// OR  exports.log = log;
// NOT exports= log;

//}) // closing braces for the module wrapper function

// https://nodejs.org/dist/latest-v12.x/docs/api/
// built in modules
// file system, http, OS, Path, Process, Query Strings, Stream