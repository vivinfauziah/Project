import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WomendoubleComponent } from './womendouble.component';

describe('WomendoubleComponent', () => {
  let component: WomendoubleComponent;
  let fixture: ComponentFixture<WomendoubleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WomendoubleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WomendoubleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
