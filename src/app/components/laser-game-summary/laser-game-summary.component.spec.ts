import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LaserGameSummaryComponent } from './laser-game-summary.component';

describe('LaserGameSummaryComponent', () => {
  let component: LaserGameSummaryComponent;
  let fixture: ComponentFixture<LaserGameSummaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LaserGameSummaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LaserGameSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
