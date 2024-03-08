import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"

@Entity()
export class Item {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  category: string

  @Column("float")
  value: number

  @Column()
  type: string
}