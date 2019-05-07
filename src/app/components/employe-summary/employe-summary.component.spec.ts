import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeSummaryComponent } from './employe-summary.component';

describe('EmployeSummaryComponent', () => {
  let component: EmployeSummaryComponent;
  let fixture: ComponentFixture<EmployeSummaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeSummaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
