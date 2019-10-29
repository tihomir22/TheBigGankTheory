import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccionesCustomCompComponent } from './acciones-custom-comp.component';

describe('AccionesCustomCompComponent', () => {
  let component: AccionesCustomCompComponent;
  let fixture: ComponentFixture<AccionesCustomCompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccionesCustomCompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccionesCustomCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
