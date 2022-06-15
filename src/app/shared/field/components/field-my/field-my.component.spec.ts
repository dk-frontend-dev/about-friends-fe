import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FieldMyComponent } from './field-my.component';

describe('FieldMyComponent', () => {
  let component: FieldMyComponent;
  let fixture: ComponentFixture<FieldMyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FieldMyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FieldMyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
