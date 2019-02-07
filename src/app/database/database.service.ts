import { Injectable } from '@angular/core';
import { remote } from 'electron';
import { join } from 'path';
import { Connection, createConnection } from 'typeorm';
import { environment } from '../../environments/environment';
import { FigurineImage } from '../figurines/figurine-image.entity';
import { Figurine } from '../figurines/figurine.entity';
import { Particularity } from '../figurines/particularity.entity';

@Injectable({ providedIn: 'root' })
export class DatabaseService {
  public connection: Promise<Connection>;

  constructor() {
    const path = environment.production
      ? remote.app.getPath('userData')
      : join(remote.app.getAppPath(), 'dist');

    this.connection = createConnection({
      type: 'sqlite',
      database: join(path, 'database.sqlite'),
      entities: [Figurine, FigurineImage, Particularity],
      synchronize: true,
      logging: environment.production ? false : true
    });
  }
}
