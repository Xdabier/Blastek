import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CinChiefCreateMovieComponent } from './cin-chief-create-movie.component';

describe('CinChiefCreateMovieComponent', () => {
  let component: CinChiefCreateMovieComponent;
  let fixture: ComponentFixture<CinChiefCreateMovieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CinChiefCreateMovieComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CinChiefCreateMovieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
