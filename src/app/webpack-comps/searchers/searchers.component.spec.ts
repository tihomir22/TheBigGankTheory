import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchersComponent } from './searchers.component';

describe('SearchersComponent', () => {
  let component: SearchersComponent;
  let fixture: ComponentFixture<SearchersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
