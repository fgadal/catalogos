import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParticularitySelectorComponent } from './particularity-selector.component';

describe('ParticularitySelectorComponent', () => {
  let component: ParticularitySelectorComponent;
  let fixture: ComponentFixture<ParticularitySelectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParticularitySelectorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParticularitySelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
