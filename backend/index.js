const express = require('express');
const path = require('path');

const app = express();

const PORT = 5000;

app.use(express.static(`${__dirname}/public`));
app.post('/auth/register', (req, res) => {
  console.log(req.body);
  res.redirect('/login');
});
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
