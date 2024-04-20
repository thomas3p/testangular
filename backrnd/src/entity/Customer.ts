import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn, OneToMany, Unique } from 'typeorm';
import { User } from './User';
import { Order } from './Order';

@Entity()
@Unique(["user"])
export class Customer {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 30 })
    fname: string;

    @Column({ length: 30 })
    lname: string;

    @Column({ length: 10 })
    tel: string;

    @Column({ length: 30 })
    email: string;

    @Column({ length: 255 })
    address: string;

    @Column({ length: 5 })
    post: string;

    @OneToOne(() => User, user => user.customer)
    @JoinColumn()
    user: User;

    @OneToMany(() => Order, order => order.id)
    orders: Order[];
}