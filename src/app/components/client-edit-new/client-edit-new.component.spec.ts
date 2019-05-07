import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientEditNewComponent } from './client-edit-new.component';

describe('ClientEditNewComponent', () => {
  let component: ClientEditNewComponent;
  let fixture: ComponentFixture<ClientEditNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientEditNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientEditNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
