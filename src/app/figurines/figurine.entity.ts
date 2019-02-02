import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn
} from 'typeorm';
import { Particularity } from './particularity.entity';

@Entity()
export class Figurine {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  longReference: string;

  @Column({ nullable: true })
  shortReference: string;

  @Column({ nullable: true })
  description: string;

  @Column({ nullable: true })
  photo: string;

  @Column({ nullable: true })
  origin: string;

  @Column({ nullable: true })
  sanctuary: string;

  @Column({ nullable: true })
  workshop: string;

  @Column({ nullable: true })
  type: string;

  @ManyToMany(() => Particularity, { eager: true, cascade: true })
  @JoinTable()
  particularities: Particularity[];
}
