import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Product } from "./Product";

@Entity()
export class ProdDetail {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => Product, product => product.detail)
    product: Product;

    @Column()
    data: string;
}