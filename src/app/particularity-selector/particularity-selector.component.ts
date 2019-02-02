import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material';
import { Observable } from 'rxjs';
import { filter, switchMap } from 'rxjs/operators';
import { CreateParticularityDialogComponent } from '../figurines/create-particularity-dialog/create-particularity-dialog.component';
import { Particularity } from '../figurines/particularity.entity';
import { ParticularityService } from '../figurines/particularity.service';

@Component({
  selector: 'app-particularity-selector',
  templateUrl: './particularity-selector.component.html',
  styleUrls: ['./particularity-selector.component.css']
})
export class ParticularitySelectorComponent implements OnInit {
  @Input()
  control: FormControl;

  particularities$: Observable<Particularity[]>;

  constructor(
    private readonly dialog: MatDialog,
    private readonly particularityService: ParticularityService
  ) {
    this.particularities$ = this.particularityService.getParticularities();
  }

  ngOnInit() {}

  openCreateParticularityDialog() {
    this.dialog
      .open(CreateParticularityDialogComponent, {
        width: '300px'
      })
      .afterClosed()
      .pipe(
        filter(name => !!name),
        switchMap(name => this.particularityService.create(name))
      )
      .subscribe(particularity => {
        const value = [...(this.control.value || []), particularity];
        this.control.setValue(value);
      });
  }

  compareParticularityFn(
    particularity1: Particularity,
    particularity2: Particularity
  ) {
    return particularity1 && particularity2
      ? particularity1.id === particularity2.id
      : particularity1 === particularity2;
  }
}
