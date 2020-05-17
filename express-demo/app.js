// https://www.youtube.com/watch?v=pKd0Rpw7O48



// https://nodejs.org/dist/latest-v12.x/docs/api/http.html

// ******** HTTP Module

// a framework gives our application the proper structure!!
// maintainable!!

// https://www.npmjs.com/


const http = require('http');

const server = http.createServer(( req, res ) => {
    // req = request, res = response
  if(req.url === '/'){
      res.write('Hello world');
      res.end();
  }

  if( req.url === '/api/courses'){
      res.write(JSON.stringify( [1, 2, 3] ));
      res.end();
  }
  // goto http://localhost:3000/api/courses
  // as we add more routes, it becomces very complex.
  // express is used to simpify our code and is built on http module.
  
});

// ******* EventEmitter!

// very low level example
/*
server.on('connection', (socket) => {
    console.log('New connection');
})
*/
server.listen(3000); //POrt 3000

console.log( "listening on port 3000" );

// type localhost:3000 into browser 
// new connection is displayed in the console.
// cntl-c to end connection