require('dotenv').config();
import express from 'express';
import routes from "./routes/routes";
import cors from 'cors';

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('hello world 1');
});

app.listen(PORT, () => console.log('Server is running!'));