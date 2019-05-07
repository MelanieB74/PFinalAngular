import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EscapeGameListComponent } from './escape-game-list.component';

describe('EscapeGameListComponent', () => {
  let component: EscapeGameListComponent;
  let fixture: ComponentFixture<EscapeGameListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EscapeGameListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EscapeGameListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
