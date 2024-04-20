import { Column, Entity, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Category } from "./Category";
import { ProdImg } from "./ProdImg";
import { ProdDetail } from "./ProductDetail";

@Entity()
export class Product {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    prod_name: string;

    @Column('float')
    prod_price: number;

    @ManyToOne(() => Category, category => category.products)
    category: Category;

    @OneToMany(() => ProdDetail, prodDetail => prodDetail.product)
    detail: ProdDetail[];

    @OneToMany(() => ProdImg, prodImg => prodImg.product)
    images: ProdImg[];
}
