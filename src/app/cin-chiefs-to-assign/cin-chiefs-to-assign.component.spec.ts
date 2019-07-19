import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CinChiefsToAssignComponent } from './cin-chiefs-to-assign.component';

describe('CinChiefsToAssignComponent', () => {
  let component: CinChiefsToAssignComponent;
  let fixture: ComponentFixture<CinChiefsToAssignComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CinChiefsToAssignComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CinChiefsToAssignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
