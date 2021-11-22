import express from 'express';

import auth from './routes/auth';
import marketItems from './routes/marketItems';
import config from './config/development.json';

const app = express();

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// routes
app.use('/api/auth', auth);
app.use('/api', marketItems);

app.get('/', (_, res) => {
  res.send('Welcome to Demo Market backend!');
});

const port = process.env.PORT || config.port;

app.listen(port, () => {
  console.log(`Demo Market backend is listening on port ${port}!`);
});

//doodle-oo
