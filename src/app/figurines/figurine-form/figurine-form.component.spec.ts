import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FigurineFormComponent } from './figurine-form.component';

describe('FigurineFormComponent', () => {
  let component: FigurineFormComponent;
  let fixture: ComponentFixture<FigurineFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FigurineFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FigurineFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
