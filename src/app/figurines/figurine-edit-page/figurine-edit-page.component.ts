import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Figurine } from '../figurine.entity';
import { FigurineService } from '../figurine.service';

@Component({
  selector: 'app-figurine-edit-page',
  templateUrl: './figurine-edit-page.component.html',
  styleUrls: ['./figurine-edit-page.component.css']
})
export class FigurineEditPageComponent {
  id: number;

  figurine$: Observable<Figurine>;

  constructor(
    private readonly route: ActivatedRoute,
    private readonly router: Router,
    private readonly figurineService: FigurineService
  ) {
    this.id = +this.route.snapshot.paramMap.get('id');
    this.figurine$ = figurineService
      .getFigurine(this.id)
      .pipe(tap(console.log));
  }

  onSubmit(figurine: Figurine) {
    this.figurineService.save(figurine).subscribe(() => {
      this.router.navigate(['/']);
    });
  }
}
