import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BowlingListComponent } from './bowling-list.component';

describe('BowlingListComponent', () => {
  let component: BowlingListComponent;
  let fixture: ComponentFixture<BowlingListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BowlingListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BowlingListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
