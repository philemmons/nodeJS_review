
// https://www.youtube.com/watch?v=pKd0Rpw7O48

// a framework gives our application the proper structure!!
// maintainable!!

// https://www.npmjs.com/
// see readme.txt for express install instructions

const express = require('express');
const app = express();

//app.post();
//app.put();
//app.delete();
app.get('/', (req, res) => {
// para: path, callback function
// http://expressjs.com/en/4x/api.html#req
// list all the request properties

  res.send("Hello World");
  // also called a route handler
});

// define new routes
app.get('/api/courses', (req, res) => {
  res.send([1,2,3]);
});

// colon variable name for powering a block
app.get('/api/posts/:year/:month', (req, res) => {
  //res.send(req.params);
  // returns the req.params object
  /*	
    year	"2020"
    month	"01"
  */

 // ?sortBy=name   query string paramater for backend services
 // are presented in key value pairs
   res.send(req.query);
  /*
  sortBy :	"name"
 */
});

// dynamic var
// in the terminal: export PORT=5000
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));

//  install nodemon - avoid start and stop app.listen(..)
// npm i -g nodemon
// issue: goto enviroment variables, seperate the paths, 
// and add s to program file!