import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LaserGameListComponent } from './laser-game-list.component';

describe('LaserGameListComponent', () => {
  let component: LaserGameListComponent;
  let fixture: ComponentFixture<LaserGameListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LaserGameListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LaserGameListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
