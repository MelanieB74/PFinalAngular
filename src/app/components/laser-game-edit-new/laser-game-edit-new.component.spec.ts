import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LaserGameEditNewComponent } from './laser-game-edit-new.component';

describe('LaserGameEditNewComponent', () => {
  let component: LaserGameEditNewComponent;
  let fixture: ComponentFixture<LaserGameEditNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LaserGameEditNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LaserGameEditNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
