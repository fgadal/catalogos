import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FigurineEditPageComponent } from './figurine-edit-page.component';

describe('FigurineEditPageComponent', () => {
  let component: FigurineEditPageComponent;
  let fixture: ComponentFixture<FigurineEditPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FigurineEditPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FigurineEditPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
