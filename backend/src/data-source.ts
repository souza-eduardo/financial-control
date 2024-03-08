require('dotenv').config();
import "reflect-metadata";
import { DataSource } from "typeorm";
import { Item } from "./entity/Item";

const port = process.env.DB_PORT as unknown as number | undefined;

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: process.env.DB_HOST,
  port: port,
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  entities: [Item],
  migrations: [`${__dirname}/**/migration/*.{ts, js}`],
  synchronize: true,
  logging: false,
});


AppDataSource.initialize()
  .then(() => {
      console.log("Data Source has been initialized!")
  })
  .catch((err) => {
      console.error("Error during Data Source initialization", err)
  })