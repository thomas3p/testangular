import { Entity, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Customer } from "./Customer";
import { Cart } from "./Cart";

@Entity()
export class Order {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => Customer, customer => customer.orders)
    customer: Customer;

    @OneToOne(() => Cart, cart => cart.id)
    cart: Cart;
}