// source: https://www.youtube.com/watch?v=TlB_eWDSMt4

function sayHello(name){
   console.log('Hello ' + name); 
}

//sayHello('Phil');

console.log(window);

//*************** 


console.log();//global objects in JS

setTimeout();
clearTimeout();

setInterval();
clearInterval();

window.console.log(); //JS engine will prepend window 

var message = ""; //NOTE - not defined at the global object
// only scope of the file!!

//************* 

//modularity!!  OOP - private variables
var sayHello = function(){
  
}

window.sayHello(); 
// last function declaration will overrride other sayHello functions 
// because it is at a global level.
//**********
 

console.log(module);
//output - JSON object!!
// every file is a module!!
/*
Module {
  id: '.',
  path: 'C:\\Users\\phile\\Desktop\\hello\\first-app',
  exports: {},
  parent: null,
  filename: 'C:\\Users\\phile\\Desktop\\hello\\first-app\\app.js',
  loaded: false,
  children: [],
  paths: [
    'C:\\Users\\phile\\Desktop\\hello\\first-app\\node_modules',
    'C:\\Users\\phile\\Desktop\\hello\\node_modules',
    'C:\\Users\\phile\\Desktop\\node_modules',
    'C:\\Users\\phile\\node_modules',
    'C:\\Users\\node_modules',
    'C:\\node_modules'
  ]
}
*/
