import { AppDataSource } from "./data-source"
import * as express from "express";
import * as dotenv from "dotenv";
import { Request, Response } from "express";
import { Customer } from "./entity/Customer"
import { Product } from "./entity/Product"

import "reflect-metadata";
dotenv.config();
const app = express();
app.use(express.json());
const { PORT = 3000 } = process.env;
app.get("/profile", async (req: Request, res: Response) => {
    const users = await AppDataSource
    .getRepository(Customer)
    .createQueryBuilder("customer")
    .leftJoinAndSelect("customer.user", "user")
    .getMany()
    res.json(users);

});
app.get('/category/:id', async (req: Request, res: Response) => {
    const prods = await AppDataSource
    .getRepository(Product)
    .createQueryBuilder("product")
    .leftJoinAndSelect("product.category","category")
    .leftJoinAndSelect("product.detail","detail")
    .leftJoinAndSelect("product.images","images")
    .where('product.category = :id', { id: req.params.id })
    .getMany()
    res.json(prods)
});
app.get('/product/:id', async (req: Request, res: Response) => {
    const prods = await AppDataSource
    .getRepository(Product)
    .createQueryBuilder("product")
    .leftJoinAndSelect("product.category","category")
    .leftJoinAndSelect("product.detail","detail")
    .leftJoinAndSelect("product.images","images")
    .where('product.id = :id', { id: req.params.id })
    .getOne()
    res.json(prods)
});

AppDataSource.initialize()
  .then(async () => {
    app.listen(PORT, () => {
      console.log("Server is running on http://localhost:" + PORT);
    });
    console.log("Data Source has been initialized!");
  })
  .catch((error) => console.log(error));
