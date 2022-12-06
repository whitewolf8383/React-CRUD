const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  database: 'reactcruddb',
  user: 'root',
  password: 'sbc383Integra!!'
});

connection.connect((error) => {
  if (error) {
    throw error;
  } else {
    console.log('MySql database is connected successfully');
  }
});

module.exports = connection;
