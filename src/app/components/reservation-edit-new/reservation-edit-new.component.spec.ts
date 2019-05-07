import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservationEditNewComponent } from './reservation-edit-new.component';

describe('ReservationEditNewComponent', () => {
  let component: ReservationEditNewComponent;
  let fixture: ComponentFixture<ReservationEditNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReservationEditNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReservationEditNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
