const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const getWordListRouter = require('./routes/profile/get-word-list-route');
const updateWordListRouter = require('./routes/profile/update-word-list-route');
const loginRoute = require('./routes/auth/login-route');
const logoutRoute = require('./routes/auth/logout-route');
const registrationRoute = require('./routes/auth/registration-route');
const verifyTokenRoute = require('./routes/auth/verify-token-route');

const app = express();
const PORT = 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(`${__dirname}/public`));
app.use(cookieParser());

app.use('/auth/login-form', loginRoute);
app.use('/auth/registration-form', registrationRoute);
app.use('/auth/verify-token', verifyTokenRoute);
app.use('/auth/logout-button', logoutRoute);
app.use('/profile/get-word-list', getWordListRouter);
app.use('/profile/update-word-list', updateWordListRouter);

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
