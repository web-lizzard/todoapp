import express from 'express';
import process from 'process';

const port = process.env.PORT || 3001;

const app = express();

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});
