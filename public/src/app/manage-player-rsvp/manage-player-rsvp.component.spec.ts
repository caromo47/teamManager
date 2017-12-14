import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagePlayerRsvpComponent } from './manage-player-rsvp.component';

describe('ManagePlayerRsvpComponent', () => {
  let component: ManagePlayerRsvpComponent;
  let fixture: ComponentFixture<ManagePlayerRsvpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagePlayerRsvpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagePlayerRsvpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
