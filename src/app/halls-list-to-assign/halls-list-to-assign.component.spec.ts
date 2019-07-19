import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HallsListToAssignComponent } from './halls-list-to-assign.component';

describe('HallsListToAssignComponent', () => {
  let component: HallsListToAssignComponent;
  let fixture: ComponentFixture<HallsListToAssignComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HallsListToAssignComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HallsListToAssignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
