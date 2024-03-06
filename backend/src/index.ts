import "reflect-metadata";
import { DataSource } from "typeorm";
import { Item } from "./entity/Item";

const express = require('express');
const app = express();
const cors = require('cors');

const AppDataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: "postgres",
  password: "admin",
  database: "financial_control_db",
  entities: [Item],
  synchronize: true,
  logging: false,
})

AppDataSource.initialize()
  .then(() => {
    
  })
  .catch((error) => console.log(error))

app.use(express.json());
app.use(cors());



app.listen(5000, () => console.log('http://localhost:5000'));