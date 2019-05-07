import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EscapeGameNewEditComponent } from './escape-game-new-edit.component';

describe('EscapeGameNewEditComponent', () => {
  let component: EscapeGameNewEditComponent;
  let fixture: ComponentFixture<EscapeGameNewEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EscapeGameNewEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EscapeGameNewEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
