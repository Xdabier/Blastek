import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CinChiefHallsListComponent } from './cin-chief-halls-list.component';

describe('CinChiefHallsListComponent', () => {
  let component: CinChiefHallsListComponent;
  let fixture: ComponentFixture<CinChiefHallsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CinChiefHallsListComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CinChiefHallsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
