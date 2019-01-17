import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThankyoucomponentComponent } from './thankyoucomponent.component';

describe('ThankyoucomponentComponent', () => {
  let component: ThankyoucomponentComponent;
  let fixture: ComponentFixture<ThankyoucomponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThankyoucomponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThankyoucomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
