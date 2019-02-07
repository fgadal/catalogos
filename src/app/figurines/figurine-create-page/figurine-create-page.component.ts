import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Figurine } from '../figurine.entity';
import { FigurineService } from '../figurine.service';

@Component({
  selector: 'app-figurine-create-page',
  templateUrl: './figurine-create-page.component.html',
  styleUrls: ['./figurine-create-page.component.css']
})
export class FigurineCreatePageComponent {
  constructor(
    private readonly router: Router,
    private readonly figurineService: FigurineService
  ) {}

  onSubmit(figurine: Figurine) {
    this.figurineService.save(figurine).subscribe(() => {
      this.router.navigate(['/']);
    });
  }
}
