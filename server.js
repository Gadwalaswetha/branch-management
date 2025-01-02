const express = require('express');
const bodyParser = require('body-parser');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const path = require('path');

const app = express();
const PORT = 5000;
const SECRET_KEY = "your_secret_key";

// Mock Database
const users = [{ username: "admin", password: bcrypt.hashSync("password123", 8) }];

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Login Route (GET)
app.get('/', (req, res) => {
  res.render('login');
});

// Login Route (POST)
app.post('/login', (req, res) => {
  const { username, password } = req.body;
  const user = users.find(u => u.username === username);
  if (!user || !bcrypt.compareSync(password, user.password)) {
    return res.render('login', { error: "Invalid username or password" });
  }
  const token = jwt.sign({ username }, SECRET_KEY, { expiresIn: '1h' });
  res.cookie('token', token).redirect('/dashboard');
});

// Dashboard Route
app.get('/dashboard', (req, res) => {
  const sampleData = {
    couponsRequested: 10,
    couponsApproved: 5,
    couponsGenerated: 7,
    couponsUtilized: 3,
    vehicles: 15,
  };
  res.render('dashboard', { data: sampleData });
});

// Start Server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
