import { Component, EventEmitter, Input, Output } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators
} from '@angular/forms';
import { Router } from '@angular/router';
import { Figurine } from '../figurine.entity';

@Component({
  selector: 'app-figurine-form',
  templateUrl: './figurine-form.component.html',
  styleUrls: ['./figurine-form.component.css']
})
export class FigurineFormComponent {
  @Input()
  set figurine(figurine: Figurine) {
    this._figurine = figurine;
    this.form = this.createForm();
  }
  get figurine(): Figurine {
    return this._figurine;
  }
  // tslint:disable-next-line:variable-name
  private _figurine: Figurine;

  @Output()
  submitted = new EventEmitter<Figurine>();

  form: FormGroup;

  isSaving = false;

  private files: File[];

  constructor(
    private readonly fb: FormBuilder,
    private readonly router: Router
  ) {
    this.form = this.createForm();
  }

  get imagesControl(): FormControl {
    return this.form.get('bibliography.images') as FormControl;
  }

  get particularitiesControl(): FormControl {
    return this.form.get('details.particularities') as FormControl;
  }

  back() {
    this.router.navigate(['/']);
  }

  onFileChange(files: File[]) {
    this.files = files;
  }

  async onSubmit() {
    if (this.form.valid) {
      this.isSaving = true;
      const figurine = await this.prepareFigurine();
      this.submitted.emit(figurine);
    }
  }

  private createForm() {
    return this.fb.group({
      id: this.figurine && this.figurine.id,
      bibliography: this.fb.group({
        longReference: this.fb.control(
          this.figurine && this.figurine.longReference,
          Validators.required
        ),
        shortReference: this.fb.control(
          this.figurine && this.figurine.shortReference
        ),
        description: this.fb.control(
          this.figurine && this.figurine.description
        ),
        photo: this.fb.control(this.figurine && this.figurine.photo),
        images: this.fb.control(this.figurine && this.figurine.images)
      }),
      locations: this.fb.group({
        origin: this.fb.control(this.figurine && this.figurine.origin),
        sanctuary: this.fb.control(this.figurine && this.figurine.sanctuary),
        workshop: this.fb.control(this.figurine && this.figurine.workshop)
      }),
      details: this.fb.group({
        type: this.fb.control(this.figurine && this.figurine.type),
        particularities: this.fb.control(
          this.figurine && this.figurine.particularities
        )
      })
    });
  }

  private async prepareFigurine() {
    const formModel = this.form.value;

    const figurine = new Figurine();
    figurine.id = formModel.id;
    figurine.description = formModel.bibliography.description;
    figurine.photo = formModel.bibliography.photo;
    figurine.images = formModel.bibliography.images;
    figurine.longReference = formModel.bibliography.longReference;
    figurine.shortReference = formModel.bibliography.shortReference;
    figurine.origin = formModel.locations.origin;
    figurine.sanctuary = formModel.locations.sanctuary;
    figurine.workshop = formModel.locations.workshop;
    figurine.type = formModel.details.type;
    figurine.particularities = formModel.details.particularities;

    console.log(figurine);

    return figurine;
  }
}
