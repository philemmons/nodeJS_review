// https://www.youtube.com/watch?v=pKd0Rpw7O48

// all require at the TOP of the file
// shows dependencies
const Joi = require('@hapi/joi');

const express = require('express');
const app = express();

//adding a piece of middleware and app.use it  lol
app.use( express.json() );

// handling POST requests
// get a single course from the server
const courses = [
    {id: 1, name: 'course1' },
    {id: 2, name: 'course2' },
    {id: 3, name: 'course3' },
  ];

  app.get('/', (req, res) => {
      res.send('hello world');
  });

  app.get('/api/courses', (req, res) => {
   res.send(courses);
 });
 
// create a new course object and add it to our array
// CAREFUL!!!  DO NOT FORGET THE '/' AT THE BEGINNING OF THE PATH
// eg  WRONG - 'api/courses'
//     RIGHT - '/api/courses'
app.post('/api/courses', (req, res) => {

    // Data Validation
    // https://hapi.dev/module/joi/#install

  const schema = Joi.object({
    name: Joi.string()
    .min(3)
    .max(30)
    .required()
  })
// https://hapi.dev/module/joi/#usage

  const result = schema.validate(req.body, schema.name);
  console.log(result);

  if( result.error ){
    // 400 bad request
   res.status(400).send(result.error.details[0].message);
   return;   
  }


    //this would be data returned from the DB
  const course = {
    id: courses.length +1,
    name: req.body.name
  };
// add the data to the existing data or create a new array(data structure)
  courses.push(course);
// retrun the object from the body of the response to the client
  res.send(course);
});

 app.get('/api/courses/:id', (req, res) => {
   const course = courses.find(c => c.id === parseInt(req.params.id));
   if(!course) res.status(404).send('the course with the given ID was not found. "404"');
   res.send(course);
 });
 
 // dynamic var
 // in the terminal: export PORT=5000
 const port = process.env.PORT || 3000;
 app.listen(port, () => console.log(`Listening on port ${port}...`));