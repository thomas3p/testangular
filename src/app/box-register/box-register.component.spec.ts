import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxRegisterComponent } from './box-register.component';

describe('BoxRegisterComponent', () => {
  let component: BoxRegisterComponent;
  let fixture: ComponentFixture<BoxRegisterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BoxRegisterComponent]
    });
    fixture = TestBed.createComponent(BoxRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
