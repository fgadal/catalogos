import { AfterLoad, Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

import { Figurine } from './figurine.entity';

@Entity()
export class FigurineImage {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('blob')
  blob: Blob;

  @ManyToOne(() => Figurine, figurine => figurine.images)
  figurine: Figurine;

  dataURL: string;

  constructor(partial?: Partial<FigurineImage>) {
    Object.assign(this, partial);
  }

  @AfterLoad()
  async convertToBase64(): Promise<void> {
    if (this.blob) {
      this.dataURL = window.URL.createObjectURL(new Blob([this.blob]));
    }
  }
}
