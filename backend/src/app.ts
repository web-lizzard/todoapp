import express from 'express';
import process from 'process';
import helmet from 'helmet';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';

const port = process.env.PORT || 3001;

const app = express();

app.use(helmet());
app.use(bodyParser.json());
app.use(cookieParser());

app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});
