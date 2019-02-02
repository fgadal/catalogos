import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FigurineCreatePageComponent } from './figurine-create-page.component';

describe('FigurineCreatePageComponent', () => {
  let component: FigurineCreatePageComponent;
  let fixture: ComponentFixture<FigurineCreatePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FigurineCreatePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FigurineCreatePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
