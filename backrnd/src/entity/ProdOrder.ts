import { Column, Entity } from "typeorm";

@Entity()
export class ProdOrder {
    @Column({ primary: true })
    Order_id: number;

    @Column({ primary: true })
    Prod_id: number;
}
