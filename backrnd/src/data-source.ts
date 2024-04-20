import "reflect-metadata"
import { DataSource } from "typeorm"
import { User } from "./entity/User"
import { Customer } from "./entity/Customer"
// import { Banner } from "./entity/Banner"
import { Cart } from "./entity/Cart"
import { Category } from "./entity/Category"
import { Order } from "./entity/Order"
import { ProdImg } from "./entity/ProdImg"
// import { ProdOrder } from "./entity/ProdOrder"
import { Product } from "./entity/Product"
import { ProdDetail } from "./entity/ProductDetail"

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "root",
    database: "postgres",
    synchronize: true,
    logging: false,
    entities: [User,Customer,Cart,Category,Order,ProdImg,Product,ProdDetail],
    migrations: [],
    subscribers: [],
})
