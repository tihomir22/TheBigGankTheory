import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BestCustomCardComponent } from './best-custom-card.component';

describe('BestCustomCardComponent', () => {
  let component: BestCustomCardComponent;
  let fixture: ComponentFixture<BestCustomCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BestCustomCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BestCustomCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
