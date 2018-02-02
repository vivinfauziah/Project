import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MendoubleComponent } from './mendouble.component';

describe('MendoubleComponent', () => {
  let component: MendoubleComponent;
  let fixture: ComponentFixture<MendoubleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MendoubleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MendoubleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
