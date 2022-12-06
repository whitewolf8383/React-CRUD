const Joi = require('joi');
const axios = require('axios');
const cors = require('cors');

const express = require('express');
const app = express();

app.use(cors());
app.use(express.json());


// Get all users
app.get('/getAllUsers', async (req, res) => {
  axios.get('http://localhost:3002/getAllUsers')
  .then((response) => {
    const data = response.data;
    console.log(data);
    res.send(data);
  })
  .catch((error) => {
    console.log(error);
  });
});

// Get user info by ID
app.get('/getUser/:userId', (req, res) => {
  const user = req.params.userId;
  axios.get(`http://localhost:3002/getUser/${user}`)
  .then((response) => {
    const data = response.data;
    console.log(data);
    res.send(data);
  })
  .catch((error) => {
    console.log(error);
  });
});

// Login
app.post('/login', async (req, res) => {
  const schema = Joi.object({
    email: Joi.string().email({ minDomainSegments: 2}).required(),
    pass: Joi.string().required()
  })

  try {
    const value = await schema.validateAsync({ email: req.body.email, pass: req.body.pass });

    axios.get(`http://localhost:3002/getAllUsers`)
    .then((response) => {
      const data = response.data;
      let userInfo = {};

      for(let user = 0; user < data.length; user++) {
        if(data[user].email === req.body.email && data[user].pass === req.body.pass) {
          userInfo = data[user];
        }
      }
      console.log(userInfo);
      res.send(userInfo);
    })
    .catch((error) => {
      console.log(error);
    });
  } catch(err) {
    res.send(err.details[0].message);
  }
});

// Create New User
app.post('/createUser', async (req, res) => {
  const schema = Joi.object({
    name: Joi.string().min(2).pattern(new RegExp('^[a-zA-Z]{2,30}$')).required(),
    phoneNumber: Joi.string().min(10).max(10).pattern(new RegExp('^[0-9]{10}$')).required(),
    city: Joi.string().required(),
    state: Joi.string().required(),
    email: Joi.string().email({ minDomainSegments: 2}).required(),
    pass: Joi.string().required()
  })

  try {
    const value = await schema.validateAsync({
      name: req.body.name,
      phoneNumber: req.body.phoneNumber,
      city: req.body.city,
      state: req.body.state,
      email: req.body.email, 
      pass: req.body.pass 
    });

    axios.post('http://localhost:3002/createuser', {
      name: req.body.name,
      phoneNumber: req.body.phoneNumber,
      city: req.body.city,
      state: req.body.state,
      email: req.body.email,
      pass: req.body.pass,
    })
    .then((response) => {
      console.log('User created');
      res.send(response.data);
    })
    .catch((error) => {
      console.log(error);
    });
  } catch(err) {
    res.send(err.details[0].message);
  }

  
});

// Update User Info
app.put('/updateUser/:userId', (req, res) => {
  axios.put('http://localhost:3002/updateUser', {
    userId: req.params.userId,
    name: req.body.name,
    phoneNumber: req.body.phoneNumber,
    city: req.body.city,
    state: req.body.state,
    email: req.body.email,
    pass: req.body.pass,
  })
  .then((response) => {
    console.log('User Info Updated');
    res.send(response.data);
  })
  .catch((error) => {
    console.log(error);
  });
});

// Delete User
app.delete('/deleteUser/:userId', (req, res) => {
  const userId = req.params.userId;
  axios.delete(`http://localhost:3002/deleteUser/${userId}`, {
    userId: userId
  })
  .then((response) => {
    res.send({ message: 'User has been Deleted.'});
  })
  .catch((error) => {
    console.log(error);
  });
});

const port = process.envPORT || 3001;
app.listen(port, () => console.log(`Listening to user-bff on port ${port}...`));