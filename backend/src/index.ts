const express = require('express');
const path = require('path');

const app = express();

const PORT = 5000;
console.log("all project was build");
app.use(express.static(`${__dirname}/public/`));
app.get('/', (req: any, res: any) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
