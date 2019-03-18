import { createConnection } from 'mysql';

const connection = createConnection({

  user: 'root',
  password: 'root',
  database: 'spotify',
  server: 'localhost',
  port: 3306

});

connection.connect( (err) => {
  if (err) { throw err; }
  console.log('Connected to db!');
});

export default connection;