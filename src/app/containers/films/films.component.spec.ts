import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";
import { StoreModule } from '@ngrx/store';

import { FilmsComponent } from './films.component';
import { listReducer } from '../../store/films/films.reducer';

describe('FilmsComponent', () => {
  let component: FilmsComponent;
  let fixture: ComponentFixture<FilmsComponent>;
  let storeMock;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilmsComponent ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
      imports: [
        HttpClientModule,
        StoreModule.forRoot({ 
          films: listReducer 
        })
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilmsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
