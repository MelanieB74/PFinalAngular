import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EscapeGameSummaryComponent } from './escape-game-summary.component';

describe('EscapeGameSummaryComponent', () => {
  let component: EscapeGameSummaryComponent;
  let fixture: ComponentFixture<EscapeGameSummaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EscapeGameSummaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EscapeGameSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
