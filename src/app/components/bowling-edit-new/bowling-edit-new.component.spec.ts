import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BowlingEditNewComponent } from './bowling-edit-new.component';

describe('BowlingEditNewComponent', () => {
  let component: BowlingEditNewComponent;
  let fixture: ComponentFixture<BowlingEditNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BowlingEditNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BowlingEditNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
