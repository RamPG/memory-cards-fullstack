const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const loginRoute = require('./routes/login-route');
const registerRoute = require('./routes/register-route');
const verifyTokenRoute = require('./routes/verify-token-route');
const cookieParser = require('cookie-parser');
const app = express();
const PORT = 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(`${__dirname}/public`));
app.use(cookieParser());

app.use('/auth/login', loginRoute);
app.use('/auth/register', registerRoute);
app.use('/auth/verify-token', verifyTokenRoute);

app.get('/logout', (req, res) => {
  console.log('req');
});
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

mongoose.connect(
  'mongodb://localhost:27017/memorycards',
  { useNewUrlParser: true, useUnifiedTopology: true },
)
  .then(() => app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  }));
