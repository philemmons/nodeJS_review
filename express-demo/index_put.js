// https://www.youtube.com/watch?v=pKd0Rpw7O48

// ******** handling PUT request

const Joi = require('@hapi/joi');
const express = require('express');
const app = express();

app.use( express.json() );

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
 
app.post('/api/courses', (req, res) => {

  const schema = Joi.object({
    name: Joi.string()
    .min(3)
    .max(30)
    .required()
  }) //end of schema

  const result = schema.validate(req.body, schema.name);
  console.log(result);

  if( result.error ){
    // 400 bad request
    res.status(400).send(result.error.details[0].message);
    return;   
  }

  const course = {
    id: courses.length +1,
    name: req.body.name
  };

  courses.push(course);

  res.send(course);

}); //end of app.post...

 app.get('/api/courses/:id', (req, res) => {
   const course = courses.find(c => c.id === parseInt(req.params.id));
   if(!course) res.status(404)
    .send('the course with the given ID was not found. "404"');
   res.send(course);
 });
 
 // dynamic var
 // in the terminal: export PORT=5000
 const port = process.env.PORT || 3000;
 app.listen(port, () => console.log(`Listening on port ${port}...`));