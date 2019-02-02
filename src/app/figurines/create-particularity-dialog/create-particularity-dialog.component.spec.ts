import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateParticularityDialogComponent } from './create-particularity-dialog.component';

describe('CreateParticularityDialogComponent', () => {
  let component: CreateParticularityDialogComponent;
  let fixture: ComponentFixture<CreateParticularityDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateParticularityDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateParticularityDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
