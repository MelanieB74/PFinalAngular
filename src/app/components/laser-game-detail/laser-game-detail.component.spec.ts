import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LaserGameDetailComponent } from './laser-game-detail.component';

describe('LaserGameDetailComponent', () => {
  let component: LaserGameDetailComponent;
  let fixture: ComponentFixture<LaserGameDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LaserGameDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LaserGameDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
