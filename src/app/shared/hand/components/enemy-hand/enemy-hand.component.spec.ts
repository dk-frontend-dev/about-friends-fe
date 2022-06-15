import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnemyHandComponent } from './enemy-hand.component';

describe('EnemyHandComponent', () => {
  let component: EnemyHandComponent;
  let fixture: ComponentFixture<EnemyHandComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnemyHandComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnemyHandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
