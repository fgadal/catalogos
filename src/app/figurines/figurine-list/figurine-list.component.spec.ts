import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FigurineListComponent } from './figurine-list.component';

describe('FigurineListComponent', () => {
  let component: FigurineListComponent;
  let fixture: ComponentFixture<FigurineListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FigurineListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FigurineListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
