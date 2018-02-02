import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MixdoubleComponent } from './mixdouble.component';

describe('MixdoubleComponent', () => {
  let component: MixdoubleComponent;
  let fixture: ComponentFixture<MixdoubleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MixdoubleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MixdoubleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
