import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CafeHouseComponent } from './cafe-house.component';

describe('CafeHouseComponent', () => {
  let component: CafeHouseComponent;
  let fixture: ComponentFixture<CafeHouseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CafeHouseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CafeHouseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
