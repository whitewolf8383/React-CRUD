const express = require('express');
const app = express();

app.use(express.json());

app.get('/getAllUsers', (req, res) => {
  res.send('Returning all users');
});



app.get('/getUser/:userId', (req, res) => {
  const userId = req.params.userId;
  res.send(`Testing Get User: ${userId}`);
});



app.get('/login', (req, res) => {
  const login = {
    email: req.body.email,
    pass: req.body.pass
  }

  res.send(login);
});



app.post('/createUser', (req, res) => {
  const user = {
    name: req.body.name,
    phoneNumber: req.body.phoneNumber,
    city: req.body.city,
    state: req.body.state,
    email: req.body.email,
    pass: req.body.pass
  }

  res.send(user);
});



app.put('/updateUser/:userId', (req, res) => {
  const userId = req.params.userId;
  const user = {
    name: req.body.name,
    phoneNumber: req.body.phoneNumber,
    city: req.body.city,
    state: req.body.state,
    email: req.body.email,
    pass: req.body.pass
  }

  res.send(user);
});



app.delete('/deleteUser/:userId', (req, res) => {
  const userId = req.params.userId;
  res.send(`Testing Delete User: ${userId}`);
});

const port = process.envPORT || 3002;
app.listen(port, () => console.log(`Listening to user-bff on port ${port}...`));
