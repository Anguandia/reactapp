import express from 'express';
import dotenv from 'dotenv';

dotenv.config();

const path = require('path');

const app = express();
const port = process.env.PORT || 8000;
const DIST_DIR = path.join(__dirname, '../dist');
const HTML_FILE = path.join(DIST_DIR, 'index.html');
app.use(express.static(DIST_DIR));

app.get('/', (req, res) => {
  res.send(HTML_FILE);
});
app.listen(port, () => {
  console.log(`App listening on port: ${port}`);
});
