import { Injectable } from '@angular/core';
import { BehaviorSubject, from, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { DatabaseService } from '../database/database.service';
import { Particularity } from './particularity.entity';

@Injectable({
  providedIn: 'root'
})
export class ParticularityService {
  private particularities$ = new BehaviorSubject<Particularity[]>(null);

  constructor(private readonly databaseService: DatabaseService) {}

  getParticularities(): Observable<Particularity[]> {
    if (this.particularities$.value === null) {
      from(
        this.databaseService.connection.then(connection =>
          connection.manager.find(Particularity)
        )
      )
        .pipe(tap(particurities => this.particularities$.next(particurities)))
        .subscribe();
    }

    return this.particularities$.asObservable();
  }

  create(name: string): Observable<Particularity> {
    const particularity = new Particularity({ name });
    return from(
      this.databaseService.connection.then(connection =>
        connection.manager.save(particularity)
      )
    ).pipe(
      tap(() => {
        const value = [...(this.particularities$.value || []), particularity];
        this.particularities$.next(value);
      })
    );
  }
}
