require('dotenv').config();
import express from 'express';
import routes from "./routes/routes";
import cors from 'cors';

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`http://localhost:${PORT}`));