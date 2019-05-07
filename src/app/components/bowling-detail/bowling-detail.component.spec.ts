import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BowlingDetailComponent } from './bowling-detail.component';

describe('BowlingDetailComponent', () => {
  let component: BowlingDetailComponent;
  let fixture: ComponentFixture<BowlingDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BowlingDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BowlingDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
