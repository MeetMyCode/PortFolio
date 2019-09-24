import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InitialOverlayComponent } from './initial-overlay.component';

describe('InitialOverlayComponent', () => {
  let component: InitialOverlayComponent;
  let fixture: ComponentFixture<InitialOverlayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InitialOverlayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InitialOverlayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
