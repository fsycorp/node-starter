const express = require('express');
const people = require('./people.json');

const app = express();

app.set('view engine', 'pug');

app.use(express.static(__dirname + '/public'));

app.get('/', (_, response) => {
  response.render('index', {
    title: 'Homepage',
    people: people.profiles
  });
});

app.get('/profile', (request, response) => {
  const person = people.profiles.find(p => p.id === request.query.id);
  response.render('profile', {
    title: `About ${person.firstname} ${person.lastname}`,
    person
  });
});

const server = app.listen(7000, () => {
  console.log(`Express running -> PORT ${server.address().port}`);
});
