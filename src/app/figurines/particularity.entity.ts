import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Particularity {
  @PrimaryGeneratedColumn()
  readonly id: number;

  @Column()
  readonly name: string;

  constructor(partial?: Partial<Particularity>) {
    Object.assign(this, partial);
  }
}
