import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EscapeGameDetailComponent } from './escape-game-detail.component';

describe('EscapeGameDetailComponent', () => {
  let component: EscapeGameDetailComponent;
  let fixture: ComponentFixture<EscapeGameDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EscapeGameDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EscapeGameDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
