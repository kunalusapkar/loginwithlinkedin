import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginlinkedinComponent } from './loginlinkedin.component';

describe('LoginlinkedinComponent', () => {
  let component: LoginlinkedinComponent;
  let fixture: ComponentFixture<LoginlinkedinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginlinkedinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginlinkedinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
