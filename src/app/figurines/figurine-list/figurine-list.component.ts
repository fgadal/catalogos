import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Figurine } from '../figurine.entity';
import { FigurineService } from '../figurine.service';

@Component({
  selector: 'app-figurine-list',
  templateUrl: './figurine-list.component.html',
  styleUrls: ['./figurine-list.component.css']
})
export class FigurineListComponent {
  book: string;

  location: string;

  figurines$: Observable<Figurine[]>;

  constructor(
    private readonly router: Router,
    private readonly figurineService: FigurineService
  ) {
    this.figurines$ = this.figurineService.getFigurines();
  }

  onRowClick(figurine: Figurine) {
    this.router.navigate([figurine.id]);
  }
}
