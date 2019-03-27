import { Column, Entity, JoinTable, ManyToMany, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

import { FigurineImage } from './figurine-image.entity';
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

  @OneToMany(() => FigurineImage, image => image.figurine, {
    eager: true,
    cascade: true
  })
  images: FigurineImage[];

  @Column({ nullable: true })
  origin: string;

  @Column({ nullable: true })
  sanctuary: string;

  @Column({ nullable: true })
  workshop: string;

  @Column({ nullable: true })
  type: string;

  @Column({ default: false })
  isModeling: boolean;

  @Column({ default: false })
  isMolding: boolean;

  @ManyToMany(() => Particularity, { eager: true, cascade: true })
  @JoinTable()
  particularities: Particularity[];
}
