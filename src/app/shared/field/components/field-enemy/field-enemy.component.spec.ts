import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FieldEnemyComponent } from './field-enemy.component';

describe('FieldEnemyComponent', () => {
  let component: FieldEnemyComponent;
  let fixture: ComponentFixture<FieldEnemyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FieldEnemyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FieldEnemyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
