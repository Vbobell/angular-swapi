import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionFilmsComponent } from './section-films.component';

describe('SectionFilmsComponent', () => {
  let component: SectionFilmsComponent;
  let fixture: ComponentFixture<SectionFilmsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SectionFilmsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionFilmsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
