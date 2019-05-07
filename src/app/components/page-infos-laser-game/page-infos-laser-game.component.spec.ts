import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageInfosLaserGameComponent } from './page-infos-laser-game.component';

describe('PageInfosLaserGameComponent', () => {
  let component: PageInfosLaserGameComponent;
  let fixture: ComponentFixture<PageInfosLaserGameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageInfosLaserGameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageInfosLaserGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
