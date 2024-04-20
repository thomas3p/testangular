import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Product } from "./Product";

@Entity()
export class ProdImg {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => Product, product => product.images)
    product: Product;

    @Column()
    url: string;
}
