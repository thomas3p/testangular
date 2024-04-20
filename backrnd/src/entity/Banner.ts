import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Banner {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    path: string;
}