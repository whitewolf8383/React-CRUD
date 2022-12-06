const express = require('express');
const app = express();
const db = require('./database');

app.use(express.json());

app.get('/getAllUsers', (req, res) => {
  db.query('SELECT * FROM users', (err, result, fields) => {
    if(err) throw err;
    console.log(result);
    res.send(result);
  })
});

app.get('/getUser/:userId', (req, res) => {
  const userId = req.params.userId;
  db.query(`SELECT * FROM users WHERE user_id = ${userId}`, (err, result, fields) => {
    if(err) throw err;
    console.log(result);
    res.send(result);
  })
});

app.post('/createUser', (req, res) => {
  const sql = `INSERT INTO users(name, phone_number, city, state, email, pass, account_type)
    VALUES ("${req.body.name}",
      "${req.body.phoneNumber}",
      "${req.body.city}",
      "${req.body.state}",
      "${req.body.email}",
      "${req.body.pass}",
      "user"
    );`
  
    db.query(sql, (err, result) => {
      if (err) throw err;
      console.log('User added');
      res.send(result);
    });
});

app.put('/updateUser', (req, res) => {
  const userId = req.body.userId;
  const sql = `UPDATE users SET 
    name = "${req.body.name}", 
    phone_number = "${req.body.phoneNumber}", 
    city = "${req.body.city}", 
    state = "${req.body.state}", 
    email = "${req.body.email}", 
    pass = "${req.body.pass}" 
    WHERE user_id = ${userId};`
  
    db.query(sql, (err, result) => {
      if (err) throw err;
      console.log('User Info Updated');
      res.send(result);
    });
});

app.delete('/deleteUser/:userId', (req, res) => {
  const userId = req.params.userId;
  db.query(`DELETE FROM users WHERE user_id = ${userId}`, (err, result, fields) => {
    if(err) throw err;
    console.log('User Deleted');
    res.send(result);
  })
});

const port = process.envPORT || 3002;
app.listen(port, () => console.log(`Listening to user-bff on port ${port}...`));
