var mysql  = require('mysql');

const connection =  () => {
  return mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'trybepay'
  });
}

module.exports = connection;
