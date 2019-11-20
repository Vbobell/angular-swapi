import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TitleMainComponent } from './title-main.component';

describe('TitleMainComponent', () => {
  let component: TitleMainComponent;
  let fixture: ComponentFixture<TitleMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TitleMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TitleMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
