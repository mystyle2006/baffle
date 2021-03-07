import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Exercise {
  @PrimaryGeneratedColumn()
  index: number;

  @Column()
  krName: string;

  @Column()
  enName: string;

  @Column({ default: 0 })
  hit: number;

  @Column({ nullable: true })
  imageUrl: string;
}
