import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditNewEmployeComponent } from './edit-new-employe.component';

describe('EditNewEmployeComponent', () => {
  let component: EditNewEmployeComponent;
  let fixture: ComponentFixture<EditNewEmployeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditNewEmployeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditNewEmployeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
