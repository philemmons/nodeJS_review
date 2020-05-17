//  https://nodejs.org/dist/latest-v12.x/docs/api/path.html

const path = require('path'); //built in module - path

var pathObj = path.parse(__filename);

console.log(pathObj);
/*  output
{
  root: 'C:\\',
  dir: 'C:\\Users\\phile\\Desktop\\hello\\first-app',
  base: 'app.js',
  ext: '.js',
  name: 'app'
}
*/


// https://nodejs.org/dist/latest-v12.x/docs/api/os.html

// OS module

const os = require('os');

var totalMem = os.totalmem();
var freeMem = os.freemem();

//console.log('Total Memory: ' + totalMem);

//Template String
//ES6 / ES2015 : ECMAScript 6
// HTML with JS Template Strings
//https://wesbos.com/template-strings-html

console.log(`Total Memory: ${totalMem}`); //Backtick, left of the one
console.log(`Free Memory: ${freeMem}`);

// Node.js is operating n the OS, or the Server

//https://nodejs.org/dist/latest-v12.x/docs/api/fs.html

// File System

const fileSystem = require('fs');

//const files = fileSystem.readdirSync('./');
// real world application use asynchronous modules because 
// they are non-blocking.  eg waiter-kitchen-2 tables

//console.log(files);

fileSystem.readdir('./', function( err, files ){
    //callback function with two parameters - error and the result, a string array
    if( err ) console.log( 'Error', err );
    else console.log( 'Result', files );
})

/*
Result [ 'app.js', 'app_one.js', 'app_two.js', 'logger_one.js' ]
  OR
Error [Error: ENOENT: no such file or directory, scandir 'C:\Users\phile\Desktop\hello\first-app\$'] {
  errno: -4058,
  code: 'ENOENT',
  syscall: 'scandir',
  path: 'C:\\Users\\phile\\Desktop\\hello\\first-app\\$'
}
*/

