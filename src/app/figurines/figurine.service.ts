import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';
import { DatabaseService } from '../database/database.service';
import { Figurine } from './figurine.entity';

@Injectable({
  providedIn: 'root'
})
export class FigurineService {
  constructor(private readonly databaseService: DatabaseService) {}

  getFigurines(): Observable<Figurine[]> {
    return from(
      this.databaseService.connection.then(connection =>
        connection.manager.find(Figurine)
      )
    );
  }

  getFigurine(id: number): Observable<Figurine> {
    return from(
      this.databaseService.connection.then(connection =>
        connection.manager.findOne(Figurine, id)
      )
    );
  }

  save(figurine: Figurine): Observable<Figurine> {
    console.log('SSSSSSSSSSS', figurine);
    return from(
      this.databaseService.connection.then(connection =>
        connection.manager.save(figurine)
      )
    );
  }
}
