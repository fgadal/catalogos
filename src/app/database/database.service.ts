import { Injectable } from '@angular/core';
import { remote } from 'electron';
import { join } from 'path';
import { Connection, createConnection } from 'typeorm';

import { environment } from '../../environments/environment';
import { MoldingAndModelingMigration1553700743221 } from '../../migrations/1553700743221-MoldingAndModelingMigration';
import { FigurineImage } from '../figurines/figurine-image.entity';
import { Figurine } from '../figurines/figurine.entity';
import { Particularity } from '../figurines/particularity.entity';

@Injectable({ providedIn: 'root' })
export class DatabaseService {
  public connection: Promise<Connection>;

  constructor() {
    const path = environment.production ? remote.app.getPath('userData') : join(remote.app.getAppPath(), 'dist');

    this.connection = createConnection({
      type: 'sqlite',
      database: join(path, 'database.sqlite'),
      entities: [Figurine, FigurineImage, Particularity],
      migrations: [MoldingAndModelingMigration1553700743221],
      synchronize: environment.production ? false : true,
      migrationsRun: environment.production ? true : false,
      logging: environment.production ? true : true,
      cli: {
        migrationsDir: 'src/migrations'
      }
    });
  }
}
