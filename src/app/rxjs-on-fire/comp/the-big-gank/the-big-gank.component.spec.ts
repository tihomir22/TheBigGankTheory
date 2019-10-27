import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TheBigGankComponent } from './the-big-gank.component';

describe('TheBigGankComponent', () => {
  let component: TheBigGankComponent;
  let fixture: ComponentFixture<TheBigGankComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TheBigGankComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TheBigGankComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
