import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BowlingSummaryComponent } from './bowling-summary.component';

describe('BowlingSummaryComponent', () => {
  let component: BowlingSummaryComponent;
  let fixture: ComponentFixture<BowlingSummaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BowlingSummaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BowlingSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
