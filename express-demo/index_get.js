
const express = require('express');
const app = express();

// handling GET requests
// get a single course from the server
const courses = [
    {id: 1, name: 'course1' },
    {id: 2, name: 'course2' },
    {id: 3, name: 'course3' }
  ];

  app.get('/api/courses', (req, res) => {
   res.send(req.courses);
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