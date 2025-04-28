import express from 'express';
import mysql from 'mysql2';
import dotenv from 'dotenv';
import cors from 'cors';

const port = 3000;
const app = express();
app.use(express.json());
app.use(cors());

dotenv.config();

const database = mysql.createConnection({
  host: process.env.LOCAL_DB_HOST,
  user: process.env.LOCAL_DB_USER,
  password: process.env.LOCAL_DB_PASSWORD,
  database: process.env.LOCAL_DB_NAME,
  port: process.env.LOCAL_DB_PORT,
});

database.connect((err) => {
  if (err) {
    console.error('connection to database failed 😅', err);
    return;
  }
});

app.get('/', (req, res) => {
  res.send('👋');
});

app.get('/menu', (req, res) => {
  database.query('SELECT * FROM plates', (err, data) => {
    if (err) {
      return res.status(500).send(err);
    }
    res.json(data);
  });
});

app.get('/order', (req, res) => {
  database.query('SELECT * FROM orders', (err, data) => {
    if (err) {
      return res.status(500).send(err);
    }
    res.json(data);
  });
});

app.get('/order/:id', (req, res) => {
  const order_id = req.params.id;
  const query = `SELECT * FROM orders WHERE id = ?`;

  database.query(query, [order_id], (err, data) => {
    if (err) {
      return res.status(500).send(err);
    }
    res.json(data);
  });
});

app.post('/order', (req, res) => {
  const {user_id, plate_id} = req.body;
  const insertQuery = `INSERT INTO orders (user_id, plate_id) VALUES (?, ?);`;

  database.query(insertQuery, [user_id, plate_id], (err, data) => {
    if (err) {
      return res.status(500).send(err);
    }
    res.json({id: data.insertId, user_id, plate_id});
  });
});

app.put('/order/:id', (req, res) => {
  const order_id = req.params.id;
  const {plate_id} = req.body;
  const now = new Date().toISOString().slice(0, 19).replace('T', ' '); // format timestamp pour MySQL
  const updateQuery = `UPDATE orders SET plate_id = ?, updated_at = '${now}' WHERE id = ?;`;

  database.query(updateQuery, [plate_id, order_id], (err, data) => {
    if (err) {
      return res.status(500).send(err);
    }
    res.json({id: data.insertId, plate_id, order_id});
  });
});

app.delete('/order/:id', (req, res) => {
  const order_id = req.params.id;
  const query = `DELETE FROM orders WHERE id = ?`;

  database.query(query, [order_id], (err, data) => {
    if (err) {
      return res.status(500).send(err);
    }
    res.status(200).send(data);
  });
});

//
// BONUS
app.get('/users', (req, res) => {
  database.query('SELECT * FROM users', (err, data) => {
    if (err) {
      return res.status(500).send(err);
    }
    res.json(data);
  });
});

app.post('/users', (req, res) => {
  const {firstname} = req.body;
  const insertQuery = `INSERT INTO users (firstname) VALUES (?);`;

  database.query(insertQuery, [firstname], (err, data) => {
    if (err) {
      return res.status(500).send(err);
    }
    res.json({id: data.insertId, firstname});
  });
});

app.listen(port, () => {
  console.log(`server running at http://localhost:${port} 🌱`);
});
