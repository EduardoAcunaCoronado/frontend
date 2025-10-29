import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormFirst } from './form-first';

describe('FormFirst', () => {
  let component: FormFirst;
  let fixture: ComponentFixture<FormFirst>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormFirst]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormFirst);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
