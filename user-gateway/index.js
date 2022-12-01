const Joi = require('joi');
const express = require('express');
const app = express();

app.get('/getAllUsers', (req, res) => {
  res.send('Testing getAllUsers');
});

app.get('/getUser/{userId}', (req, res) => {
  res.send('Testing getUser');
});

app.get('/login', (req, res) => {
  const schema = {
    email: Joi.string().email().required(),
    pass: Joi.string().min(8).required()
  }


  res.send(result);
});

app.post('/createUser', (req, res) => {
  res.send('Testing Create User');
});

app.post('/updateUser/{userId}', (req, res) => {
  res.send('Testing Update User');
});

app.delete('/deleteUser/{userId}', (req, res) => {
  res.send('Testing Delete User');
});

const port = process.envPORT || 3001;
app.listen(port, () => console.log(`Listening to user-bff on port ${port}...`));