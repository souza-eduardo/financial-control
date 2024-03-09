require('dotenv').config();
import express from 'express';
import routes from "./routes/routes";
import cors from 'cors';

const app = express();

app.use(express.json());
app.use(routes);
app.use(cors());

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`http://localhost:${PORT}`));