require('dotenv').config();
const express = require('express');
const app = express();
import routes from "./routes/routes";
const cors = require('cors');

app.use(express.json());
app.use(routes);
app.use(cors());

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`http://localhost:${PORT}`));