import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CinChiefEditMovieComponent } from './cin-chief-edit-movie.component';

describe('CinChiefEditMovieComponent', () => {
  let component: CinChiefEditMovieComponent;
  let fixture: ComponentFixture<CinChiefEditMovieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CinChiefEditMovieComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CinChiefEditMovieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
