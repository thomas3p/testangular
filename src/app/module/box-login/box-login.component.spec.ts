import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxLoginComponent } from './box-login.component';

describe('BoxLoginComponent', () => {
  let component: BoxLoginComponent;
  let fixture: ComponentFixture<BoxLoginComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BoxLoginComponent]
    });
    fixture = TestBed.createComponent(BoxLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
