// https://www.youtube.com/watch?v=pKd0Rpw7O48

// ******** handling DELETE requests
// REMOVING DATA

const Joi = require('@hapi/joi');
const express = require('express');
const app = express();

app.use( express.json() );

const courses = [
  {id: 1, name: 'course1' },
  {id: 2, name: 'course2' },
  {id: 3, name: 'course3' },
];

// validation logic in one place
function validateCourse(course){
    const schema = Joi.object({
        name: Joi.string()
        .min(3)
        .max(30)
        .required()
    });
    
    return schema.validate(course, schema.name);
}

app.get('/', (req, res) => {
  res.send('hello world');
});

app.get('/api/courses', (req, res) => {
  res.send(courses);
});
 
app.post('/api/courses', (req, res) => {
    // implement new function
    const { error } = validateCourse(req.body);
    // 400 bad request
    if( error ) return res.status(400)
        .send(error.details[0].message); 

  const course = {
    id: courses.length +1,
    name: req.body.name
  };

  courses.push(course);

  res.send(course);
});

app.put('/api/courses/:id', (req, res) => {
    // Look up the course
    // If not existing, returen 404
    const course = courses.find(c => c.id === parseInt(req.params.id));
    if(!course) return res.status(404)
        .send('the course with the given ID was not found. "404"');
         
    // Validate: If invalid, return 400 - Bad request
    // object destructor - result.error
    const { error } = validateCourse(req.body);
    if( error ) return res.status(400)
        .send(error.details[0].message);
           
    // Update course
    course.name = req.body.name;
    // Return the updated course
    res.send(course);

}); //end of app.post

// ******** NEW
app.delete('/api/courses/:id', (req, res) => {
    // look up the course
    // not exist, return 404
    const course = courses.find(c => c.id === parseInt(req.params.id));
    if(!course) return res.status(404)
        .send('the course with the given ID was not found. "404"');
    // delete
    const index = courses.indexOf(course);
    courses.splice(index, 1);
    //return the same course
    res.send(course);
});

 app.get('/api/courses/:id', (req, res) => {
   const course = courses.find(c => c.id === parseInt(req.params.id));
   if(!course) res.status(404)
    .send('the course with the given ID was not found. "404"');
   res.send(course);
 });
 
 // dynamic var - in the terminal: export PORT=5000
 const port = process.env.PORT || 3000;
 app.listen(port, () => console.log(`Listening on port ${port}...`));